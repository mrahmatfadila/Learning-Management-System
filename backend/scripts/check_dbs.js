const { Pool } = require('pg');

async function checkContent() {
  const p2 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const modules = await p2.query('SELECT id, title FROM "Module"');
  console.log('Modules in lms_content_db:', modules.rows);

  const chapters = await p2.query('SELECT id, title, "moduleId" FROM "Chapter"');
  console.log('Chapters in lms_content_db:', chapters.rows);

  const cssLessons = await p2.query('SELECT id, title, "order" FROM "Lesson" WHERE id LIKE \'css%\' ORDER BY "order" ASC');
  console.log('CSS Lessons in lms_content_db:', cssLessons.rows);

  await p2.end();
}

checkContent().catch(console.error);
