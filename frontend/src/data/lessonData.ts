import { htmlCourseModules, htmlLessonsData } from './htmlCourseData';
import { cssCourseModules, cssLessonsData, remainingLessons } from './cssCourseData';
import { jsCourseModules, jsAllLessons } from './jsCourseData';
import { phpCourseModules, phpLessonsData } from './phpCourseData';
import { mysqlCourseModules, mysqlLessonsData } from './mysqlCourseData';
import { gitCourseModules, gitLessonsData } from './gitCourseData';
import { mobileCourseModules, mobileLessonsData } from './mobileCourseData';
import { ciscoCourseModules, ciscoLessonsData } from './ciscoCourseData';

export const coursesData = [
  {
    id: 'html',
    title: 'HTML Dasar: Kerangka Web',
    description: 'Pelajari pondasi dasar setiap website menggunakan HTML5. Pahami cara menstruktur teks, gambar, dan link.',
    icon: 'layout',
    color: 'orange',
    modules: htmlCourseModules
  },
  {
    id: 'css',
    title: 'CSS Styling: Desain Web',
    description: 'Ubah website polos menjadi indah dengan CSS. Pelajari warna, tata letak, animasi, flexbox, grid, dan responsive design.',
    icon: 'palette',
    color: 'blue',
    modules: cssCourseModules
  },
  {
    id: 'javascript',
    title: 'JavaScript: Logika & Interaktivitas',
    description: 'Hidupkan websitemu dengan JavaScript. Pelajari variabel, fungsi, DOM, async/await, dan Web APIs.',
    icon: 'terminal',
    color: 'yellow',
    modules: jsCourseModules
  },
  {
    id: 'php',
    title: 'PHP: Server-Side Programming',
    description: 'Kuasai PHP dari dasar hingga OOP, MySQL, AJAX, dan XML. Bangun aplikasi web dinamis dengan bahasa server-side paling populer.',
    icon: 'php',
    color: 'purple',
    modules: phpCourseModules
  },
  {
    id: 'mysql',
    title: 'MySQL: Relational Database',
    description: 'Pelajari MySQL untuk merancang, mengelola, dan mengkueri database menggunakan SQL secara efisien dan aman.',
    icon: 'database',
    color: 'teal',
    modules: mysqlCourseModules
  },
  {
    id: 'git',
    title: 'Git & GitHub Version Control',
    description: 'Kuasai manajemen versi kode dengan Git dan kolaborasi tim profesional menggunakan repositori GitHub.',
    icon: 'git',
    color: 'red',
    modules: gitCourseModules
  },
  {
    id: 'mobile',
    title: 'Mobile App: Java Android',
    description: 'Bangun aplikasi Android native menggunakan Java dan Android Studio. Pelajari UI, Intent, SQLite, hingga deploy ke Play Store.',
    icon: 'smartphone',
    color: 'emerald',
    modules: mobileCourseModules
  },
  {
    id: 'cisco',
    title: 'Cisco Packet Tracer',
    description: 'Pelajari simulasi jaringan komputer, routing, switching, dan konfigurasi IP menggunakan Cisco Packet Tracer.',
    icon: 'server',
    color: 'cyan',
    modules: ciscoCourseModules
  },
];

export const lessons = {
  ...htmlLessonsData,
  ...cssLessonsData,
  ...remainingLessons,
  ...jsAllLessons,
  ...phpLessonsData,
  ...mysqlLessonsData,
  ...gitLessonsData,
  ...mobileLessonsData,
  ...ciscoLessonsData,
};

