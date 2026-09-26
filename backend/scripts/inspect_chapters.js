const { Pool } = require('pg');

async function checkChaps() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const res = await p.query('SELECT id, title, "order" FROM "Chapter" WHERE "moduleId" = \'javascript\' ORDER BY "order" ASC');
  console.table(res.rows);
  await p.end();
}
checkChaps();
