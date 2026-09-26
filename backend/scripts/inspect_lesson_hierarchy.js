const { Pool } = require('pg');

async function check() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const js = await p.query(`SELECT id, title, chapter, "order" FROM "Lesson" WHERE "moduleId" = 'javascript' ORDER BY "order" ASC LIMIT 20`);
  console.log('=== Sample JS Lessons ===');
  console.table(js.rows);

  const php = await p.query(`SELECT id, title, chapter, "order" FROM "Lesson" WHERE "moduleId" = 'php' ORDER BY "order" ASC LIMIT 20`);
  console.log('=== Sample PHP Lessons ===');
  console.table(php.rows);

  await p.end();
}

check().catch(console.error);
