'use client';

import { useState, useEffect, useMemo } from 'react';
import { 
  Search, Plus, MessageSquare, ThumbsUp, ThumbsDown, CheckCircle, 
  Check, ArrowLeft, Send, Sparkles, Filter, AlertCircle, 
  BookOpen, Trash2, Tag, X, HelpCircle, Eye, Calendar
} from 'lucide-react';

interface QnaForumProps {
  user: {
    id: string;
    name: string;
    role: string;
    email: string;
    profilePicture?: string;
  };
  modules: any[];
}

interface Reply {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    userId: string;
  };
  createdAt: string;
  upvotes: number;
  voted?: 'up' | 'down';
  isBestAnswer?: boolean;
}

interface Question {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
  views: number;
  solved: boolean;
  bestAnswerId?: string;
  voted?: 'up' | 'down';
  author: {
    name: string;
    role: string;
    avatar: string;
    userId: string;
  };
  createdAt: string;
  replies: Reply[];
}

export default function QnaForum({ user, modules }: QnaForumProps) {
  // --- States ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'terbaru' | 'terpopuler' | 'belum_terjawab' | 'telah_terjawab'>('terbaru');
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  
  // Modals
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  
  // New Question Form
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('General');
  const [newTagsInput, setNewTagsInput] = useState('');
  
  // New Reply Form
  const [replyContent, setReplyContent] = useState('');

  // Toast / Status Message
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize and Seed Sample Data
  useEffect(() => {
    const stored = localStorage.getItem('lms_qna_threads');
    if (stored) {
      try {
        setQuestions(JSON.parse(stored));
      } catch (e) {
        console.error('Error parsing stored Q&A', e);
        loadSampleData();
      }
    } else {
      loadSampleData();
    }
  }, []);

  const loadSampleData = () => {
    const sampleQuestions: Question[] = [
      {
        id: 'q_1',
        title: 'Mengapa state React tidak langsung terupdate setelah setState?',
        content: 'Saya sedang belajar React dan mencoba mengupdate state counter menggunakan `setCount(count + 1)` lalu langsung melakukan `console.log(count)`. Namun nilainya masih nilai lama. Kenapa hal ini terjadi dan bagaimana cara mendapatkan nilai terbaru yang sudah terupdate?',
        category: 'React Native',
        tags: ['react', 'state', 'hooks', 'async'],
        upvotes: 18,
        downvotes: 1,
        views: 245,
        solved: true,
        bestAnswerId: 'rep_1',
        author: { name: 'Rian Hidayat', role: 'STUDENT', avatar: 'RH', userId: 'student_1' },
        createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 days ago
        replies: [
          {
            id: 'rep_1',
            content: 'Halo Rian! Hal ini terjadi karena pembaruan state di React bersifat asynchronous (di-batch demi performa rendering).\n\nKetika Anda memanggil `setCount`, React hanya menjadwalkan pembaruan tersebut. Variabel `count` di lingkup fungsi saat ini masih menyimpan nilai lama sampai komponen di-render ulang.\n\nBerikut **solusi terbaik** untuk mendapatkan nilai terbaru:\n\n1. **Gunakan useEffect** dengan dependency `count` jika ingin bereaksi terhadap perubahan:\n```javascript\nuseEffect(() => {\n  console.log("Count terbaru:", count);\n}, [count]);\n```\n\n2. **Gunakan functional update** jika Anda ingin mengupdate state berdasarkan nilai sebelumnya secara aman:\n```javascript\nsetCount(prevCount => prevCount + 1);\n```',
            author: { name: 'Bagus Kurniawan', role: 'INSTRUCTOR', avatar: 'BK', userId: 'instructor_1' },
            createdAt: new Date(Date.now() - 47 * 60 * 60 * 1000).toISOString(),
            upvotes: 12,
            isBestAnswer: true
          },
          {
            id: 'rep_2',
            content: 'Tambahan sedikit, ini juga berlaku untuk kelas komponen lama dengan `this.setState()`. Bedanya, kalau di kelas komponen kita bisa memberikan callback di argumen kedua:\n```javascript\nthis.setState({ count: this.state.count + 1 }, () => {\n  console.log(this.state.count); // Nilai terbaru\n});\n```\nTapi karena sekarang era React Hooks, disarankan menggunakan `useEffect` seperti penjelasan Pak Bagus di atas!',
            author: { name: 'Eka Wijaya', role: 'STUDENT', avatar: 'EW', userId: 'student_2' },
            createdAt: new Date(Date.now() - 45 * 60 * 60 * 1000).toISOString(),
            upvotes: 4
          }
        ]
      },
      {
        id: 'q_2',
        title: 'Bagaimana cara melakukan JOIN 3 tabel secara efisien di MySQL?',
        content: 'Saya memiliki database e-commerce sederhana dengan tabel `users`, `orders`, dan `order_items`. Saya ingin menampilkan nama user, tanggal order, dan total item yang dibeli dalam satu baris query. Apakah menggunakan multiple INNER JOIN aman untuk skala besar? Bagaimana strategi indeksnya?',
        category: 'SQL Database',
        tags: ['mysql', 'database', 'join', 'index'],
        upvotes: 14,
        downvotes: 0,
        views: 189,
        solved: false,
        author: { name: 'Siti Rahma', role: 'STUDENT', avatar: 'SR', userId: 'student_3' },
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        replies: [
          {
            id: 'rep_3',
            content: 'Multiple INNER JOIN sangat aman dan efisien jika di-index dengan benar! Pada skala produksi dengan jutaan baris data, join tanpa index akan menyebabkan full-table scan yang sangat lambat.\n\n**Strategi Indeks Terbaik:**\n* Pastikan Primary Keys otomatis memiliki indeks (seperti `users.id`, `orders.id`, `order_items.id`).\n* Buat index pada Foreign Keys:\n  - Indeks pada `orders.user_id`\n  - Indeks pada `order_items.order_id`\n\n**Contoh Query Ter-optimasi:**\n```sql\nSELECT \n  u.name AS nama_user,\n  o.order_date AS tanggal_order,\n  SUM(oi.quantity) AS total_item_dibeli\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nINNER JOIN order_items oi ON o.id = oi.order_id\nGROUP BY o.id, u.name, o.order_date;\n```',
            author: { name: 'Roni Wijaya', role: 'INSTRUCTOR', avatar: 'RW', userId: 'instructor_2' },
            createdAt: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString(),
            upvotes: 9
          }
        ]
      },
      {
        id: 'q_3',
        title: 'Mengatasi error "Permission Denied" saat deploy port 80 di Linux VPS',
        content: 'Halo teman-teman, saya sedang mendeploy aplikasi Node.js Express ke VPS Ubuntu. Saat mencoba binding server ke port 80 supaya bisa diakses langsung lewat domain tanpa menuliskan port, saya mendapat error `Error: listen EACCES: permission denied 0.0.0.0:80`. Adakah jalan keluar selain menjalankan node dengan `sudo`?',
        category: 'PHP Backend',
        tags: ['nodejs', 'vps', 'linux', 'nginx', 'deployment'],
        upvotes: 9,
        downvotes: 0,
        views: 120,
        solved: true,
        bestAnswerId: 'rep_4',
        author: { name: 'Dewi Lestari', role: 'STUDENT', avatar: 'DL', userId: 'student_4' },
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
        replies: [
          {
            id: 'rep_4',
            content: 'Di sistem operasi berbasis Unix/Linux, port di bawah 1024 adalah **privileged ports** yang membutuhkan akses root/administrator.\n\nSangat **tidak direkomendasikan** menjalankan Node.js dengan `sudo` karena jika ada celah keamanan di aplikasi Anda, penyerang bisa langsung menguasai seluruh OS.\n\n**Solusi Standar Industri:**\n\nJalankan Node.js di port non-root (misal `port 5000` atau `port 8080`), lalu pasang **Nginx** sebagai Reverse Proxy di depannya untuk meneruskan request port 80 ke port Node.js Anda.\n\nKonfigurasi Nginx (`/etc/nginx/sites-available/default`):\n```nginx\nserver {\n    listen 80;\n    server_name domainkamu.com;\n\n    location / {\n        proxy_pass http://localhost:5000;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection \'upgrade\';\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n}\n```\nDengan cara ini, Nginx menangani port 80 eksternal secara aman, dan Node.js berjalan aman tanpa akses root!',
            author: { name: 'Bagus Kurniawan', role: 'INSTRUCTOR', avatar: 'BK', userId: 'instructor_1' },
            createdAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
            upvotes: 8,
            isBestAnswer: true
          }
        ]
      },
      {
        id: 'q_4',
        title: 'Kapan harus menggunakan Flexbox vs CSS Grid untuk UI layout?',
        content: 'Saya sering bingung memilih antara Flexbox dan CSS Grid saat membuat halaman responsive. Apakah ada panduan praktis yang mudah diingat? Kadang saya memaksakan Flexbox padahal kode CSS-nya jadi kotor.',
        category: 'CSS Styling',
        tags: ['css', 'flexbox', 'grid', 'responsive'],
        upvotes: 11,
        downvotes: 0,
        views: 142,
        solved: true,
        bestAnswerId: 'rep_5',
        author: { name: 'Fikri Alamsyah', role: 'STUDENT', avatar: 'FA', userId: 'student_5' },
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
        replies: [
          {
            id: 'rep_5',
            content: 'Aturan emas yang paling mudah diingat adalah:\n\n* **Flexbox** bersifat **1-Dimensional** (fokus pada baris SAJA atau kolom SAJA). Cocok untuk meluruskan elemen secara sejajar (seperti Navbar, button group, sidebar list, atau card content).\n\n* **CSS Grid** bersifat **2-Dimensional** (fokus pada baris DAN kolom sekaligus). Sangat cocok untuk struktur layout keseluruhan halaman (web page layout, dashboard grid, galeri foto berpola rumit, atau layout majalah).\n\n**Contoh visual sederhana:**\nJika Anda ingin menyejajarkan logo, links, dan tombol pencarian di satu baris navbar -> gunakan **Flexbox**.\nJika Anda ingin membagi halaman dashboard menjadi Area Header, Sidebar di kiri, Konten Utama di tengah, dan Widget di kanan -> gunakan **CSS Grid**.',
            author: { name: 'Roni Wijaya', role: 'INSTRUCTOR', avatar: 'RW', userId: 'instructor_2' },
            createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
            upvotes: 6,
            isBestAnswer: true
          }
        ]
      }
    ];

    setQuestions(sampleQuestions);
    localStorage.setItem('lms_qna_threads', JSON.stringify(sampleQuestions));
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const saveQuestions = (updated: Question[]) => {
    setQuestions(updated);
    localStorage.setItem('lms_qna_threads', JSON.stringify(updated));
  };

  // Sync selected question when questions list changes (e.g. upvotes, new replies)
  useEffect(() => {
    if (selectedQuestion) {
      const current = questions.find(q => q.id === selectedQuestion.id);
      if (current) {
        setSelectedQuestion(current);
      }
    }
  }, [questions, selectedQuestion?.id]);

  // Extract all categories from modules dynamically
  const categories = useMemo(() => {
    const list = new Set<string>();
    list.add('All');
    list.add('General');
    modules.forEach(m => {
      if (m.title) {
        // Map common titles to pretty category labels
        const t = m.title.toLowerCase();
        if (t.includes('html')) list.add('HTML Basics');
        else if (t.includes('css')) list.add('CSS Styling');
        else if (t.includes('javascript') || t.includes('js')) list.add('Javascript');
        else if (t.includes('php')) list.add('PHP Backend');
        else if (t.includes('mysql') || t.includes('database') || t.includes('sql')) list.add('SQL Database');
        else if (t.includes('react') || t.includes('mobile')) list.add('React Native');
        else if (m.category) list.add(m.category);
      }
    });
    return Array.from(list);
  }, [modules]);

  // --- Filtering & Sorting Logic ---
  const filteredQuestions = useMemo(() => {
    let result = [...questions];

    // Category Filter
    if (activeCategory !== 'All') {
      result = result.filter(q => q.category === activeCategory);
    }

    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        item => 
          item.title.toLowerCase().includes(q) || 
          item.content.toLowerCase().includes(q) ||
          item.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Tabs Filter / Sort
    if (activeTab === 'terbaru') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (activeTab === 'terpopuler') {
      result.sort((a, b) => b.upvotes - a.upvotes);
    } else if (activeTab === 'belum_terjawab') {
      result = result.filter(q => !q.solved);
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (activeTab === 'telah_terjawab') {
      result = result.filter(q => q.solved);
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [questions, activeCategory, searchQuery, activeTab]);

  // --- Handlers ---
  
  // Upvote / Downvote Question
  const handleVoteQuestion = (id: string, type: 'up' | 'down') => {
    const updated = questions.map(q => {
      if (q.id === id) {
        let uv = q.upvotes;
        let dv = q.downvotes;
        
        if (q.voted === type) {
          // Undo vote
          if (type === 'up') uv -= 1;
          else dv -= 1;
          return { ...q, upvotes: uv, downvotes: dv, voted: undefined };
        } else {
          // Switch or add vote
          if (q.voted === 'up') uv -= 1;
          if (q.voted === 'down') dv -= 1;

          if (type === 'up') uv += 1;
          else dv += 1;
          return { ...q, upvotes: uv, downvotes: dv, voted: type };
        }
      }
      return q;
    });
    saveQuestions(updated);
  };

  // Upvote Reply
  const handleVoteReply = (qId: string, rId: string) => {
    const updated = questions.map(q => {
      if (q.id === qId) {
        const reps = q.replies.map(r => {
          if (r.id === rId) {
            let uv = r.upvotes;
            if (r.voted === 'up') {
              uv -= 1;
              return { ...r, upvotes: uv, voted: undefined };
            } else {
              uv += 1;
              return { ...r, upvotes: uv, voted: 'up' as const };
            }
          }
          return r;
        });
        return { ...q, replies: reps };
      }
      return q;
    });
    saveQuestions(updated);
  };

  // Mark Best Answer
  const handleMarkBestAnswer = (qId: string, rId: string) => {
    const targetQ = questions.find(q => q.id === qId);
    if (!targetQ) return;

    // Check authority: Author, INSTRUCTOR, or ADMIN
    const isOwner = targetQ.author.userId === user.id;
    const isTeacher = user.role === 'INSTRUCTOR' || user.role === 'ADMIN';

    if (!isOwner && !isTeacher) {
      showToast('Hanya pembuat pertanyaan atau instruktur yang bisa menandai jawaban terbaik!');
      return;
    }

    const updated = questions.map(q => {
      if (q.id === qId) {
        const isCurrentlyBest = q.bestAnswerId === rId;
        const newBestId = isCurrentlyBest ? undefined : rId;
        const reps = q.replies.map(r => ({
          ...r,
          isBestAnswer: isCurrentlyBest ? false : r.id === rId
        }));
        
        return {
          ...q,
          solved: isCurrentlyBest ? false : true,
          bestAnswerId: newBestId,
          replies: reps
        };
      }
      return q;
    });

    saveQuestions(updated);
    showToast(targetQ.bestAnswerId === rId ? 'Batal menandai jawaban terbaik.' : 'Jawaban terbaik berhasil disematkan!');
  };

  // Toggle Solved Status directly
  const handleToggleSolved = (qId: string) => {
    const targetQ = questions.find(q => q.id === qId);
    if (!targetQ) return;

    const isOwner = targetQ.author.userId === user.id;
    const isTeacher = user.role === 'INSTRUCTOR' || user.role === 'ADMIN';

    if (!isOwner && !isTeacher) {
      showToast('Hanya pembuat pertanyaan atau pengajar yang bisa mengubah status penyelesaian!');
      return;
    }

    const updated = questions.map(q => {
      if (q.id === qId) {
        const nextSolved = !q.solved;
        return { 
          ...q, 
          solved: nextSolved,
          bestAnswerId: nextSolved ? q.bestAnswerId : undefined,
          replies: nextSolved ? q.replies : q.replies.map(r => ({ ...r, isBestAnswer: false }))
        };
      }
      return q;
    });

    saveQuestions(updated);
    showToast(targetQ.solved ? 'Pertanyaan ditandai sebagai belum selesai.' : 'Pertanyaan ditandai sebagai selesai!');
  };

  // Create Question
  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) {
      showToast('Judul dan isi pertanyaan tidak boleh kosong!');
      return;
    }

    const cleanTags = newTagsInput
      .split(',')
      .map(t => t.trim().toLowerCase())
      .filter(t => t.length > 0);

    const newQuestion: Question = {
      id: `q_${Date.now()}`,
      title: newTitle.trim(),
      content: newContent.trim(),
      category: newCategory,
      tags: cleanTags.length > 0 ? cleanTags : ['general'],
      upvotes: 0,
      downvotes: 0,
      views: 1,
      solved: false,
      author: {
        name: user.name,
        role: user.role,
        avatar: user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        userId: user.id
      },
      createdAt: new Date().toISOString(),
      replies: []
    };

    saveQuestions([newQuestion, ...questions]);
    
    // Reset Form
    setNewTitle('');
    setNewContent('');
    setNewCategory('General');
    setNewTagsInput('');
    setIsAskModalOpen(false);
    
    showToast('Pertanyaan baru berhasil dipublikasikan!');
  };

  // Create Reply
  const handleCreateReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedQuestion || !replyContent.trim()) return;

    const newReply: Reply = {
      id: `rep_${Date.now()}`,
      content: replyContent.trim(),
      author: {
        name: user.name,
        role: user.role,
        avatar: user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase(),
        userId: user.id
      },
      createdAt: new Date().toISOString(),
      upvotes: 0
    };

    const updated = questions.map(q => {
      if (q.id === selectedQuestion.id) {
        return {
          ...q,
          replies: [...q.replies, newReply]
        };
      }
      return q;
    });

    saveQuestions(updated);
    setReplyContent('');
    showToast('Balasan Anda berhasil dikirim!');
  };

  // Delete Question
  const handleDeleteQuestion = (qId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    const target = questions.find(q => q.id === qId);
    if (!target) return;

    const canDelete = target.author.userId === user.id || user.role === 'ADMIN' || user.role === 'INSTRUCTOR';
    if (!canDelete) {
      showToast('Anda tidak memiliki izin menghapus pertanyaan ini!');
      return;
    }

    if (confirm('Apakah Anda yakin ingin menghapus pertanyaan ini beserta seluruh balasannya?')) {
      const updated = questions.filter(q => q.id !== qId);
      saveQuestions(updated);
      setSelectedQuestion(null);
      showToast('Pertanyaan berhasil dihapus.');
    }
  };

  // Delete Reply
  const handleDeleteReply = (qId: string, rId: string) => {
    const targetQ = questions.find(q => q.id === qId);
    if (!targetQ) return;

    const targetR = targetQ.replies.find(r => r.id === rId);
    if (!targetR) return;

    const canDelete = targetR.author.userId === user.id || user.role === 'ADMIN' || user.role === 'INSTRUCTOR';
    if (!canDelete) {
      showToast('Anda tidak memiliki izin menghapus balasan ini!');
      return;
    }

    if (confirm('Hapus balasan ini?')) {
      const updated = questions.map(q => {
        if (q.id === qId) {
          const isBest = q.bestAnswerId === rId;
          return {
            ...q,
            bestAnswerId: isBest ? undefined : q.bestAnswerId,
            solved: isBest ? false : q.solved,
            replies: q.replies.filter(r => r.id !== rId)
          };
        }
        return q;
      });

      saveQuestions(updated);
      showToast('Balasan berhasil dihapus.');
    }
  };

  // Format date readable
  const formatTimeAgo = (isoStr: string) => {
    const past = new Date(isoStr);
    const now = new Date();
    const diffMs = now.getTime() - past.getTime();
    const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
    
    if (diffHrs < 1) {
      const mins = Math.floor(diffMs / (1000 * 60));
      return mins <= 1 ? 'Baru saja' : `${mins} menit lalu`;
    }
    if (diffHrs < 24) {
      return `${diffHrs} jam lalu`;
    }
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays === 1) return 'Kemarin';
    if (diffDays < 7) return `${diffDays} hari lalu`;
    
    return past.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="h-full flex bg-[#F8FAFC] dark:bg-[#0f111a] text-slate-800 dark:text-slate-100 overflow-hidden font-sans relative transition-colors duration-300">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-[200] bg-indigo-600 border border-indigo-500/30 text-white px-5 py-3 rounded-2xl shadow-2xl shadow-indigo-600/20 text-xs font-bold animate-fadeIn flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-200 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* --- Main Grid Layout --- */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side: Topic Categories Sidebar (25%) */}
        <div className="w-full md:w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0c14]/80 flex flex-col shrink-0 transition-colors duration-300">
          
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                <HelpCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h2 className="text-sm font-black text-slate-800 dark:text-white tracking-wide uppercase">Q&A Forum</h2>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold leading-none mt-0.5">Tanya & Diskusi</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <button 
              onClick={() => setIsAskModalOpen(true)}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold rounded-xl text-xs shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <Plus className="w-4 h-4 text-white group-hover:rotate-90 transition-transform" />
              <span>Tanya Pertanyaan</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 pb-8 space-y-1">
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-3 mb-2 mt-2">Topik Pelajaran</p>
            {categories.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setSelectedQuestion(null);
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs text-left font-bold transition-all flex items-center justify-between ${
                    isActive 
                      ? 'bg-indigo-50 dark:bg-indigo-600/10 border-l-4 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-black' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40 border-l-4 border-transparent'
                  }`}
                >
                  <span className="truncate">{cat}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />}
                </button>
              );
            })}
          </div>

          {/* User Profile Mini Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#07090f]/75 flex items-center gap-3 transition-colors duration-300">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xs uppercase shadow-inner shrink-0">
              {user.name.substring(0, 2)}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-slate-850 dark:text-white truncate leading-tight">{user.name}</p>
              <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest leading-none mt-0.5">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Center / Right: Content List (75%) */}
        <div className="flex-1 flex flex-col overflow-hidden bg-transparent">
          
          {/* Top Filter Bar */}
          <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-[#0a0c14]/40 flex flex-col sm:flex-row gap-4 items-center justify-between shrink-0 transition-colors duration-300">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Cari pertanyaan, tag, atau isi diskusi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-2xl text-xs font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-650 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800 dark:text-slate-500 dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sorting Tabs */}
            <div className="flex bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 p-1 rounded-xl w-full sm:w-auto transition-colors duration-300">
              {[
                { id: 'terbaru', label: 'Terbaru' },
                { id: 'terpopuler', label: 'Terpopuler' },
                { id: 'belum_terjawab', label: 'Belum Terjawab' },
                { id: 'telah_terjawab', label: 'Telah Terjawab' }
              ].map(tab => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 sm:flex-none px-4 py-2 text-[10px] font-black rounded-lg uppercase tracking-wider transition-all whitespace-nowrap ${
                      isActive 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Content Layout: Thread List & Drawer Detail */}
          <div className="flex-1 flex overflow-hidden relative">
            
            {/* List Side */}
            <div className={`flex-1 overflow-y-auto p-4 md:p-6 space-y-4 pb-20 transition-colors duration-300 ${selectedQuestion ? 'hidden lg:block lg:max-w-md xl:max-w-lg border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0f111a]/40' : ''}`}>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Menampilkan {filteredQuestions.length} Pertanyaan
                </span>
                {activeCategory !== 'All' && (
                  <button 
                    onClick={() => setActiveCategory('All')} 
                    className="text-[10px] font-extrabold text-indigo-650 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-2.5 py-1 rounded-lg"
                  >
                    Reset Filter Topik
                  </button>
                )}
              </div>

              {filteredQuestions.length === 0 ? (
                <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-16 text-center shadow-sm dark:shadow-xl transition-colors duration-300">
                  <HelpCircle className="w-12 h-12 text-slate-350 dark:text-slate-700 mx-auto mb-4 animate-bounce" />
                  <h3 className="font-extrabold text-slate-800 dark:text-white text-base">Belum Ada Pertanyaan</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-xs mt-1 max-w-xs mx-auto leading-relaxed">
                    Jadilah yang pertama untuk berdiskusi atau bertanya seputar materi {activeCategory !== 'All' ? activeCategory : ''}!
                  </p>
                  <button
                    onClick={() => setIsAskModalOpen(true)}
                    className="mt-6 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-xl shadow-lg shadow-indigo-600/20"
                  >
                    Mulai Bertanya
                  </button>
                </div>
              ) : (
                filteredQuestions.map(item => {
                  const isSelected = selectedQuestion?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedQuestion(item)}
                      className={`group bg-white dark:bg-[#0c0e18] hover:bg-slate-50 dark:hover:bg-[#101323] border transition-all rounded-3xl p-5 cursor-pointer flex flex-col justify-between relative overflow-hidden shadow-sm dark:shadow-none ${
                        isSelected 
                          ? 'border-indigo-500 dark:border-indigo-500 shadow-xl shadow-indigo-500/5 ring-1 ring-indigo-500' 
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {/* Left color bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                        item.solved ? 'bg-emerald-500' : 'bg-amber-400'
                      }`} />

                      <div>
                        {/* Header Details */}
                        <div className="flex items-center justify-between mb-3 pl-1">
                          <span className="text-[9px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-600/10 border border-indigo-100 dark:border-indigo-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                            {item.category}
                          </span>
                          
                          {item.solved ? (
                            <span className="flex items-center gap-1 text-[9px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-500/20">
                              <CheckCircle className="w-3 h-3 text-emerald-500" /> SOLVED
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[9px] font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-100 dark:border-amber-500/20">
                              <HelpCircle className="w-3 h-3 text-amber-500" /> OPEN
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-extrabold text-slate-800 dark:text-white text-sm leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 pl-1 mb-2">
                          {item.title}
                        </h3>

                        {/* Content Snippet */}
                        <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2 pl-1 mb-4 leading-relaxed font-medium">
                          {item.content}
                        </p>
                      </div>

                      {/* Footer Info */}
                      <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs pl-1">
                        
                        {/* Author */}
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-650 dark:text-slate-300 text-[10px] font-black uppercase flex items-center justify-center">
                            {item.author.avatar}
                          </div>
                          <div>
                            <p className="text-[10px] font-extrabold text-slate-800 dark:text-white leading-none">{item.author.name}</p>
                            <p className="text-[8px] font-bold text-slate-400 dark:text-slate-500 leading-none mt-0.5">{formatTimeAgo(item.createdAt)}</p>
                          </div>
                        </div>

                        {/* Stats / Interactive buttons */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVoteQuestion(item.id, 'up');
                            }}
                            className={`flex items-center gap-1.5 transition-colors font-bold text-[10px] ${
                              item.voted === 'up' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-450 dark:text-slate-500 hover:text-slate-800 dark:hover:text-white'
                            }`}
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>{item.upvotes}</span>
                          </button>
                          
                          <span className="flex items-center gap-1.5 text-slate-450 dark:text-slate-500 text-[10px] font-bold">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{item.replies.length} Balasan</span>
                          </span>

                          {(user.role === 'ADMIN' || user.role === 'INSTRUCTOR' || item.author.userId === user.id) && (
                            <button
                              onClick={(e) => handleDeleteQuestion(item.id, e)}
                              className="text-slate-400 hover:text-rose-500 p-1 rounded transition-colors"
                              title="Hapus Pertanyaan"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                    </div>
                  );
                })
              )}
            </div>

            {/* Detailed Thread Drawer Side (Active when selected) */}
            {selectedQuestion ? (
              <div className="flex-1 overflow-y-auto bg-white dark:bg-[#0a0c14]/90 p-4 md:p-6 lg:p-8 space-y-6 pb-28 transition-colors duration-300">
                
                {/* Back / Navigation Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-5">
                  <button
                    onClick={() => setSelectedQuestion(null)}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-xs font-black uppercase tracking-wider group"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" />
                    <span>Kembali ke Forum</span>
                  </button>

                  <div className="flex items-center gap-2.5">
                    {/* Solver Controls */}
                    {(selectedQuestion.author.userId === user.id || user.role === 'ADMIN' || user.role === 'INSTRUCTOR') && (
                      <button
                        onClick={() => handleToggleSolved(selectedQuestion.id)}
                        className={`text-[10px] font-black px-3.5 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                          selectedQuestion.solved 
                            ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20' 
                            : 'bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-500/20'
                        }`}
                      >
                        {selectedQuestion.solved ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Tandai Belum Selesai</span>
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>Tandai Selesai</span>
                          </>
                        )}
                      </button>
                    )}

                    {/* Admin Delete */}
                    {(user.role === 'ADMIN' || user.role === 'INSTRUCTOR' || selectedQuestion.author.userId === user.id) && (
                      <button
                        onClick={() => handleDeleteQuestion(selectedQuestion.id)}
                        className="p-2 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:border-rose-205 dark:hover:border-rose-900 text-slate-500 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-xl transition-all"
                        title="Hapus Pertanyaan"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* --- Question Detailed Box --- */}
                <div className="space-y-4">
                  
                  {/* Category, tags, and date */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-black text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-2.5 py-1 rounded-md uppercase tracking-widest">
                      {selectedQuestion.category}
                    </span>
                    
                    {selectedQuestion.solved ? (
                      <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 px-2.5 py-1 rounded-md uppercase tracking-widest flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Solved
                      </span>
                    ) : (
                      <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 px-2.5 py-1 rounded-md uppercase tracking-widest flex items-center gap-1">
                        <HelpCircle className="w-3 h-3" /> Open
                      </span>
                    )}

                    <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-2 hidden sm:block" />

                    <div className="text-slate-450 dark:text-slate-500 text-[10px] font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Diposting pada {new Date(selectedQuestion.createdAt).toLocaleString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight tracking-tight">
                    {selectedQuestion.title}
                  </h1>

                  {/* Author Box */}
                  <div className="flex items-center gap-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800/80 p-3 rounded-2xl w-fit transition-colors duration-300">
                    <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black text-xs uppercase flex items-center justify-center border border-slate-300 dark:border-slate-700">
                      {selectedQuestion.author.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-black text-slate-800 dark:text-white">{selectedQuestion.author.name}</p>
                        {selectedQuestion.author.role !== 'STUDENT' && (
                          <span className="text-[8px] font-black text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-1.5 py-0.5 rounded uppercase">
                            {selectedQuestion.author.role}
                          </span>
                        )}
                      </div>
                      <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold">Pembuat Pertanyaan</p>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="bg-slate-50/50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800/80 rounded-3xl p-5 md:p-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium space-y-4 whitespace-pre-line shadow-inner transition-colors duration-300">
                    {selectedQuestion.content.includes('```') ? (
                      // Parse markdown code blocks in a basic but readable way
                      selectedQuestion.content.split('```').map((block, idx) => {
                        if (idx % 2 === 1) {
                          // Code block
                          return (
                            <pre key={idx} className="bg-slate-950 p-4 rounded-xl overflow-x-auto text-indigo-350 font-mono text-xs border border-slate-200 dark:border-slate-800 my-2 select-all leading-normal">
                              <code>{block}</code>
                            </pre>
                          );
                        }
                        return <p key={idx} className="whitespace-pre-line leading-relaxed">{block}</p>;
                      })
                    ) : (
                      <p className="whitespace-pre-line leading-relaxed">{selectedQuestion.content}</p>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <Tag className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {selectedQuestion.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 px-2.5 py-1 rounded-lg">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Upvote & Interactive Details */}
                  <div className="border-t border-b border-slate-200 dark:border-slate-800/80 py-4 flex items-center justify-between transition-colors duration-300">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleVoteQuestion(selectedQuestion.id, 'up')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black border transition-all ${
                          selectedQuestion.voted === 'up' 
                            ? 'bg-indigo-50 dark:bg-indigo-600/10 border-indigo-200 dark:border-indigo-500 text-indigo-650 dark:text-indigo-400' 
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:border-slate-350 dark:hover:border-slate-700'
                        }`}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>Sangat Membantu ({selectedQuestion.upvotes})</span>
                      </button>

                      <button
                        onClick={() => handleVoteQuestion(selectedQuestion.id, 'down')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black border transition-all ${
                          selectedQuestion.voted === 'down' 
                            ? 'bg-rose-50 dark:bg-rose-950/10 border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400' 
                            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:border-slate-350 dark:hover:border-slate-700'
                        }`}
                      >
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3.5 text-xs text-slate-450 dark:text-slate-500 font-semibold">
                      <span className="flex items-center gap-1.5"><Eye className="w-4 h-4 text-slate-300 dark:text-slate-650" />{selectedQuestion.views} Dilihat</span>
                      <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4 text-slate-300 dark:text-slate-650" />{selectedQuestion.replies.length} Balasan</span>
                    </div>
                  </div>

                </div>

                {/* --- Replies Section --- */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    <span>Diskusi & Balasan ({selectedQuestion.replies.length})</span>
                  </h3>

                  {/* Best Answer Highlight Pinned */}
                  {selectedQuestion.solved && selectedQuestion.bestAnswerId && (
                    <div className="space-y-2 animate-fadeIn">
                      <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 px-3 py-1 rounded-md uppercase tracking-wider inline-flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 animate-pulse" /> Jawaban Terbaik Terpilih
                      </span>
                      {selectedQuestion.replies.filter(r => r.isBestAnswer).map(reply => (
                        <div 
                          key={reply.id} 
                          className="bg-gradient-to-r from-emerald-50/50 to-teal-55/30 dark:from-emerald-950/20 dark:to-teal-950/15 border-2 border-emerald-400 dark:border-emerald-500/60 rounded-3xl p-5 relative overflow-hidden transition-colors duration-300"
                        >
                          <div className="absolute right-4 top-4 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 p-2 rounded-xl">
                            <Check className="w-5 h-5 stroke-[3]" />
                          </div>

                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-55 text-emerald-700 dark:text-emerald-300 font-black text-xs uppercase flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                              {reply.author.avatar}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <p className="text-xs font-black text-slate-800 dark:text-white">{reply.author.name}</p>
                                <span className="text-[8px] font-black text-emerald-650 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 px-1.5 py-0.5 rounded uppercase">
                                  {reply.author.role}
                                </span>
                              </div>
                              <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold">{formatTimeAgo(reply.createdAt)}</p>
                            </div>
                          </div>

                          <div className="text-slate-750 dark:text-slate-300 text-sm leading-relaxed font-medium space-y-4 whitespace-pre-line">
                            {reply.content.includes('```') ? (
                              reply.content.split('```').map((block, idx) => {
                                if (idx % 2 === 1) {
                                  return (
                                    <pre key={idx} className="bg-slate-950 p-4 rounded-xl overflow-x-auto text-indigo-350 font-mono text-xs border border-slate-200 dark:border-slate-800 my-2 select-all leading-normal">
                                      <code>{block}</code>
                                    </pre>
                                  );
                                }
                                return <p key={idx} className="whitespace-pre-line leading-relaxed">{block}</p>;
                              })
                            ) : (
                              <p>{reply.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Normal Replies Feed */}
                  <div className="space-y-4">
                    {selectedQuestion.replies.length === 0 ? (
                      <div className="p-8 text-center bg-slate-50/50 dark:bg-[#0c0e18]/60 border border-slate-200 dark:border-slate-800/80 rounded-3xl transition-colors duration-300">
                        <AlertCircle className="w-8 h-8 text-slate-350 dark:text-slate-650 mx-auto mb-2" />
                        <p className="text-slate-450 dark:text-slate-500 text-xs font-semibold">Belum ada balasan untuk pertanyaan ini. Tulis balasan Anda di bawah!</p>
                      </div>
                    ) : (
                      selectedQuestion.replies
                        .filter(r => !r.isBestAnswer) // Exclude the pinned best answer
                        .map(reply => {
                          const isReplyOwner = reply.author.userId === user.id;
                          const isQuestionOwner = selectedQuestion.author.userId === user.id;
                          const canMarkBest = isQuestionOwner || user.role === 'ADMIN' || user.role === 'INSTRUCTOR';

                          return (
                            <div 
                              key={reply.id} 
                              className="bg-slate-50/50 dark:bg-[#0c0e18]/80 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-850 rounded-3xl p-5 relative transition-all shadow-sm dark:shadow-none"
                            >
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-black text-xs uppercase flex items-center justify-center">
                                    {reply.author.avatar}
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-1.5">
                                      <p className="text-xs font-black text-slate-800 dark:text-white">{reply.author.name}</p>
                                      <span className="text-[8px] font-black text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-1.5 py-0.5 rounded uppercase">
                                        {reply.author.role}
                                      </span>
                                    </div>
                                    <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold">{formatTimeAgo(reply.createdAt)}</p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  {/* Mark Best Answer Button */}
                                  {canMarkBest && (
                                    <button
                                      onClick={() => handleMarkBestAnswer(selectedQuestion.id, reply.id)}
                                      className="px-2.5 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[9px] font-black rounded-lg text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-all flex items-center gap-1"
                                      title="Tandai sebagai jawaban terbaik"
                                    >
                                      <CheckCircle className="w-3 h-3 text-slate-400 dark:text-slate-500 hover:text-emerald-500" />
                                      <span>Tandai Solusi</span>
                                    </button>
                                  )}

                                  {/* Delete reply */}
                                  {(isReplyOwner || user.role === 'ADMIN' || user.role === 'INSTRUCTOR') && (
                                    <button
                                      onClick={() => handleDeleteReply(selectedQuestion.id, reply.id)}
                                      className="p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:border-rose-200 dark:hover:border-rose-900 text-slate-500 dark:text-slate-650 hover:text-rose-600 dark:hover:text-rose-500 rounded-lg transition-all"
                                      title="Hapus Balasan"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              </div>

                              <div className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium space-y-4 whitespace-pre-line mb-4">
                                {reply.content.includes('```') ? (
                                  reply.content.split('```').map((block, idx) => {
                                    if (idx % 2 === 1) {
                                      return (
                                        <pre key={idx} className="bg-slate-950 p-4 rounded-xl overflow-x-auto text-indigo-350 font-mono text-xs border border-slate-200 dark:border-slate-800 my-2 select-all leading-normal">
                                          <code>{block}</code>
                                        </pre>
                                      );
                                    }
                                    return <p key={idx} className="whitespace-pre-line leading-relaxed">{block}</p>;
                                  })
                                ) : (
                                  <p>{reply.content}</p>
                                )}
                              </div>

                              {/* Upvote Reply */}
                              <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800/40 pt-3">
                                <button
                                  onClick={() => handleVoteReply(selectedQuestion.id, reply.id)}
                                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black border transition-all ${
                                    reply.voted === 'up' 
                                      ? 'bg-indigo-50 dark:bg-indigo-600/10 border-indigo-200 dark:border-indigo-500 text-indigo-650 dark:text-indigo-400' 
                                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-500 hover:text-slate-800 dark:hover:text-white'
                                  }`}
                                >
                                  <ThumbsUp className="w-3 h-3" />
                                  <span>{reply.upvotes} Terbantu</span>
                                </button>
                              </div>
                            </div>
                          );
                        })
                    )}
                  </div>
                </div>

                {/* --- Reply Box Form --- */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
                  <form onSubmit={handleCreateReply} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tulis Jawaban atau Balasan Anda</label>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">Mendukung format code block menggunakan ```</span>
                    </div>

                    <div className="relative">
                      <textarea
                        rows={5}
                        placeholder="Berikan jawaban yang jelas, sopan, dan informatif untuk membantu sesama siswa..."
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        className="w-full bg-white dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-3xl p-4 text-xs font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-650 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all leading-relaxed"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={!replyContent.trim()}
                        className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold rounded-xl text-xs shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 shrink-0"
                      >
                        <Send className="w-3.5 h-3.5 text-white" />
                        <span>Kirim Balasan</span>
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            ) : (
              // Empty selection screen for large viewports
              <div className="hidden lg:flex flex-1 flex-col items-center justify-center bg-[#0a0c14]/5 p-12 text-center text-slate-400 dark:text-slate-500 pb-28">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                  <HelpCircle className="w-8 h-8 animate-pulse" />
                </div>
                <h3 className="font-extrabold text-slate-700 dark:text-white text-base">Detail Pertanyaan</h3>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-1 max-w-xs leading-relaxed">
                  Pilih salah satu pertanyaan di panel kiri untuk membaca seluruh diskusi detail, memberikan voting, atau mengirimkan jawaban terbaik Anda.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* --- Ask Question Modal --- */}
      {isAskModalOpen && (
        <div className="fixed inset-0 bg-[#07090f]/50 dark:bg-[#07090f]/80 backdrop-blur-md z-[150] flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-[#0f111a] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scaleIn transition-colors duration-300">
            
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-black text-slate-800 dark:text-white text-base">Buat Pertanyaan Baru</h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold">Tanyakan ke forum dan dapatkan jawaban dari siswa/instruktur</p>
                </div>
              </div>

              <button
                onClick={() => setIsAskModalOpen(false)}
                className="text-slate-450 dark:text-slate-500 hover:text-slate-800 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateQuestion} className="p-6 space-y-5">
              
              {/* Question Title */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Judul Pertanyaan</label>
                <input
                  type="text"
                  placeholder="Misalnya: Mengapa CORS error terjadi di Express JS?"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl text-xs font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-650 focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Category & Tags Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Category Select */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Topik / Modul</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-350 focus:outline-none transition-all cursor-pointer"
                  >
                    {categories.filter(c => c !== 'All').map(c => (
                      <option key={c} value={c} className="text-slate-700 dark:text-slate-300">{c}</option>
                    ))}
                  </select>
                </div>

                {/* Tag Input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Tags (Pisahkan dengan koma)</label>
                  <input
                    type="text"
                    placeholder="react, css, frontend"
                    value={newTagsInput}
                    onChange={(e) => setNewTagsInput(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl text-xs font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-650 focus:outline-none transition-all"
                  />
                </div>

              </div>

              {/* Question Content Body */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Deskripsi Detail</label>
                  <span className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold">Tulis kode di dalam ``` untuk format blok kode</span>
                </div>
                <textarea
                  rows={6}
                  placeholder="Jelaskan secara spesifik masalah Anda. Tuliskan kode error yang muncul atau solusi yang sudah Anda coba..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full bg-white dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl p-4 text-xs font-bold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-650 focus:outline-none transition-all leading-relaxed animate-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3 pt-3 justify-end border-t border-slate-200 dark:border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setIsAskModalOpen(false)}
                  className="px-5 py-3 text-xs font-black text-slate-500 dark:text-slate-450 hover:text-slate-850 dark:hover:text-white rounded-xl transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold rounded-xl text-xs shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>Kirim Pertanyaan</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
