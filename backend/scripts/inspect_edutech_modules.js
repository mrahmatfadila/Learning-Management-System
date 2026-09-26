const { Pool } = require('pg');

async function check() {
  const p = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const res = await p.query(`
    SELECT 
      m.id, 
      m.title, 
      m.category,
      m."isVerified",
      COUNT(DISTINCT l.id) as lessons_count, 
      COUNT(DISTINCT e.id) as enroll_count,
      COUNT(DISTINCT r.id) as reviews_count
    FROM "Module" m
    LEFT JOIN "Lesson" l ON l."moduleId" = m.id
    LEFT JOIN "Enrollment" e ON e."moduleId" = m.id
    LEFT JOIN "Review" r ON r."moduleId" = m.id
    GROUP BY m.id, m.title, m.category, m."isVerified"
    ORDER BY m.id;
  `);
  console.table(res.rows);
  await p.end();
}

check().catch(console.error);
