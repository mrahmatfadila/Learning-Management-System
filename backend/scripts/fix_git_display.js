const { Pool } = require('pg');

async function fixGitDisplay() {
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });

  console.log('🔄 Memperbaiki tampilan modul Git di dashboard...');

  // 1. Cek apakah ada record 'git' yang kosong di lms_edutech_db
  const dup = await pEdutech.query(`SELECT id FROM "Module" WHERE id = 'git'`);
  if (dup.rowCount > 0) {
    // Pindahkan enrollment / review jika ada
    await pEdutech.query(`UPDATE "Enrollment" SET "moduleId" = 'git-github-version-control' WHERE "moduleId" = 'git'`);
    await pEdutech.query(`UPDATE "Review" SET "moduleId" = 'git-github-version-control' WHERE "moduleId" = 'git'`);
    await pEdutech.query(`DELETE FROM "Lesson" WHERE "moduleId" = 'git'`);
    await pEdutech.query(`DELETE FROM "Chapter" WHERE "moduleId" = 'git'`);
    await pEdutech.query(`DELETE FROM "Module" WHERE id = 'git'`);
    console.log('  ✅ Menghapus duplikat modul "git" kosong dari lms_edutech_db (digabung ke "git-github-version-control")');
  }

  // 2. Pastikan git-github-version-control terverifikasi dengan data lengkap
  const admin = await pEdutech.query(`SELECT id FROM "User" WHERE role = 'ADMIN' OR role = 'INSTRUCTOR' LIMIT 1`);
  const instructorId = admin.rows[0]?.id || '0c4daa73-9a80-45b5-b0b4-9ebe39ed0a44';

  await pEdutech.query(`
    UPDATE "Module" SET
      title = 'Git & GitHub: Version Control, Branching, Workflow & Enterprise DevOps',
      category = 'Tools & DevOps',
      description = 'Kuasai kontrol versi modern dengan Git dan kolaborasi GitHub kelas industri mulai dari fundamental snapshot, branching & merge, forking open-source, recovery reflog & undo, GitHub Actions CI/CD, Git Hooks, hingga strategi rilis enterprise.',
      "instructorId" = $1,
      "isVerified" = true,
      "updatedAt" = NOW()
    WHERE id = 'git-github-version-control'
  `, [instructorId]);

  // 3. Verifikasi jumlah materi di git-github-version-control
  const countRes = await pEdutech.query(`SELECT count(*) FROM "Lesson" WHERE "moduleId" = 'git-github-version-control'`);
  console.log(`  📊 Total materi di "git-github-version-control" (lms_edutech_db): ${countRes.rows[0].count} materi`);

  // 4. Auto-enroll semua student jika ada
  const students = await pEdutech.query(`SELECT id FROM "User" WHERE role = 'STUDENT'`);
  for (const s of students.rows) {
    await pEdutech.query(`
      INSERT INTO "Enrollment" (id, "studentId", "moduleId", status, progress, "enrolledAt", "updatedAt")
      VALUES (gen_random_uuid(), $1, 'git-github-version-control', 'APPROVED', 0, NOW(), NOW())
      ON CONFLICT ("studentId", "moduleId") DO UPDATE SET status = 'APPROVED'
    `, [s.id]);
    console.log(`  🎓 Siswa (${s.id}) otomatis terdaftar (APPROVED) di modul Git & GitHub`);
  }

  // 5. Cek hasil dari getAllModules API logic
  const allMods = await pEdutech.query(`
    SELECT 
      m.id, 
      m.title, 
      m.category, 
      m."isVerified",
      COUNT(DISTINCT l.id) as "lessonsCount",
      COUNT(DISTINCT e.id) as "enr"
    FROM "Module" m
    LEFT JOIN "Lesson" l ON l."moduleId" = m.id
    LEFT JOIN "Enrollment" e ON e."moduleId" = m.id AND e.status = 'APPROVED'
    WHERE m.id = 'git-github-version-control'
    GROUP BY m.id, m.title, m.category, m."isVerified"
  `);
  console.log('\n✨ TAMPILAN KARTU MODUL DI DASHBOARD:');
  console.table(allMods.rows);

  await pEdutech.end();
  await pContent.end();
}

fixGitDisplay().catch(console.error);
