import prisma from './lib/prisma';

async function seed() {
  console.log('Seeding Quizizz sample data...');

  // Find an instructor or user
  let instructor = await prisma.user.findFirst({
    where: { role: 'INSTRUCTOR' }
  });

  if (!instructor) {
    instructor = await prisma.user.findFirst();
  }

  if (!instructor) {
    console.error('No user found in database to set as creator!');
    return;
  }

  // Find HTML module
  let htmlModule = await prisma.module.findFirst({
    where: {
      OR: [
        { title: { contains: 'HTML', mode: 'insensitive' } },
        { category: { contains: 'Programming', mode: 'insensitive' } },
        { category: { contains: 'Web', mode: 'insensitive' } }
      ]
    }
  });

  const creatorId = instructor.id;
  const moduleId = htmlModule ? htmlModule.id : null;

  // 1. Create HTML5 Sample Quiz
  const quiz1 = await prisma.quizizz.create({
    data: {
      title: 'Kuis Kilat HTML5 & Web Fundamentals ⚡',
      description: 'Uji wawasan Anda tentang tag HTML5, elemen semantic, form, dan struktur dokumen web!',
      pinCode: 'QZ-5821',
      creatorId,
      moduleId,
      timePerQuestion: 20,
      questions: {
        create: [
          {
            question: 'Apa kepanjangan dari singkatan HTML dalam pengembangan web?',
            optionA: 'Hyper Text Markup Language',
            optionB: 'High Tech Modern Language',
            optionC: 'Hyper Transfer Mode Language',
            optionD: 'Home Tool Markup Language',
            correctOption: 'A',
            explanation: 'HTML singkatan dari Hyper Text Markup Language, yaitu bahasa standar pemformatan dokumen web.',
            points: 1000,
            order: 1
          },
          {
            question: 'Tag manakah yang digunakan untuk mendefinisikan judul utama paling penting dalam dokumen HTML?',
            optionA: '<head>',
            optionB: '<h1>',
            optionC: '<header>',
            optionD: '<h6>',
            correctOption: 'B',
            explanation: '<h1> menandakan Heading 1, yaitu judul dengan hierarki tertinggi dalam struktur dokumen HTML.',
            points: 1000,
            order: 2
          },
          {
            question: 'Elemen semantic HTML5 yang digunakan secara khusus untuk membungkus navigasi utama adalah?',
            optionA: '<section>',
            optionB: '<div>',
            optionC: '<nav>',
            optionD: '<aside>',
            correctOption: 'C',
            explanation: '<nav> adalah tag semantic yang dirancang untuk kelompok tautan navigasi utama.',
            points: 1000,
            order: 3
          },
          {
            question: 'Atribut wajib pada tag <img> untuk memberikan deskripsi alternatif saat gambar gagal dimuat adalah?',
            optionA: 'src',
            optionB: 'alt',
            optionC: 'title',
            optionD: 'description',
            correctOption: 'B',
            explanation: 'Atribut alt (alternative text) digunakan oleh screen reader dan ditampilkan saat file gambar tidak ditemukan.',
            points: 1000,
            order: 4
          },
          {
            question: 'Tag HTML yang digunakan untuk membuat daftar berurutan (numbered list 1, 2, 3) adalah?',
            optionA: '<ul>',
            optionB: '<ol>',
            optionC: '<li>',
            optionD: '<dl>',
            correctOption: 'B',
            explanation: '<ol> singkatan dari Ordered List, digunakan untuk daftar dengan nomor berurutan.',
            points: 1000,
            order: 5
          }
        ]
      }
    }
  });

  // 2. Create CSS Flexbox Sample Quiz
  const quiz2 = await prisma.quizizz.create({
    data: {
      title: 'Mastery Test: CSS Flexbox & Layouts 🎨',
      description: 'Tantangan kuis cepat tentang properti CSS Flexbox, Grid, dan media queries!',
      pinCode: 'QZ-9304',
      creatorId,
      moduleId,
      timePerQuestion: 15,
      questions: {
        create: [
          {
            question: 'Properti CSS apa yang digunakan untuk mengaktifkan kontainer Flexbox?',
            optionA: 'display: flex',
            optionB: 'flex-direction: row',
            optionC: 'position: flex',
            optionD: 'float: left',
            correctOption: 'A',
            explanation: 'display: flex mengubah elemen kontainer menjadi flex container.',
            points: 1000,
            order: 1
          },
          {
            question: 'Untuk meratakan elemen flex horizontal di tengah pada main axis, properti yang digunakan adalah?',
            optionA: 'align-items: center',
            optionB: 'justify-content: center',
            optionC: 'text-align: center',
            optionD: 'align-content: center',
            correctOption: 'B',
            explanation: 'justify-content meratakan item pada sumbu utama (main axis), sedangkan align-items pada cross axis.',
            points: 1000,
            order: 2
          },
          {
            question: 'Nilai display manakah yang membuat elemen berada segaris dengan teks tanpa membuat baris baru?',
            optionA: 'block',
            optionB: 'inline',
            optionC: 'flex-column',
            optionD: 'grid',
            correctOption: 'B',
            explanation: 'display: inline mempertahankan elemen di dalam aliran paragraf tanpa ganti baris.',
            points: 1000,
            order: 3
          }
        ]
      }
    }
  });

  console.log('Quizizz sample data seeded successfully!');
  console.log('Created Quiz 1 ID:', quiz1.id, 'PIN:', quiz1.pinCode);
  console.log('Created Quiz 2 ID:', quiz2.id, 'PIN:', quiz2.pinCode);
}

seed()
  .catch((e) => console.error('Error seeding Quizizz:', e))
  .finally(() => prisma.$disconnect());
