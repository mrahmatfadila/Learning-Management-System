const { Pool } = require('pg');

async function check() {
  const p1 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const p2 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('=== MODULES IN LMS_CONTENT_DB ===');
  const m1 = await p1.query('SELECT id, title, category, description FROM "Module" ORDER BY id');
  console.table(m1.rows);

  console.log('=== MODULES IN LMS_EDUTECH_DB ===');
  const m2 = await p2.query('SELECT id, title, category, description FROM "Module" ORDER BY id');
  console.table(m2.rows);

  console.log('=== CHAPTERS IN LMS_CONTENT_DB ===');
  const c1 = await p1.query('SELECT "moduleId", id, title, "order" FROM "Chapter" ORDER BY "moduleId", "order"');
  console.table(c1.rows);

  await p1.end();
  await p2.end();
}
check();
