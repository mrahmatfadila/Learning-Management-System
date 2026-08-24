const { Pool } = require('pg');

async function check() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const ch = await p.query(`SELECT id, title, "moduleId", "order" FROM "Chapter" WHERE "moduleId" = 'ba1383a2-219d-44ab-bf63-804d5a0f0902' ORDER BY "order" ASC`);
  console.log('Chapters in lms_edutech_db:', ch.rows);
  await p.end();
}

check().catch(console.error);
