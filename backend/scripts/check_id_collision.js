const { Pool } = require('pg');

async function test() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const res = await pContent.query("SELECT id, title, \"order\" FROM \"Lesson\" WHERE id = 'js-statements' OR id = 'js-history' OR title ILIKE '%statements%' OR title ILIKE '%history%'");
  console.log('Matches in Content DB:', res.rows);
  await pContent.end();
}
test();
