const { Pool } = require('pg');

async function inspectPython() {
  const p1 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const p2 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  try {
    console.log('=== lms_content_db (Python Module) ===');
    const m1 = await p1.query(`SELECT * FROM "Module" WHERE id LIKE '%python%' OR title ILIKE '%python%'`);
    console.log('Modules:', m1.rows);
    const c1 = await p1.query(`SELECT * FROM "Chapter" WHERE "moduleId" LIKE '%python%' ORDER BY "order" ASC`);
    console.log('Chapters:', c1.rows);

    console.log('\n=== lms_edutech_db (Python Module) ===');
    const m2 = await p2.query(`SELECT * FROM "Module" WHERE id LIKE '%python%' OR title ILIKE '%python%'`);
    console.log('Modules:', m2.rows);
    const c2 = await p2.query(`SELECT * FROM "Chapter" WHERE "moduleId" LIKE '%python%' ORDER BY "order" ASC`);
    console.log('Chapters:', c2.rows);
  } finally {
    await p1.end();
    await p2.end();
  }
}

inspectPython().catch(console.error);
