const { Pool } = require('pg');

async function updateTitles() {
  const pContent = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db' });
  const pEdutech = new Pool({ connectionString: 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db' });

  console.log('🔄 Memulai penyesuaian judul dan deskripsi modul HTML, CSS, JavaScript, dan PHP agar presisi dengan isi materi...\n');

  const modulesConfig = [
    {
      ids: ['html', '67adde6d-81a6-4470-b88d-506b733f87ee'],
      title: 'HTML & HTML5: Kerangka, Semantik & Web APIs',
      category: 'Frontend',
      description: 'Kuasai fondasi pembuatan website dengan HTML5 modern mulai dari struktur tag dasar, semantik, formulir interaktif, tabel, multimedia audio/video, grafik Canvas/SVG, hingga HTML5 Web APIs.'
    },
    {
      ids: ['css', 'ba1383a2-219d-44ab-bf63-804d5a0f0902'],
      title: 'CSS & CSS3: Desain Web Responsif, Flexbox, Grid & Animasi',
      category: 'Frontend',
      description: 'Kuasai tata letak visual dan estetika website modern dengan CSS3, Box Model, tata letak Flexbox, CSS Grid tingkat lanjut, animasi interaktif, teknik desain responsif multi-perangkat, hingga Sass/SCSS.'
    },
    {
      ids: ['javascript', 'mastering-ui-design-for-impactful-solutions'],
      title: 'JavaScript: Pemrograman Web Modern, DOM, Async & Web APIs',
      category: 'Frontend',
      description: 'Kuasai bahasa pemrograman web paling populer di dunia dari logika fundamental, manipulasi HTML DOM & Events, pemrograman asinkronus (Promise & Async/Await), Fetch API, ES6+ Classes, hingga Web APIs modern.'
    },
    {
      ids: ['php'],
      title: 'PHP 8: Backend Web Development, OOP, Database & API',
      category: 'Backend',
      description: 'Kuasai pemrograman server-side kelas enterprise dengan PHP 8 modern mulai dari logika dasar, validasi formulir aman, Object-Oriented Programming (OOP), konektivitas database MySQL & PostgreSQL, pemrosesan XML/JSON, kompresi Zip, arsitektur REST API, hingga referensi lengkap fungsi PHP.'
    }
  ];

  for (const cfg of modulesConfig) {
    console.log(`📌 Memperbarui Modul: "${cfg.title}"`);

    // Update di lms_content_db
    for (const id of cfg.ids) {
      const res1 = await pContent.query(
        'UPDATE "Module" SET title = $1, category = $2, description = $3, "updatedAt" = NOW() WHERE id = $4',
        [cfg.title, cfg.category, cfg.description, id]
      );
      if (res1.rowCount > 0) {
        console.log(`  ✓ [lms_content_db] Modul ID '${id}' berhasil diperbarui (${res1.rowCount})`);
      }
    }

    // Update di lms_edutech_db
    for (const id of cfg.ids) {
      const res2 = await pEdutech.query(
        'UPDATE "Module" SET title = $1, category = $2, description = $3, "updatedAt" = NOW() WHERE id = $4',
        [cfg.title, cfg.category, cfg.description, id]
      );
      if (res2.rowCount > 0) {
        console.log(`  ✓ [lms_edutech_db] Modul ID '${id}' berhasil diperbarui (${res2.rowCount})`);
      }
    }
  }

  // Tampilkan hasil akhir
  console.log('\n📊 HASIL AKHIR DI lms_content_db:');
  const finalContent = await pContent.query('SELECT id, title, category FROM "Module" ORDER BY "order", id');
  console.table(finalContent.rows);

  console.log('\n📊 HASIL AKHIR DI lms_edutech_db:');
  const finalEdutech = await pEdutech.query('SELECT id, title, category FROM "Module" ORDER BY id');
  console.table(finalEdutech.rows);

  await pContent.end();
  await pEdutech.end();
}

updateTitles().catch(console.error);
