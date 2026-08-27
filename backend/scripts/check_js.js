const { Pool } = require('pg');
async function check() {
  const p2 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  
  console.log('--- Chapters in lms_content_db:');
  const chaps = await p2.query('SELECT id, title, "order" FROM "Chapter" WHERE "moduleId" = \'javascript\' ORDER BY "order" ASC');
  console.log(chaps.rows);

  console.log('--- Lessons count in lms_content_db:');
  const count = await p2.query('SELECT count(*) FROM "Lesson" WHERE "moduleId" = \'javascript\'');
  console.log(count.rows[0]);

  console.log('--- All 22 Lessons in lms_content_db:');
  const lessons = await p2.query('SELECT id, title, chapter, "order" FROM "Lesson" WHERE "moduleId" = \'javascript\' ORDER BY "order" ASC');
  console.table(lessons.rows);

  await p2.end();
}
check().catch(console.error);
