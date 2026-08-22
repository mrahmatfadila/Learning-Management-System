import prisma from '../src/lib/prisma';

const aliasPairs = [
  { duplicateId: 'html', primaryId: '67adde6d-81a6-4470-b88d-506b733f87ee' },
  { duplicateId: 'css', primaryId: 'ba1383a2-219d-44ab-bf63-804d5a0f0902' },
  { duplicateId: 'javascript', primaryId: 'mastering-ui-design-for-impactful-solutions' },
  { duplicateId: 'php', primaryId: 'php-backend-mastery' },
  { duplicateId: 'mysql', primaryId: 'mysql-relational-database' },
  { duplicateId: 'git', primaryId: 'git-github-version-control' },
  { duplicateId: 'mobile', primaryId: 'mobile-app-java-android' },
  { duplicateId: 'cisco', primaryId: 'cisco-packet-tracer' }
];

async function main() {
  console.log('🔄 Starting safe module deduplication...');

  for (const pair of aliasPairs) {
    const dupMod = await prisma.module.findUnique({ where: { id: pair.duplicateId } });
    const priMod = await prisma.module.findUnique({ where: { id: pair.primaryId } });

    if (!dupMod || !priMod) {
      console.log(`Skipping pair ${pair.duplicateId} -> ${pair.primaryId} (one not found)`);
      continue;
    }

    // 1. Move enrollments
    const dupEnrollments = await prisma.enrollment.findMany({ where: { moduleId: pair.duplicateId } });
    for (const enr of dupEnrollments) {
      const existingPriEnr = await prisma.enrollment.findUnique({
        where: { studentId_moduleId: { studentId: enr.studentId, moduleId: pair.primaryId } }
      });
      if (existingPriEnr) {
        await prisma.enrollment.delete({ where: { id: enr.id } });
      } else {
        await prisma.enrollment.update({
          where: { id: enr.id },
          data: { moduleId: pair.primaryId }
        });
      }
    }

    // 2. Move reviews
    await prisma.review.updateMany({
      where: { moduleId: pair.duplicateId },
      data: { moduleId: pair.primaryId }
    });

    // 3. Move tasks
    await prisma.task.updateMany({
      where: { moduleId: pair.duplicateId },
      data: { moduleId: pair.primaryId }
    });

    // 4. Delete lessons attached specifically to duplicate module
    await prisma.lesson.deleteMany({
      where: { moduleId: pair.duplicateId }
    });

    // 5. Delete duplicate module
    await prisma.module.delete({
      where: { id: pair.duplicateId }
    });

    console.log(`✅ Deduplicated: Removed ${pair.duplicateId} (merged into ${pair.primaryId})`);
  }

  console.log('🎉 Deduplication completed successfully!');
  process.exit(0);
}

main().catch(err => {
  console.error('Error during deduplication:', err);
  process.exit(1);
});
