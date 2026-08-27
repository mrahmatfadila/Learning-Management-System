const { Pool } = require('pg');

async function syncPhpInstructor() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  // Update modul PHP ke akun DevGrow Academy utama (bagus@lms.test - 96be9160-e6f4-477c-9fce-64c5c1e27518)
  const res = await p.query(
    'UPDATE "Module" SET "instructorId" = $1, "updatedAt" = NOW() WHERE id = $2 RETURNING *',
    ['96be9160-e6f4-477c-9fce-64c5c1e27518', 'php']
  );

  console.log('✅ Modul PHP berhasil ditetapkan ke DevGrow Academy (bagus@lms.test):');
  console.log('  • Module ID:', res.rows[0]?.id);
  console.log('  • Title:', res.rows[0]?.title);
  console.log('  • Instructor ID:', res.rows[0]?.instructorId);

  // Verifikasi semua modul milik DevGrow Academy (bagus@lms.test)
  const allDevGrow = await p.query(
    'SELECT id, title, "instructorId" FROM "Module" WHERE "instructorId" = $1 ORDER BY title',
    ['96be9160-e6f4-477c-9fce-64c5c1e27518']
  );
  console.log(`\n📋 Total Modul Aktif di Course Management DevGrow Academy (bagus@lms.test): ${allDevGrow.rows.length} Modul`);
  console.table(allDevGrow.rows);

  await p.end();
}

syncPhpInstructor().catch(console.error);
