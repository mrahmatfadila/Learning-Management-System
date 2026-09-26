const { Pool } = require('pg');

async function inspectGit() {
  const p1 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const p2 = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  try {
    console.log('=== lms_content_db (Git Module) ===');
    const m1 = await p1.query(`SELECT * FROM "Module" WHERE id = 'git'`);
    console.log('Module:', m1.rows);
    const c1 = await p1.query(`SELECT * FROM "Chapter" WHERE "moduleId" = 'git' ORDER BY "order" ASC`);
    console.log('Chapters:', c1.rows);
    const l1 = await p1.query(`SELECT id, title, "order", "chapterId" FROM "Lesson" WHERE "moduleId" = 'git' ORDER BY "order" ASC`);
    console.log('Lessons count:', l1.rowCount);

    console.log('\n=== lms_edutech_db (Git Module) ===');
    const m2 = await p2.query(`SELECT * FROM "Module" WHERE id LIKE '%git%'`);
    console.log('Module:', m2.rows);
    const c2 = await p2.query(`SELECT * FROM "Chapter" WHERE "moduleId" LIKE '%git%' ORDER BY "order" ASC`);
    console.log('Chapters:', c2.rows);
    const l2 = await p2.query(`SELECT id, title, "order", "chapterId", "moduleId" FROM "Lesson" WHERE "moduleId" LIKE '%git%' ORDER BY "order" ASC LIMIT 10`);
    console.log('Lessons count:', l2.rowCount, 'Sample:', l2.rows);
  } finally {
    await p1.end();
    await p2.end();
  }
}

inspectGit().catch(console.error);
