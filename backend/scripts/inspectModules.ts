import prisma from '../src/lib/prisma';

async function main() {
  const mods = await prisma.module.findMany({
    select: {
      id: true,
      title: true,
      category: true,
      instructorId: true,
      _count: {
        select: {
          lessons: true,
          enrollments: true,
          tasks: true,
          chapters: true
        }
      }
    },
    orderBy: { title: 'asc' }
  });

  console.log(JSON.stringify(mods, null, 2));
  process.exit(0);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
