const { Pool } = require('pg');

async function cleanupOldPhpModule() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🧹 Memulai pembersihan dan penggantian modul PHP lama (php-backend-mastery)...');

  // 1. Migrasi Enrollment dari modul lama ke modul baru 'php'
  const enrollments = await p.query('SELECT * FROM "Enrollment" WHERE "moduleId" = $1', ['php-backend-mastery']);
  for (const enr of enrollments.rows) {
    const existing = await p.query(
      'SELECT id FROM "Enrollment" WHERE "studentId" = $1 AND "moduleId" = $2',
      [enr.studentId, 'php']
    );
    if (existing.rows.length === 0) {
      await p.query(
        'UPDATE "Enrollment" SET "moduleId" = $1, "updatedAt" = NOW() WHERE id = $2',
        ['php', enr.id]
      );
      console.log(`  ✓ Enrollment user ${enr.studentId} dimigrasikan ke modul 'php'`);
    } else {
      await p.query('DELETE FROM "Enrollment" WHERE id = $1', [enr.id]);
      console.log(`  ✓ Enrollment duplikat ${enr.id} dihapus`);
    }
  }

  // 2. Migrasi ModuleLike jika ada
  try {
    const likes = await p.query('SELECT * FROM "ModuleLike" WHERE "moduleId" = $1', ['php-backend-mastery']);
    for (const l of likes.rows) {
      const existing = await p.query(
        'SELECT id FROM "ModuleLike" WHERE "userId" = $1 AND "moduleId" = $2',
        [l.userId, 'php']
      );
      if (existing.rows.length === 0) {
        await p.query('UPDATE "ModuleLike" SET "moduleId" = $1 WHERE id = $2', ['php', l.id]);
      } else {
        await p.query('DELETE FROM "ModuleLike" WHERE id = $1', [l.id]);
      }
    }
  } catch (e) {}

  // 3. Migrasi Review jika ada
  try {
    const reviews = await p.query('SELECT * FROM "Review" WHERE "moduleId" = $1', ['php-backend-mastery']);
    for (const r of reviews.rows) {
      await p.query('UPDATE "Review" SET "moduleId" = $1 WHERE id = $2', ['php', r.id]);
    }
  } catch (e) {}

  // 4. Hapus Lesson lama pada 'php-backend-mastery'
  const delLessons = await p.query('DELETE FROM "Lesson" WHERE "moduleId" = $1', ['php-backend-mastery']);
  console.log(`  ✓ ${delLessons.rowCount} materi lama dari 'php-backend-mastery' dihapus`);

  // 5. Hapus Chapter lama pada 'php-backend-mastery'
  const delChapters = await p.query('DELETE FROM "Chapter" WHERE "moduleId" = $1', ['php-backend-mastery']);
  console.log(`  ✓ ${delChapters.rowCount} bab lama dari 'php-backend-mastery' dihapus`);

  // 6. Hapus Task lama pada 'php-backend-mastery' jika ada
  try {
    await p.query('DELETE FROM "Task" WHERE "moduleId" = $1', ['php-backend-mastery']);
  } catch (e) {}

  // 7. Hapus Modul lama 'php-backend-mastery'
  const delModule = await p.query('DELETE FROM "Module" WHERE id = $1', ['php-backend-mastery']);
  console.log(`  ✓ Modul lama 'php-backend-mastery' (${delModule.rowCount}) berhasil dihapus`);

  // 8. Verifikasi modul 'php' aktif
  const phpMod = await p.query('SELECT id, title, category FROM "Module" WHERE id = $1', ['php']);
  const phpCount = await p.query('SELECT count(*) FROM "Lesson" WHERE "moduleId" = $1', ['php']);
  const phpChap = await p.query('SELECT count(*) FROM "Chapter" WHERE "moduleId" = $1', ['php']);

  console.log('\n✅ VERIFIKASI MODUL PHP UTAMA DI lms_edutech_db:');
  console.log(`  • ID Modul: ${phpMod.rows[0]?.id}`);
  console.log(`  • Judul: ${phpMod.rows[0]?.title}`);
  console.log(`  • Kategori: ${phpMod.rows[0]?.category}`);
  console.log(`  • Total Bab: ${phpChap.rows[0]?.count}`);
  console.log(`  • Total Materi: ${phpCount.rows[0]?.count}`);

  await p.end();
}

cleanupOldPhpModule().catch(console.error);
