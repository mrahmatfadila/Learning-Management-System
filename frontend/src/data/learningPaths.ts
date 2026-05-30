export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
  duration: string;
  color: string;
  gradient: string;
  icon: string;
  courseIds: string[];
  skills: string[];
  jobRoles: string[];
  enrolled: number;
}

export const learningPaths: LearningPath[] = [
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Developer',
    description: 'Kuasai pengembangan web dari front-end hingga back-end. Mulai dari HTML/CSS, JavaScript, PHP, hingga MySQL untuk membangun aplikasi web lengkap.',
    level: 'Pemula',
    duration: '6 Bulan',
    color: 'from-violet-600 to-indigo-600',
    gradient: 'bg-gradient-to-br from-violet-50 to-indigo-50 border-violet-200',
    icon: '🌐',
    courseIds: ['html', 'css', 'javascript', 'php', 'mysql'],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design'],
    jobRoles: ['Web Developer', 'Full Stack Developer', 'Backend Developer'],
    enrolled: 1240,
  },
  {
    id: 'android-dev',
    title: 'Android Developer',
    description: 'Bangun karir sebagai Android Developer. Pelajari dasar Java, lalu terapkan langsung ke pengembangan aplikasi Android native dengan SQLite dan UI modern.',
    level: 'Menengah',
    duration: '4 Bulan',
    color: 'from-emerald-500 to-teal-600',
    gradient: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200',
    icon: '📱',
    courseIds: ['javascript', 'mysql', 'mobile'],
    skills: ['Java', 'Android Studio', 'SQLite', 'XML Layout', 'REST API'],
    jobRoles: ['Android Developer', 'Mobile Developer'],
    enrolled: 870,
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    description: 'Jadilah Network Engineer profesional. Kuasai konsep jaringan komputer, routing, switching, dan konfigurasi perangkat Cisco dari nol hingga siap sertifikasi.',
    level: 'Menengah',
    duration: '3 Bulan',
    color: 'from-cyan-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200',
    icon: '🔌',
    courseIds: ['cisco'],
    skills: ['TCP/IP', 'Cisco IOS', 'Routing', 'Switching', 'VLAN', 'Packet Tracer'],
    jobRoles: ['Network Engineer', 'IT Infrastructure', 'NOC Engineer'],
    enrolled: 630,
  },
  {
    id: 'devops-starter',
    title: 'DevOps & Version Control',
    description: 'Mulai perjalanan DevOps dengan menguasai Git & GitHub untuk version control, kolaborasi tim, dan CI/CD pipeline dasar yang digunakan industri.',
    level: 'Pemula',
    duration: '2 Bulan',
    color: 'from-orange-500 to-red-500',
    gradient: 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200',
    icon: '⚙️',
    courseIds: ['git', 'javascript'],
    skills: ['Git', 'GitHub', 'Branching', 'Pull Request', 'CI/CD Basics'],
    jobRoles: ['DevOps Engineer', 'Software Engineer', 'Tech Lead'],
    enrolled: 920,
  },
  {
    id: 'data-backend',
    title: 'Backend & Database Specialist',
    description: 'Fokus pada sisi server dan data. Kuasai PHP server-side dan MySQL database untuk membangun API yang kuat, aman, dan terstruktur.',
    level: 'Menengah',
    duration: '4 Bulan',
    color: 'from-purple-600 to-pink-600',
    gradient: 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
    icon: '🗄️',
    courseIds: ['php', 'mysql', 'git'],
    skills: ['PHP OOP', 'MySQL', 'REST API', 'SQL Optimization', 'Security'],
    jobRoles: ['Backend Developer', 'Database Admin', 'API Developer'],
    enrolled: 710,
  },
];

export const courseIdToTitle: Record<string, string> = {
  html: 'HTML Dasar',
  css: 'CSS Styling',
  javascript: 'JavaScript',
  php: 'PHP Server-Side',
  mysql: 'MySQL Database',
  git: 'Git & GitHub',
  mobile: 'Mobile Android',
  cisco: 'Cisco Network',
};

export const courseIdToColor: Record<string, string> = {
  html: 'bg-orange-100 text-orange-700',
  css: 'bg-blue-100 text-blue-700',
  javascript: 'bg-yellow-100 text-yellow-800',
  php: 'bg-purple-100 text-purple-700',
  mysql: 'bg-teal-100 text-teal-700',
  git: 'bg-red-100 text-red-700',
  mobile: 'bg-emerald-100 text-emerald-700',
  cisco: 'bg-cyan-100 text-cyan-700',
};
