const { Pool } = require('pg');

async function executeCleanup() {
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });

  const obsoleteIds = [
    'js-functions', 'js-objects', 'js-errors', 'js-debugging', 
    'js-adv-functions', 'js-adv-objects', 'js-async', 'js-promises', 
    'js-async-await', 'js-modules', 'js-spread-rest', 'js-closures', 
    'js-dom-intro', 'js-dom-selectors', 'js-dom-events', 'js-dom-manipulation', 
    'js-dom-forms', 'js-fetch', 'js-json', 'js-localstorage', 'js-ajax'
  ];

  console.log(`🧹 Membersihkan ${obsoleteIds.length} materi lama/usang dari lms_edutech_db...`);

  const deleteRes = await pEdutech.query(`
    DELETE FROM "Lesson"
    WHERE ("moduleId" = 'mastering-ui-design-for-impactful-solutions' OR "moduleId" = 'javascript')
      AND id = ANY($1::text[])
  `, [obsoleteIds]);

  console.log(`✅ Berhasil menghapus ${deleteRes.rowCount} record materi lama dari lms_edutech_db.`);

  // Verifikasi kedua database
  const countEdu = await pEdutech.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'mastering-ui-design-for-impactful-solutions' OR "moduleId" = 'javascript'`);
  const countCon = await pContent.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'javascript'`);

  console.log('\n📊 VERIFIKASI AKHIR DATABASE:');
  console.log(`• Total Materi di lms_content_db: ${countCon.rows[0].count} (Target: 306)`);
  console.log(`• Total Materi di lms_edutech_db: ${countEdu.rows[0].count} (Target: 306)`);

  await pEdutech.end();
  await pContent.end();
}

executeCleanup().catch(console.error);
