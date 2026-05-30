'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageSquare, Hash, Users, Pin, Trash2, Shield, Crown, Star,
  Send, Smile, Search, Plus, ChevronDown, X, MoreVertical,
  CheckCircle, Bell, BellOff, Settings, UserPlus, Copy, Reply,
  Globe, BookOpen, UserCheck, AtSign, Volume2, VolumeX, AlertCircle,
  Mic, Video, Phone, EllipsisVertical, ThumbsUp, Heart, Laugh,
  Zap, Eye, EyeOff, Lock, Unlock, Flag, ChevronRight, RefreshCw,
  Compass, Headphones, Gift, Image, Download, File
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  profilePicture?: string;
}

interface Message {
  id: string;
  content: string;
  senderId: string;
  channelId: string;
  isPinned: boolean;
  isDeleted: boolean;
  createdAt: string;
  sender: {
    id: string;
    name: string;
    email: string;
    role: string;
    profilePicture?: string;
  };
  reactions?: Record<string, string[]>;
  replyTo?: Message;
  edited?: boolean;
}

interface Channel {
  id: string;
  name: string;
  type: 'global' | 'instructor' | 'module' | 'announcement' | 'voice';
  description?: string;
  icon: string;
  memberRole?: string;
  unread?: number;
  muted?: boolean;
  pinned?: boolean;
}

interface DiscordServer {
  id: string;
  name: string;
  icon: string;
  bgColor: string;
  tooltip: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────
const ROLE_CONFIG: Record<string, { label: string; color: string; bg: string; icon: any; rank: number }> = {
  ADMIN: { label: 'Admin', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', icon: Shield, rank: 3 },
  INSTRUCTOR: { label: 'Instructor', color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20', icon: Crown, rank: 2 },
  STUDENT: { label: 'Student', color: 'text-slate-400', bg: 'bg-slate-500/10 border-slate-500/20', icon: Star, rank: 1 },
};

const EMOJI_REACTIONS = ['👍', '❤️', '😂', '😮', '🔥', '🎉', '💯', '🙏'];
const QUICK_EMOJIS = ['😊', '🎯', '💡', '⭐', '🚀', '✅', '❓', '📌'];

const STICKERS = [
  { id: 'ngoding-terus', name: 'Ngoding Terus', emoji: '💻', color: 'from-blue-600 to-cyan-500', desc: 'Maju terus pantang menyerah!' },
  { id: 'code-clean', name: 'Clean Code', emoji: '✨', color: 'from-emerald-600 to-teal-500', desc: 'Kode rapih bebas bug!' },
  { id: 'mantap-rocket', name: 'Mantap Boss', emoji: '🚀', color: 'from-violet-600 to-indigo-500', desc: 'Luar biasa kinerjanya!' },
  { id: 'bug-warning', name: 'Ada Bug!', emoji: '🐛', color: 'from-rose-600 to-orange-500', desc: 'Awas ada penyusup kode!' },
  { id: 'coffee-break', name: 'Kopi Dulu', emoji: '☕', color: 'from-amber-600 to-yellow-500', desc: 'Istirahat biar gak stress.' },
  { id: 'ai-approved', name: 'AI Approved', emoji: '🤖', color: 'from-fuchsia-600 to-pink-500', desc: 'Mentor AI menyetujui!' },
  { id: 'hebat-star', name: 'Bintang 5', emoji: '⭐', color: 'from-yellow-500 to-amber-600', desc: 'Kerja bagus, pertahankan!' },
  { id: 'stress-404', name: 'Error 404', emoji: '💥', color: 'from-red-600 to-rose-700', desc: 'Kepala pusing coding error!' },
];

const DISCORD_SERVERS: DiscordServer[] = [
  { id: 'lms', name: 'LMS Community', icon: '🎓', bgColor: 'from-violet-600 to-indigo-600', tooltip: 'LMS Community Server' },
  { id: 'study', name: 'Kelompok Belajar', icon: '🚀', bgColor: 'from-emerald-600 to-teal-600', tooltip: 'Study Groups & Hackathons' },
  { id: 'chill', name: 'Ruang Santai', icon: '☕', bgColor: 'from-amber-500 to-orange-600', tooltip: 'Hangout & Music Zone' },
  { id: 'ai', name: 'AI Playground', icon: '🤖', bgColor: 'from-fuchsia-600 to-purple-600', tooltip: 'LMS AI Playground 24/7' },
];

const DEMO_MEMBERS = [
  { name: 'Bagus Kurniawan', role: 'ADMIN', status: 'online', activity: 'Mengelola platform' },
  { name: 'Instructor Rahmat', role: 'INSTRUCTOR', status: 'online', activity: 'Mengajar JavaScript' },
  { name: 'Instructor Raihan', role: 'INSTRUCTOR', status: 'away', activity: 'Membaca materi UI/UX' },
  { name: 'Student Bagus', role: 'STUDENT', status: 'online', activity: 'Sedang ngoding React' },
  { name: 'Student Budi', role: 'STUDENT', status: 'offline', activity: '2 jam yang lalu' },
];

const CHILL_ACTIVITIES = [
  { name: 'Bagus Kurniawan', role: 'ADMIN', status: 'online', activity: 'Playing VS Code' },
  { name: 'Instructor Rahmat', role: 'INSTRUCTOR', status: 'online', activity: 'Listening to Spotify' },
  { name: 'Student Bagus', role: 'STUDENT', status: 'online', activity: 'Playing Mobile Legends' },
  { name: 'Student Budi', role: 'STUDENT', status: 'away', activity: 'Sedang nonton Netflix' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatTime(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = (now.getTime() - d.getTime()) / 1000;
  if (diff < 60) return 'Baru saja';
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  if (diff < 604800) return d.toLocaleDateString('id-ID', { weekday: 'short', hour: '2-digit', minute: '2-digit' });
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = (now.getTime() - d.getTime()) / 86400000;
  if (diff < 1) return 'Hari ini';
  if (diff < 2) return 'Kemarin';
  return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
}

function getInitials(name: string): string {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    'from-violet-500 to-purple-600',
    'from-blue-500 to-indigo-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-amber-600',
    'from-rose-500 to-pink-600',
    'from-cyan-500 to-sky-600',
  ];
  const idx = name.charCodeAt(0) % colors.length;
  return colors[idx] || 'from-slate-500 to-slate-600';
}

function Avatar({ user, size = 'md', showStatus }: { user: { name: string; profilePicture?: string; role?: string }; size?: 'xs' | 'sm' | 'md' | 'lg'; showStatus?: string }) {
  const sizes = { xs: 'w-6 h-6 text-[8px]', sm: 'w-8 h-8 text-xs', md: 'w-10 h-10 text-sm', lg: 'w-12 h-12 text-sm' };
  const statusColors = { online: 'bg-[#23a55a]', away: 'bg-[#f0b232]', offline: 'bg-[#80848e]' };

  return (
    <div className={`relative shrink-0 ${sizes[size]}`}>
      {user.profilePicture ? (
        <img src={user.profilePicture} alt={user.name} className="w-full h-full rounded-full object-cover" />
      ) : (
        <div className={`w-full h-full rounded-full bg-gradient-to-br ${getAvatarColor(user.name)} flex items-center justify-center font-bold text-white`}>
          {getInitials(user.name)}
        </div>
      )}
      {showStatus && (
        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#1e1f22] ${statusColors[showStatus as keyof typeof statusColors] || 'bg-slate-300'}`} />
      )}
    </div>
  );
}

function RoleBadge({ role, mini }: { role: string; mini?: boolean }) {
  const cfg = ROLE_CONFIG[role] || ROLE_CONFIG['STUDENT']!;
  const Icon = cfg.icon;
  if (mini) return (
    <span className={`inline-flex items-center gap-0.5 text-[8px] font-black px-1 py-0.2 rounded border ${cfg.bg} ${cfg.color} uppercase tracking-wide`}>
      <Icon className="w-2.5 h-2.5" />{cfg.label}
    </span>
  );
  return (
    <span className={`inline-flex items-center gap-1 text-[9px] font-black px-1.5 py-0.5 rounded-md border ${cfg.bg} ${cfg.color} uppercase tracking-wider`}>
      <Icon className="w-3 h-3" />{cfg.label}
    </span>
  );
}

// Helper to parse sticker from content if present
function parseSticker(content: string) {
  const match = content.match(/^\[STICKER:([a-z0-9-]+)\]/);
  return match ? match[1]! : null;
}

interface ReplyInfo {
  id: string;
  senderName: string;
  content: string;
}

interface AttachmentInfo {
  name: string;
  size: string;
  type: string;
  dataUrl: string;
}

// Helper to parse message contents for reply and attachments
function parseMessageContent(content: string) {
  let text = content;
  let reply: ReplyInfo | null = null;
  let attachment: AttachmentInfo | null = null;

  // Match REPLY prefix
  const replyMatch = text.match(/^\[REPLY:(\{.*?\})\]\s*([\s\S]*)/);
  if (replyMatch) {
    try {
      reply = JSON.parse(replyMatch[1]!) as ReplyInfo;
      text = replyMatch[2]!;
    } catch { /* ignore */ }
  }

  // Match ATTACHMENT prefix
  const attachMatch = text.match(/^\[ATTACHMENT:(\{.*?\})\]\s*([\s\S]*)/);
  if (attachMatch) {
    try {
      attachment = JSON.parse(attachMatch[1]!) as AttachmentInfo;
      text = attachMatch[2]!;
    } catch { /* ignore */ }
  }

  return { reply, attachment, text };
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Discussions({ user, modules = [] }: { user: User; modules?: any[] }) {
  const role = user.role?.toUpperCase();
  const canModerate = role === 'ADMIN' || role === 'INSTRUCTOR';

  // State
  const [activeServerId, setActiveServerId] = useState('lms');
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [pickerTab, setPickerTab] = useState<'emoji' | 'sticker'>('emoji');
  const [showMemberList, setShowMemberList] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [replyTo, setReplyTo] = useState<Message | null>(null);
  const [hoveredMsg, setHoveredMsg] = useState<string | null>(null);
  const [pinnedMsg, setPinnedMsg] = useState<Message | null>(null);
  const [showPinnedBanner, setShowPinnedBanner] = useState(true);
  const [contextMenu, setContextMenu] = useState<{ msgId: string; x: number; y: number } | null>(null);
  const [mutedChannels, setMutedChannels] = useState<Set<string>>(new Set());
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [localReactions, setLocalReactions] = useState<Record<string, Record<string, boolean>>>({});
  const [pollingActive, setPollingActive] = useState(true);
  const [aiSenderId, setAiSenderId] = useState<string | null>(null);

  // File Attachment states
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string; type: string; dataUrl: string } | null>(null);

  // Lightbox state for full-screen image preview
  const [lightboxImage, setLightboxImage] = useState<{ dataUrl: string; name: string; size: string } | null>(null);

  // Voice/Video Call Conference states
  const [connectedVoiceChannel, setConnectedVoiceChannel] = useState<Channel | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Expandable Discord Categories
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'INFO': true,
    'MODUL': true,
    'VOICE': true,
  });

  // Query an admin user to be the sender for AI responses
  useEffect(() => {
    const loadAiSender = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users?role=ADMIN');
        if (res.ok) {
          const admins = await res.json();
          if (admins && admins.length > 0) {
            setAiSenderId(admins[0].id);
          }
        }
      } catch { /* ignore */ }
    };
    loadAiSender();
  }, []);

  // Web camera capturing using mediaDevices
  useEffect(() => {
    let activeStream: MediaStream | null = null;
    if (isCameraOn && selectedChannel?.type === 'voice') {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
          activeStream = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
          console.log('Camera permission denied or not available:', err);
        });
    }
    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCameraOn, selectedChannel]);

  // Get Discord categories and channels based on the active Server ID
  const getServerChannels = useCallback((serverId: string): Channel[] => {
    if (serverId === 'lms') {
      const builtChannels: Channel[] = [
        { id: 'announcements', name: 'pengumuman', type: 'announcement', description: 'Pengumuman resmi dari admin & instruktur', icon: '📢', unread: 0, muted: false, pinned: true },
        { id: 'global', name: 'global-chat', type: 'global', description: 'Diskusi umum untuk semua member', icon: '🌐', unread: 0, muted: false, pinned: true },
        { id: 'lms-kelas-utama', name: 'Ruang Kelas Utama', type: 'voice', description: 'Voice & video stream kelas utama dengan instruktur.', icon: '🔊', muted: false },
        { id: 'lms-diskusi-kelompok', name: 'Kelompok Diskusi 1', type: 'voice', description: 'Ruang kolaborasi audio untuk belajar kelompok.', icon: '🔊', muted: false },
      ];
      if (modules.length > 0) {
        modules.slice(0, 6).forEach(m => {
          builtChannels.push({
            id: m.id,
            name: m.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').slice(0, 20),
            type: 'module',
            description: `Diskusi modul: ${m.title}`,
            icon: '📚',
            unread: 0,
            muted: false,
          });
        });
      } else {
        ['js-fundamentals', 'css-mastery', 'react-native'].forEach((name, i) => {
          builtChannels.push({
            id: `demo-module-${i}`,
            name,
            type: 'module',
            description: `Diskusi modul ${name}`,
            icon: '📚',
            unread: 0,
            muted: false,
          });
        });
      }
      return builtChannels;
    }
    if (serverId === 'study') {
      return [
        { id: 'frontend-squad', name: 'frontend-squad', type: 'module', description: 'Tempat berkumpulnya pejuang HTML, CSS & React!', icon: '💻', muted: false },
        { id: 'backend-devs', name: 'backend-devs', type: 'module', description: 'Diskusi Node.js, Prisma, PostgreSQL & Server.', icon: '⚙️', muted: false },
        { id: 'ui-ux-design', name: 'ui-ux-design', type: 'module', description: 'Seni estetika, tata letak, dan Figma mockup.', icon: '🎨', muted: false },
        { id: 'help-desk', name: 'tanya-jawab-coding', type: 'global', description: 'Tanyakan error kodemu di sini!', icon: '❓', muted: false },
        { id: 'study-mentoring', name: 'Mentoring Room', type: 'voice', description: 'Voice & screenshare tatap muka dengan mentor.', icon: '🔊', muted: false },
        { id: 'study-coworking', name: 'Co-Working Space', type: 'voice', description: 'Fokus belajar bareng secara online.', icon: '🔊', muted: false },
      ];
    }
    if (serverId === 'chill') {
      return [
        { id: 'off-topic', name: 'off-topic', type: 'global', description: 'Obrolan santai di luar pelajaran.', icon: '💬', muted: false },
        { id: 'random-memes', name: 'random-memes', type: 'global', description: 'Bagi meme lucu seputar programming!', icon: '🎭', muted: false },
        { id: 'musik-share', name: 'musik-share', type: 'global', description: 'Rekomendasi lagu pengiring ngoding.', icon: '🎵', muted: false },
        { id: 'chill-lobby', name: 'Lobby Santai', type: 'voice', description: 'Ngoceh santai sambil minum kopi.', icon: '🔊', muted: false },
        { id: 'chill-music', name: 'Pojok Musik 📻', type: 'voice', description: 'Kanal suara dengerin musik bareng.', icon: '🔊', muted: false },
      ];
    }
    if (serverId === 'ai') {
      return [
        { id: 'tanya-ai', name: 'tanya-ai-mentor', type: 'global', description: 'Asisten AI Mentor yang siap menjawab pertanyaanmu 24/7.', icon: '🧠', muted: false },
        { id: 'review-kode', name: 'review-kode', type: 'global', description: 'Tempel kodemu di sini untuk direview AI secara langsung.', icon: '🔍', muted: false },
        { id: 'ai-voice-consult', name: 'AI Consult Room 🎙️', type: 'voice', description: 'Simulasi voice call konsultasi dengan AI bot.', icon: '🔊', muted: false },
      ];
    }
    return [];
  }, [modules]);

  // Load channels when Server changes
  useEffect(() => {
    const chs = getServerChannels(activeServerId);
    setChannels(chs);
    setSelectedChannel(chs[0] || null);
    setSearchQuery('');
    setSelectedFile(null);
  }, [activeServerId, getServerChannels]);

  // Fetch messages
  const fetchMessages = useCallback(async (channel: Channel | null, silent = false) => {
    if (!channel || channel.type === 'voice') return;
    if (!silent) setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${channel.id}`);
      if (res.ok) {
        const data: Message[] = await res.json();
        setMessages(data);
        const pinned = data.filter(m => m.isPinned && !m.isDeleted);
        setPinnedMsg(pinned[pinned.length - 1] || null);
      }
    } catch { /* ignore network error */ }
    if (!silent) setIsLoading(false);
  }, []);

  useEffect(() => {
    if (selectedChannel && selectedChannel.type !== 'voice') {
      fetchMessages(selectedChannel);
      setReplyTo(null);
      setShowEmojiPicker(false);
      setSelectedFile(null);
    }
  }, [selectedChannel, fetchMessages]);

  // Polling for updates (2.5s)
  useEffect(() => {
    if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    if (!pollingActive || !selectedChannel || selectedChannel.type === 'voice') return;

    pollIntervalRef.current = setInterval(() => {
      fetchMessages(selectedChannel, true);
    }, 2500);

    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    };
  }, [selectedChannel, pollingActive, fetchMessages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close context menu on click
  useEffect(() => {
    const handle = () => setContextMenu(null);
    document.addEventListener('click', handle);
    return () => document.removeEventListener('click', handle);
  }, []);

  // Trigger AI responses simulation for AI server channels
  const triggerAISimulation = async (userPrompt: string, channelId: string) => {
    const botSenderId = aiSenderId || user.id;
    setTypingUsers(['🤖 LMS AI Mentor']);

    setTimeout(async () => {
      let aiResponse = '';
      const promptLower = userPrompt.toLowerCase();

      if (channelId === 'review-kode') {
        aiResponse = `🔍 **[REVIEW KODE AI]** Kode kamu terlihat cukup baik! Namun, berikut beberapa saran optimasi:\n1. Gunakan \`const\` untuk variabel yang tidak di-reassign.\n2. Pastikan penanganan error (\`try-catch\`) digunakan pada kode asinkronus.\n3. Pertimbangkan untuk memisahkan logika kompleks ke dalam fungsi-fungsi utilitas kecil.`;
      } else {
        if (promptLower.includes('javascript') || promptLower.includes('js')) {
          aiResponse = `⚡ **[JS MENTOR]** Pilihan yang luar biasa! JavaScript sangat fleksibel. Tip hari ini: Gunakan **Optional Chaining** (\`?.\`) untuk menghindari error saat mengakses properti objek bertingkat yang bernilai undefined, contoh:\n\`const city = user?.address?.city;\``;
        } else if (promptLower.includes('css') || promptLower.includes('tailwind')) {
          aiResponse = `🎨 **[DESIGN MENTOR]** Desain yang responsif membuat aplikasi bersinar! Di Tailwind, gunakan awalan responsif seperti \`md:\` dan \`lg:\` secara konsisten. Selalu gunakan unit HSL untuk palet warna tema yang harmonis.`;
        } else {
          aiResponse = `🧠 **[AI MENTOR]** Halo! Saya adalah AI Mentor LMS. Saya siap mendampingi belajarmu 24/7. Ada konsep pemrograman, basis data, atau modul pembelajaran apa yang ingin kita diskusikan hari ini? Silakan ajukan pertanyaanmu!`;
        }
      }

      try {
        await fetch('http://localhost:5000/api/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: aiResponse, senderId: botSenderId, channelId }),
        });
        if (selectedChannel && selectedChannel.id === channelId) {
          await fetchMessages(selectedChannel, true);
        }
      } catch { /* ignore */ }
      setTypingUsers([]);
    }, 1800);
  };

  // Handle local file selection and convert to Base64
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1.5MB file size limit to prevent heavy payloads
    if (file.size > 1.5 * 1024 * 1024) {
      alert('File terlalu besar! Batas maksimal adalah 1.5 MB untuk menjaga kecepatan pengiriman.');
      return;
    }

    // Convert file size to human readable format
    let sizeStr = '';
    if (file.size < 1024) sizeStr = `${file.size} B`;
    else if (file.size < 1024 * 1024) sizeStr = `${(file.size / 1024).toFixed(1)} KB`;
    else sizeStr = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedFile({
        name: file.name,
        size: sizeStr,
        type: file.type,
        dataUrl: reader.result as string,
      });
    };
    reader.readAsDataURL(file);

    // Reset input value so the same file can be selected again
    e.target.value = '';
  };

  // Send message
  const handleSend = async () => {
    if ((!inputValue.trim() && !selectedFile) || !selectedChannel || isSending) return;
    
    const userPrompt = inputValue.trim();

    // Format content with attachments if present
    let content = userPrompt;
    if (selectedFile) {
      content = `[ATTACHMENT:${JSON.stringify(selectedFile)}] ${content}`;
    }

    // Prepend Reply Context if active
    if (replyTo) {
      const parsedParent = parseMessageContent(replyTo.content);
      const cleanParentText = parsedParent.text;
      const replyPayload = {
        id: replyTo.id,
        senderName: replyTo.sender.name,
        content: replyTo.content.includes('[ATTACHMENT:') 
          ? 'Mengirim Lampiran 📁' 
          : replyTo.content.includes('[STICKER:') 
            ? 'Mengirim Stiker 🖼️' 
            : cleanParentText
      };
      content = `[REPLY:${JSON.stringify(replyPayload)}] ${content}`;
    }

    setInputValue('');
    setReplyTo(null);
    setSelectedFile(null);
    setIsSending(true);

    // Optimistic UI
    const optimistic: Message = {
      id: `opt-${Date.now()}`,
      content,
      senderId: user.id,
      channelId: selectedChannel.id,
      isPinned: false,
      isDeleted: false,
      createdAt: new Date().toISOString(),
      sender: { id: user.id, name: user.name, email: user.email, role: user.role, profilePicture: user.profilePicture },
    };
    setMessages(prev => [...prev, optimistic]);

    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, senderId: user.id, channelId: selectedChannel.id }),
      });
      if (res.ok) {
        await fetchMessages(selectedChannel, true);

        // Run AI response simulation
        if (activeServerId === 'ai') {
          triggerAISimulation(userPrompt, selectedChannel.id);
        }
      }
    } catch { /* ignore */ }
    setIsSending(false);
  };

  // Send Sticker
  const handleSendSticker = async (stickerId: string) => {
    if (!selectedChannel || isSending) return;
    
    const content = `[STICKER:${stickerId}]`;
    setShowEmojiPicker(false);
    setIsSending(true);

    // Optimistic UI
    const optimistic: Message = {
      id: `opt-${Date.now()}`,
      content,
      senderId: user.id,
      channelId: selectedChannel.id,
      isPinned: false,
      isDeleted: false,
      createdAt: new Date().toISOString(),
      sender: { id: user.id, name: user.name, email: user.email, role: user.role, profilePicture: user.profilePicture },
    };
    setMessages(prev => [...prev, optimistic]);

    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, senderId: user.id, channelId: selectedChannel.id }),
      });
      if (res.ok) {
        await fetchMessages(selectedChannel, true);
      }
    } catch { /* ignore */ }
    setIsSending(false);
  };

  // Set reply and focus input box
  const handleReplyClick = (msg: Message) => {
    setReplyTo(msg);
    setContextMenu(null);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handlePin = async (msg: Message) => {
    if (!canModerate) return;
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${msg.id}/pin`, { method: 'PATCH' });
      if (res.ok) fetchMessages(selectedChannel, true);
    } catch { /* ignore */ }
    setContextMenu(null);
  };

  const handleDelete = async (msg: Message) => {
    if (!canModerate && msg.senderId !== user.id) return;
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${msg.id}`, { method: 'DELETE' });
      if (res.ok) fetchMessages(selectedChannel, true);
    } catch { /* ignore */ }
    setContextMenu(null);
  };

  const handleReaction = (msgId: string, emoji: string) => {
    setLocalReactions(prev => {
      const msg = prev[msgId] || {};
      return { ...prev, [msgId]: { ...msg, [emoji]: !msg[emoji] } };
    });
  };

  const toggleMute = (channelId: string) => {
    setMutedChannels(prev => {
      const next = new Set(prev);
      if (next.has(channelId)) next.delete(channelId);
      else next.add(channelId);
      return next;
    });
  };

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  // Group channels by Type for Discord categories
  const infoChannels = channels.filter(c => c.type === 'announcement' || c.type === 'global');
  const moduleChannels = channels.filter(c => c.type === 'module');
  const voiceChannels = channels.filter(c => c.type === 'voice');

  const filteredMessages = searchQuery
    ? messages.filter(m => m.content.toLowerCase().includes(searchQuery.toLowerCase()) || m.sender.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : messages;

  // Group messages by date
  const groupedMessages: { date: string; msgs: Message[] }[] = [];
  let lastDate = '';
  filteredMessages.forEach(m => {
    const d = formatDate(m.createdAt);
    if (d !== lastDate) { groupedMessages.push({ date: d, msgs: [] }); lastDate = d; }
    const last = groupedMessages[groupedMessages.length - 1];
    if (last) last.msgs.push(m);
  });

  // Active Server details
  const activeServer = DISCORD_SERVERS.find(s => s.id === activeServerId) || DISCORD_SERVERS[0]!;

  return (
    <div className="flex h-full w-full bg-[#1e1f22] overflow-hidden font-sans text-slate-200">
      
      {/* Hidden File Input for Attachments */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*,application/pdf,text/*,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />

      {/* ── 1. Discord Server Sidebar (Left-most) ─────────────────────────────────── */}
      <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center py-4 gap-3 flex-shrink-0 z-10 select-none border-r border-[#111214]/50">
        {/* LMS Brand/Home Icon */}
        <div className="relative group flex items-center justify-center w-full mb-1">
          <div className="absolute left-0 w-1 bg-white rounded-r-full transition-all duration-300 h-2 group-hover:h-5" />
          <button
            onClick={() => setActiveServerId('lms')}
            className={`w-12 h-12 rounded-[24px] bg-[#313338] hover:rounded-2xl hover:bg-[#5865f2] flex items-center justify-center text-white transition-all duration-300 shadow-lg`}
            title="LMS EduTech"
          >
            <Compass className="w-5 h-5" />
          </button>
        </div>

        <div className="w-8 h-[2px] bg-[#35363c] rounded mb-1" />

        {/* Dynamic Server List */}
        <div className="flex-1 w-full flex flex-col gap-2.5 overflow-y-auto scrollbar-none items-center">
          {DISCORD_SERVERS.map(srv => {
            const isActive = activeServerId === srv.id;
            return (
              <div key={srv.id} className="relative group flex items-center justify-center w-full">
                {/* Active Indicator Strip */}
                <div className={`absolute left-0 w-1 bg-white rounded-r-full transition-all duration-300 ${
                  isActive ? 'h-10' : 'h-0 group-hover:h-5'
                }`} />
                
                {/* Round-Square Hover Icon */}
                <button
                  onClick={() => setActiveServerId(srv.id)}
                  className={`w-12 h-12 flex items-center justify-center text-lg font-bold text-white transition-all duration-300 relative shadow-md bg-gradient-to-br ${srv.bgColor} ${
                    isActive
                      ? 'rounded-2xl shadow-indigo-500/10'
                      : 'rounded-[24px] hover:rounded-2xl'
                  }`}
                  title={srv.tooltip}
                >
                  {srv.icon}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Gear */}
        <div className="w-12 h-12 rounded-[24px] bg-[#313338] hover:rounded-2xl hover:bg-emerald-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 cursor-pointer shadow-lg">
          <Plus className="w-5 h-5" />
        </div>
      </div>

      {/* ── 2. Discord Channel Sidebar (Second Column) ────────────────────────────── */}
      <div className="w-[230px] flex-shrink-0 flex flex-col bg-[#2b2d31]">
        {/* Server Header Dropdown */}
        <button className="h-12 px-4 border-b border-[#1f2023] flex items-center justify-between text-white font-black hover:bg-[#35373c] transition-colors select-none text-left shrink-0">
          <span className="truncate text-sm tracking-wide">{activeServer.name}</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>

        {/* Discord Channels List */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-4 scrollbar-none">
          {/* Category: INFO & PENGUMUMAN */}
          {infoChannels.length > 0 && (
            <div>
              <button
                onClick={() => toggleCategory('INFO')}
                className="w-full flex items-center gap-0.5 text-[#949ba4] hover:text-[#dbdee1] text-[10px] font-bold uppercase tracking-wider px-1 py-0.5 select-none"
              >
                {expandedCategories['INFO'] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                <span>INFORMASI</span>
              </button>
              {expandedCategories['INFO'] && (
                <div className="mt-1 space-y-0.5">
                  {infoChannels.map(channel => {
                    const isSelected = selectedChannel?.id === channel.id;
                    const isMuted = mutedChannels.has(channel.id);
                    return (
                      <button
                        key={channel.id}
                        onClick={() => setSelectedChannel(channel)}
                        className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-md text-left transition-all group relative ${isSelected
                          ? 'bg-[#404249] text-white'
                          : 'text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c]'}`}
                      >
                        <span className="text-base leading-none opacity-60 group-hover:opacity-100">{channel.icon}</span>
                        <span className={`text-xs font-semibold truncate ${isSelected ? 'text-white font-bold' : ''}`}>
                          {channel.name}
                        </span>
                        {isMuted && <VolumeX className="w-3 h-3 text-slate-600 ml-auto" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Category: VOICE CHANNELS (Zoom / screenshare) */}
          {voiceChannels.length > 0 && (
            <div>
              <button
                onClick={() => toggleCategory('VOICE')}
                className="w-full flex items-center gap-0.5 text-[#949ba4] hover:text-[#dbdee1] text-[10px] font-bold uppercase tracking-wider px-1 py-0.5 select-none"
              >
                {expandedCategories['VOICE'] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                <span>RUANG SUARA & VIDEO</span>
              </button>
              {expandedCategories['VOICE'] && (
                <div className="mt-1 space-y-0.5">
                  {voiceChannels.map(channel => {
                    const isSelected = selectedChannel?.id === channel.id;
                    const isVoiceConnected = connectedVoiceChannel?.id === channel.id;
                    return (
                      <div key={channel.id} className="space-y-1">
                        <button
                          onClick={() => {
                            setConnectedVoiceChannel(channel);
                            setSelectedChannel(channel);
                          }}
                          className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-md text-left transition-all group relative ${isSelected
                            ? 'bg-[#404249] text-white'
                            : 'text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c]'}`}
                        >
                          <span className="text-sm font-semibold opacity-60 group-hover:opacity-100">🔊</span>
                          <span className={`text-xs font-semibold truncate ${isSelected ? 'text-white font-bold' : ''}`}>
                            {channel.name}
                          </span>
                          {isVoiceConnected && (
                            <span className="ml-auto w-2 h-2 rounded-full bg-[#23a55a] animate-pulse" />
                          )}
                        </button>

                        {/* Connected participants list inside channel */}
                        {isVoiceConnected && (
                          <div className="pl-6 pr-2 py-1 space-y-1 select-none text-[11px] text-[#949ba4] font-medium transition-all">
                            <div className="flex items-center gap-1.5">
                              <div className="w-4.5 h-4.5 rounded-full bg-indigo-500/20 text-[7px] text-white font-bold flex items-center justify-center">IR</div>
                              <span>Instructor Rahmat</span>
                              <div className="w-1.5 h-1.5 bg-[#23a55a] rounded-full animate-ping ml-auto" />
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-4.5 h-4.5 rounded-full bg-emerald-500/20 text-[7px] text-white font-bold flex items-center justify-center">SB</div>
                              <span>Student Bagus</span>
                              <VolumeX className="w-2.5 h-2.5 text-slate-500 ml-auto" />
                            </div>
                            <div className="flex items-center gap-1.5 text-white">
                              <div className={`w-4.5 h-4.5 rounded-full bg-indigo-600 text-[7px] text-white font-bold flex items-center justify-center ${isCameraOn ? 'ring-2 ring-emerald-500' : ''}`}>
                                {getInitials(user.name)}
                              </div>
                              <span className="truncate">Anda ({user.name.split(' ')[0]})</span>
                              {isMuted && <VolumeX className="w-2.5 h-2.5 text-rose-500 ml-auto" />}
                              {isCameraOn && <Video className="w-2.5 h-2.5 text-emerald-400 ml-auto" />}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Category: MODULES */}
          {moduleChannels.length > 0 && (
            <div>
              <button
                onClick={() => toggleCategory('MODUL')}
                className="w-full flex items-center gap-0.5 text-[#949ba4] hover:text-[#dbdee1] text-[10px] font-bold uppercase tracking-wider px-1 py-0.5 select-none"
              >
                {expandedCategories['MODUL'] ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                <span>SALURAN MATERI</span>
              </button>
              {expandedCategories['MODUL'] && (
                <div className="mt-1 space-y-0.5">
                  {moduleChannels.map(channel => {
                    const isSelected = selectedChannel?.id === channel.id;
                    const isMuted = mutedChannels.has(channel.id);
                    return (
                      <button
                        key={channel.id}
                        onClick={() => setSelectedChannel(channel)}
                        className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-md text-left transition-all group relative ${isSelected
                          ? 'bg-[#404249] text-white'
                          : 'text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c]'}`}
                      >
                        <span className="text-[#949ba4] group-hover:text-[#dbdee1] font-semibold text-sm">#</span>
                        <span className={`text-xs font-semibold truncate ${isSelected ? 'text-white font-bold' : ''}`}>
                          {channel.name}
                        </span>
                        {isMuted && <VolumeX className="w-3 h-3 text-slate-600 ml-auto" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Discord Voice Connected Status Indicator Bar (Above user panel) */}
        {connectedVoiceChannel && (
          <div className="bg-[#232428] border-b border-[#1f2023]/40 px-3 py-2 flex flex-col gap-1.5 select-none text-[11px] shrink-0">
            <div className="flex items-center gap-1.5 text-[#23a55a] font-bold">
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
              <span>Voice Connected</span>
            </div>
            <div className="flex items-center justify-between text-slate-400">
              <span className="truncate max-w-[140px] font-semibold">{activeServer.name} / {connectedVoiceChannel.name}</span>
              <button
                onClick={() => {
                  setConnectedVoiceChannel(null);
                  setIsCameraOn(false);
                  setIsScreenSharing(false);
                  // Switch to text channel when disconnecting
                  const textCh = channels.find(c => c.type !== 'voice') || null;
                  if (textCh) setSelectedChannel(textCh);
                }}
                title="Disconnect"
                className="w-5 h-5 bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white rounded flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            
            {/* Quick Meeting Controls Shortcut */}
            <div className="flex gap-1 mt-0.5">
              <button
                onClick={() => {
                  setSelectedChannel(connectedVoiceChannel);
                  setIsCameraOn(!isCameraOn);
                }}
                className={`flex-1 py-1 rounded text-center font-bold text-[9px] flex items-center justify-center gap-1 transition-colors ${
                  isCameraOn ? 'bg-[#5865f2] text-white' : 'bg-[#313338] text-slate-300 hover:bg-[#35373c]'
                }`}
              >
                <Video className="w-2.5 h-2.5" /> Video
              </button>
              <button
                onClick={() => {
                  setSelectedChannel(connectedVoiceChannel);
                  setIsScreenSharing(!isScreenSharing);
                }}
                className={`flex-1 py-1 rounded text-center font-bold text-[9px] flex items-center justify-center gap-1 transition-colors ${
                  isScreenSharing ? 'bg-[#5865f2] text-white' : 'bg-[#313338] text-slate-300 hover:bg-[#35373c]'
                }`}
              >
                <Compass className="w-2.5 h-2.5" /> Screen
              </button>
            </div>
          </div>
        )}

        {/* Discord User Profile Panel (Bottom) */}
        <div className="bg-[#232428] px-2 py-2 flex items-center gap-2 select-none border-t border-[#1f2023]/40 shrink-0">
          <Avatar user={user} size="sm" showStatus="online" />
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-black truncate leading-tight">{user.name.split(' ')[0]}</p>
            <p className="text-[9px] text-slate-500 font-mono leading-none truncate">#{user.id.slice(0, 5)}</p>
          </div>
          <div className="flex items-center gap-0.5 text-[#b5bac1]">
            <button
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Unmute Mic' : 'Mute Mic'}
              className={`w-6 h-6 flex items-center justify-center hover:text-white rounded hover:bg-[#35373c] transition-colors ${
                isMuted ? 'text-rose-500' : ''
              }`}
            >
              <Mic className="w-3.5 h-3.5" />
            </button>
            <button title="Deafen Headset" className="w-6 h-6 flex items-center justify-center hover:text-white rounded hover:bg-[#35373c] transition-colors">
              <Headphones className="w-3.5 h-3.5" />
            </button>
            <button title="User Settings" className="w-6 h-6 flex items-center justify-center hover:text-white rounded hover:bg-[#35373c] transition-colors">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── 3. Discord Central Content Column (Third Column - Chat / Voice Grid) ───── */}
      {selectedChannel?.type === 'voice' ? (
        /* VIRTUAL CONFERENCE CLASSROOM GRID VIEW (Discord Video Call / Zoom) */
        <div className="flex-1 bg-[#111214] p-6 flex flex-col justify-between overflow-hidden relative select-none">
          
          {/* Virtual Class Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5 shrink-0 select-none">
            <div className="flex items-center gap-2">
              <span className="text-[#23a55a] font-bold text-sm animate-pulse">●</span>
              <h3 className="text-white font-bold text-sm tracking-wide">{selectedChannel.name}</h3>
              <span className="text-[10px] text-slate-500 font-medium">| Ruang Kelas Video LMS</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1e1f22] border border-white/5 px-2.5 py-1 rounded-md text-xs text-slate-400 select-none font-semibold">
              <Users className="w-3.5 h-3.5 text-[#5865f2]" />
              <span>3 Peserta Aktif</span>
            </div>
          </div>

          {/* Call Grid Participant Cards */}
          <div className="flex-1 w-full max-w-4xl mx-auto flex items-center justify-center my-6 overflow-hidden">
            <div className={`w-full grid ${isScreenSharing ? 'grid-cols-2 grid-rows-2' : 'grid-cols-2'} gap-4 h-full items-center justify-center`}>
              
              {/* 1. Instructor video box */}
              <div className="bg-[#2b2d31] rounded-2xl h-full flex flex-col items-center justify-center relative overflow-hidden border border-indigo-500/20 group hover:border-indigo-500/40 transition-colors shadow-inner">
                <div className="absolute top-3 left-3 bg-indigo-600/80 text-white text-[9px] font-black px-2 py-0.5 rounded-full select-none flex items-center gap-1 z-10 shadow-md">
                  <Shield className="w-2.5 h-2.5" /> INSTRUCTOR
                </div>
                {/* Pulse wave indicators representing voice activity */}
                <div className="w-18 h-18 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white text-lg ring-4 ring-[#23a55a] animate-pulse">
                  IR
                </div>
                <span className="text-xs text-slate-300 font-bold mt-3">Instructor Rahmat</span>
                <p className="text-[9px] text-[#23a55a] mt-0.5 select-none animate-pulse">Sedang berbicara...</p>
              </div>

              {/* 2. Student video box */}
              <div className="bg-[#2b2d31] rounded-2xl h-full flex flex-col items-center justify-center relative overflow-hidden border border-white/5">
                <div className="absolute top-3 left-3 bg-slate-700/80 text-slate-200 text-[9px] font-black px-2 py-0.5 rounded-full select-none z-10">
                  STUDENT
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-lg">
                  SB
                </div>
                <span className="text-xs text-slate-300 font-bold mt-3">Student Bagus</span>
                <div className="flex items-center gap-1.5 mt-1 select-none text-slate-500 text-[9px]">
                  <VolumeX className="w-3 h-3 text-slate-600" />
                  <span>Muted</span>
                </div>
              </div>

              {/* 3. User webcam box (Live Stream / Avatar fallback) */}
              <div className="bg-[#2b2d31] rounded-2xl h-full flex flex-col items-center justify-center relative overflow-hidden border border-white/5">
                <div className="absolute top-3 left-3 bg-[#5865f2] text-white text-[9px] font-black px-2 py-0.5 rounded-full select-none z-10">
                  ANDA
                </div>
                
                {isCameraOn ? (
                  <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getAvatarColor(user.name)} flex items-center justify-center font-bold text-white text-lg`}>
                      {getInitials(user.name)}
                    </div>
                    <span className="text-xs text-slate-300 font-bold mt-3">Anda ({user.name})</span>
                    {isMuted && (
                      <div className="flex items-center gap-1.5 mt-1 select-none text-rose-500 text-[9px]">
                        <VolumeX className="w-3 h-3 text-rose-600" />
                        <span>Muted</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* 4. Screenshare box (Dynamic slide/code mock, only shows if Screensharing is turned on) */}
              {isScreenSharing && (
                <div className="bg-[#1e1e1e] rounded-2xl h-full flex flex-col relative overflow-hidden border-2 border-[#5865f2] p-4 text-left shadow-lg select-none">
                  <div className="absolute top-3 right-3 bg-rose-600 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full animate-pulse select-none z-10 shadow">
                    LIVE STREAM
                  </div>
                  <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 mb-2 select-none">
                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-500 ml-2 font-mono">Screenshare: App.tsx</span>
                  </div>
                  <div className="flex-1 font-mono text-[10px] text-[#9cdcfe] space-y-0.5 overflow-hidden animate-pulse select-none" style={{ animationDuration: '3s' }}>
                    <p><span className="text-[#569cd6]">import</span> React <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'react'</span>;</p>
                    <p><span className="text-[#569cd6]">export default function</span> <span className="text-[#dcdcaa]">VirtualClass</span>() &#123;</p>
                    <p className="pl-4"><span className="text-[#569cd6]">return</span> (</p>
                    <p className="pl-8 text-[#d4d4d4]">&lt;<span className="text-[#569cd6]">div</span> <span className="text-[#9cdcfe]">className</span>=<span className="text-[#ce9178]">&quot;meeting-grid&quot;</span>&gt;</p>
                    <p className="pl-12 text-[#d4d4d4]">&lt;<span className="text-[#4fc1ff]">WebcamStream</span> <span className="text-[#9cdcfe]">active</span> /&gt;</p>
                    <p className="pl-8 text-[#d4d4d4]">&lt;/<span className="text-[#569cd6]">div</span>&gt;</p>
                    <p className="pl-4">);</p>
                    <p>&#125;</p>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Floating Call Control Action Bar */}
          <div className="flex items-center justify-center gap-4 bg-[#232428]/95 border border-white/5 py-3 px-6 rounded-2xl max-w-md mx-auto w-full shrink-0 select-none shadow-2xl backdrop-blur">
            {/* Mic toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Unmute Mic' : 'Mute Mic'}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isMuted ? 'bg-rose-600 hover:bg-rose-500 text-white' : 'bg-[#313338] hover:bg-[#35373c] text-slate-200'
              }`}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Video Camera toggle */}
            <button
              onClick={() => setIsCameraOn(!isCameraOn)}
              title={isCameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isCameraOn ? 'bg-[#5865f2] hover:bg-[#4752c4] text-white' : 'bg-[#313338] hover:bg-[#35373c] text-slate-200'
              }`}
            >
              <Video className="w-5 h-5" />
            </button>

            {/* Screenshare toggle */}
            <button
              onClick={() => setIsScreenSharing(!isScreenSharing)}
              title={isScreenSharing ? 'Stop Screen Sharing' : 'Share Screen'}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isScreenSharing ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-[#313338] hover:bg-[#35373c] text-slate-200'
              }`}
            >
              <Compass className="w-5 h-5" />
            </button>

            {/* Red phone disconnect */}
            <button
              onClick={() => {
                setConnectedVoiceChannel(null);
                setIsCameraOn(false);
                setIsScreenSharing(false);
                const textCh = channels.find(c => c.type !== 'voice') || null;
                if (textCh) setSelectedChannel(textCh);
              }}
              title="Leave Room"
              className="w-10 h-10 rounded-full bg-rose-600 hover:bg-rose-500 flex items-center justify-center text-white transition-colors"
            >
              <Phone className="w-5 h-5 rotate-[135deg]" />
            </button>
          </div>

        </div>
      ) : (
        /* ── ORIGINAL DISCORD TEXT CHAT WINDOW ─────────────────────────────────── */
        <div className="flex-1 flex flex-col min-w-0 bg-[#313338]">
          
          {/* Discord Chat Header */}
          {selectedChannel && (
            <div className="h-12 flex items-center justify-between px-4 border-b border-[#1f2023] bg-[#313338] select-none shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[#80848e] font-black text-xl">#</span>
                <h3 className="text-white font-bold text-sm tracking-wide">{selectedChannel.name}</h3>
                <div className="w-[1px] h-4 bg-[#3f4147] mx-1" />
                <p className="text-[#949ba4] text-[11px] truncate max-w-sm hidden md:block">
                  {selectedChannel.description}
                </p>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <button onClick={() => setShowSearch(!showSearch)} title="Cari Pesan" className="w-7 h-7 flex items-center justify-center text-[#b5bac1] hover:text-[#dbdee1]">
                  <Search className="w-4 h-4" />
                </button>
                <button onClick={() => toggleMute(selectedChannel.id)} title={mutedChannels.has(selectedChannel.id) ? 'Unmute' : 'Mute'} className="w-7 h-7 flex items-center justify-center text-[#b5bac1]">
                  {mutedChannels.has(selectedChannel.id) ? <VolumeX className="w-4 h-4 text-[#f0b232]" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button onClick={() => setShowMemberList(!showMemberList)} title="Daftar Member" className={`w-7 h-7 flex items-center justify-center transition-colors ${showMemberList ? 'text-[#5865f2]' : 'text-[#b5bac1] hover:text-[#dbdee1]'}`}>
                  <Users className="w-4 h-4" />
                </button>
                <button onClick={() => setPollingActive(!pollingActive)} title="Sync Status" className="w-7 h-7 flex items-center justify-center text-[#b5bac1]">
                  <RefreshCw className={`w-4 h-4 ${pollingActive ? 'text-emerald-400 animate-spin' : 'text-slate-600'}`} style={{ animationDuration: '4s' }} />
                </button>
              </div>
            </div>
          )}

          {/* Pinned Message Banner */}
          {pinnedMsg && showPinnedBanner && !pinnedMsg.isDeleted && (
            <div className="mx-4 mt-3 px-4 py-2 bg-[#2b2d31]/85 border-l-4 border-amber-500 rounded-r-lg flex items-center gap-3">
              <Pin className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider font-mono">PESAN TERSEMAT</span>
                <p className="text-xs text-slate-300 truncate mt-0.5">{pinnedMsg.content}</p>
              </div>
              <button onClick={() => setShowPinnedBanner(false)} className="text-slate-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Instant Search Bar */}
          {showSearch && (
            <div className="px-4 py-2 bg-[#2b2d31] border-b border-[#1f2023] flex items-center gap-2">
              <Search className="w-4 h-4 text-indigo-400" />
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Cari pesan di sini..."
                className="bg-transparent border-none text-xs text-white placeholder-slate-500 focus:outline-none flex-1"
              />
              {searchQuery && (
                <span className="text-[10px] text-slate-400">{filteredMessages.length} hasil ditemukan</span>
              )}
              <button onClick={() => { setSearchQuery(''); setShowSearch(false); }} className="text-slate-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Scrollable Message Box */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-full gap-2">
                <div className="w-6 h-6 border-2 border-[#5865f2] border-t-transparent rounded-full animate-spin" />
                <p className="text-slate-500 text-xs font-medium">Loading messages...</p>
              </div>
            ) : groupedMessages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#2b2d31] flex items-center justify-center text-4xl shadow-inner select-none">
                  {selectedChannel?.icon || '💬'}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Selamat datang di #{selectedChannel?.name}!</h4>
                  <p className="text-slate-500 text-xs max-w-xs font-medium">Jadilah yang pertama mengirim pesan untuk memulai diskusi baru.</p>
                </div>
              </div>
            ) : (
              groupedMessages.map(group => (
                <div key={group.date} className="space-y-3">
                  {/* Date Divider */}
                  <div className="flex items-center gap-2 select-none">
                    <div className="flex-1 h-[1px] bg-[#3f4147]" />
                    <span className="text-[10px] text-[#949ba4] font-bold uppercase tracking-wider">{group.date}</span>
                    <div className="flex-1 h-[1px] bg-[#3f4147]" />
                  </div>

                  {group.msgs.map((msg, msgIdx) => {
                    const isMe = msg.senderId === user.id;
                    const prevMsg = group.msgs[msgIdx - 1];
                    const isSameAuthor = prevMsg && prevMsg.senderId === msg.senderId && !prevMsg.isDeleted;
                    
                    // AI Bot logic override for AI playground
                    const isAiChannel = selectedChannel?.id === 'tanya-ai' || selectedChannel?.id === 'review-kode';
                    const isAiBot = isAiChannel && !isMe;
                    
                    const senderName = isAiBot ? '🤖 LMS AI Mentor' : msg.sender.name;
                    const senderRole = isAiBot ? 'ADMIN' : msg.sender.role?.toUpperCase();
                    const roleCfg = ROLE_CONFIG[senderRole] || ROLE_CONFIG['STUDENT']!;
                    const myReactions = localReactions[msg.id] || {};

                    // Parse sticker, reply, attachment, text
                    const stickerId = parseSticker(msg.content);
                    const { reply, attachment, text } = parseMessageContent(msg.content);
                    const stickerObj = stickerId ? STICKERS.find(s => s.id === stickerId) : null;
 
                     if (msg.isDeleted) {
                       return (
                         <div key={msg.id} className="text-slate-600 text-xs italic flex items-center gap-1.5 px-3">
                           <Trash2 className="w-3.5 h-3.5" />
                           Pesan ini telah dihapus oleh moderator.
                         </div>
                       );
                     }
 
                     return (
                       <div
                         key={msg.id}
                         onMouseEnter={() => setHoveredMsg(msg.id)}
                         onMouseLeave={() => setHoveredMsg(null)}
                         className={`group flex gap-3.5 px-2 py-0.5 rounded transition-colors ${
                           isSameAuthor ? 'mt-0.5 pl-[54px]' : 'mt-4'
                         } ${hoveredMsg === msg.id ? 'bg-[#2e3035]' : ''} relative`}
                       >
                         {/* Avatar Side */}
                         {!isSameAuthor && (
                           <div className="flex-shrink-0">
                             {isAiBot ? (
                               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-inner">
                                 AI
                               </div>
                             ) : (
                               <Avatar user={msg.sender} size="md" />
                             )}
                           </div>
                         )}
 
                         {/* Content side */}
                         <div className="flex-1 min-w-0">
                           {/* Message Header */}
                           {!isSameAuthor && (
                             <div className="flex items-baseline gap-2 mb-0.5 select-none">
                               <span className={`text-sm font-bold leading-none ${isMe ? 'text-[#38ef7d]' : roleCfg.color} hover:underline cursor-pointer`}>
                                 {senderName}
                               </span>
                               {isAiBot ? (
                                 <span className="text-[8px] bg-[#5865f2] text-white font-black px-1.5 py-0.5 rounded leading-none">
                                   BOT
                                 </span>
                               ) : (
                                 <RoleBadge role={senderRole} mini />
                               )}
                               <span className="text-[10px] text-slate-500 font-medium font-mono">
                                 {formatTime(msg.createdAt)}
                               </span>
                               {msg.isPinned && <Pin className="w-3 h-3 text-amber-500" />}
                             </div>
                           )}
 
                           {/* Reply Context */}
                           {reply && (
                             <div className="flex items-center gap-1.5 mb-1.5 pl-2.5 border-l-2 border-[#5865f2] text-[11px] text-slate-400 select-none bg-[#313338]/30 py-0.5 pr-2 rounded-r-md max-w-max">
                               <Reply className="w-3 h-3 text-[#5865f2] transform scale-x-[-1]" />
                               <span className="text-[#5865f2] font-black font-sans">@{reply.senderName}</span>
                               <span className="truncate opacity-75 max-w-[250px]">{reply.content}</span>
                             </div>
                           )}
 
                           {/* Text bubble block */}
                           {text && (
                             <div className="text-[#dbdee1] text-[14px] leading-relaxed break-words whitespace-pre-wrap">
                               {text}
                             </div>
                           )}
 
                           {/* Render Premium Sticker badge if present */}
                           {stickerObj && (
                             <div className="mt-2 select-none">
                               <div className={`inline-flex flex-col items-center justify-center p-3 rounded-2xl bg-[#2b2d31] border border-white/5 shadow-lg relative overflow-hidden group/sticker max-w-[150px] text-center`}>
                                 <div className={`absolute inset-0 bg-gradient-to-br ${stickerObj.color} opacity-0 group-hover/sticker:opacity-10 transition-opacity duration-300`} />
                                 <span className="text-5xl my-2 filter drop-shadow-md select-none transform transition-transform group-hover/sticker:scale-125 duration-300 animate-bounce" style={{ animationDuration: '3s' }}>
                                   {stickerObj.emoji}
                                 </span>
                                 <div className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase text-white bg-gradient-to-r ${stickerObj.color} shadow-sm tracking-wide mb-1`}>
                                   {stickerObj.name}
                                 </div>
                                 <span className="text-[8px] text-slate-500 font-medium leading-tight">{stickerObj.desc}</span>
                               </div>
                             </div>
                           )}
 
                           {/* Render Rich File Attachment Card if present */}
                           {attachment && (
                             <div className="mt-2 select-none">
                               {attachment.type.startsWith('image/') ? (
                                 /* Image Attachment Preview Card — click to open lightbox */
                                 <div className="relative inline-block group/img">
                                   <img
                                     src={attachment.dataUrl}
                                     alt={attachment.name}
                                     className="max-w-xs max-h-60 rounded-lg border border-slate-700/50 shadow-md cursor-zoom-in hover:opacity-90 hover:scale-[1.01] transition-all duration-150"
                                     onClick={() => setLightboxImage({ dataUrl: attachment.dataUrl, name: attachment.name, size: attachment.size })}
                                   />
                                   {/* Quick download button on hover */}
                                   <a
                                     href={attachment.dataUrl}
                                     download={attachment.name}
                                     className="absolute bottom-2 right-2 p-1.5 bg-[#111214]/80 text-[#dbdee1] hover:text-white rounded-md flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity shadow"
                                     title="Download Gambar"
                                     onClick={e => e.stopPropagation()}
                                   >
                                     <Download className="w-3.5 h-3.5" />
                                   </a>
                                   {/* Zoom hint */}
                                   <div className="absolute inset-0 rounded-lg flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
                                     <div className="bg-black/40 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                       <Eye className="w-3 h-3" /> Lihat
                                     </div>
                                   </div>
                                 </div>
                               ) : (
                                 /* File Document Download Card */
                                 <a
                                   href={attachment.dataUrl}
                                   download={attachment.name}
                                   className="flex items-center gap-3 p-3 bg-[#2b2d31] border border-[#1f2023] rounded-xl hover:bg-[#35373c] transition-colors w-64 select-none group/card"
                                 >
                                   <div className="w-10 h-10 bg-[#383a40] text-[#b5bac1] group-hover/card:text-white rounded-lg flex items-center justify-center transition-colors">
                                     <File className="w-5 h-5" />
                                   </div>
                                   <div className="flex-1 min-w-0">
                                     <p className="text-white text-xs font-bold truncate leading-none mb-1">{attachment.name}</p>
                                     <p className="text-[9px] text-[#949ba4] font-mono leading-none">{attachment.size}</p>
                                   </div>
                                   <span className="text-[#b5bac1] group-hover/card:text-white transition-colors">
                                     <Download className="w-4 h-4" />
                                   </span>
                                 </a>
                               )}
                             </div>
                           )}

                           {/* Emoji Reactions Tray */}
                           {Object.keys(myReactions).some(k => myReactions[k]) && (
                             <div className="flex flex-wrap gap-1 mt-1.5 select-none">
                               {EMOJI_REACTIONS.filter(e => myReactions[e]).map(emoji => (
                                 <button key={emoji} onClick={() => handleReaction(msg.id, emoji)}
                                   className="flex items-center gap-1.5 px-2 py-0.5 bg-[#2b2d31] border border-[#3f4147] rounded-md text-xs hover:bg-[#35373c] transition-colors text-slate-200">
                                   <span>{emoji}</span> <span className="text-[10px] text-[#5865f2] font-black">1</span>
                                 </button>
                               ))}
                             </div>
                           )}
                         </div>

                         {/* Hover action toolbar (Discord-style float) */}
                         {hoveredMsg === msg.id && (
                           <div className="flex items-center gap-0.5 flex-shrink-0 bg-[#313338] border border-[#232428] rounded-md px-1 py-0.5 shadow-lg absolute right-4 -top-3.5 z-20">
                             {EMOJI_REACTIONS.slice(0, 4).map(emoji => (
                               <button key={emoji} onClick={() => handleReaction(msg.id, emoji)}
                                 className="w-7 h-7 flex items-center justify-center text-sm hover:bg-[#35373c] rounded transition-transform hover:scale-125">
                                 {emoji}
                               </button>
                             ))}
                             <div className="w-[1px] h-4 bg-slate-700/50 mx-1" />
                             <button onClick={() => handleReplyClick(msg)} title="Balas Pesan" className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#35373c] rounded transition-colors">
                               <Reply className="w-3.5 h-3.5" />
                             </button>
                             <button
                               onClick={e => { 
                                 e.stopPropagation(); 
                                 e.nativeEvent.stopImmediatePropagation();
                                 setContextMenu({ msgId: msg.id, x: e.clientX, y: e.clientY }); 
                               }}
                               title="Pilihan Pesan"
                               className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#35373c] rounded transition-colors"
                             >
                               <MoreVertical className="w-3.5 h-3.5" />
                             </button>
                           </div>
                         )}
                       </div>
                     );
                   })}
                 </div>
               ))
             )}

            {/* Typing active indicators */}
            {typingUsers.length > 0 && (
              <div className="flex items-center gap-2 px-3 py-1 text-xs text-[#949ba4] select-none">
                <div className="flex gap-0.5">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
                <span>{typingUsers[0]} sedang mengetik...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Discord Chat Box Input area (Floating Pill style) */}
          <div className="px-4 pb-6 pt-2 shrink-0">
            {/* Reply alert preview */}
            {replyTo && (
              <div className="flex items-center gap-2 mb-2 px-3 py-1.5 bg-[#2b2d31] border border-slate-700/30 rounded-t-lg select-none">
                <Reply className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-indigo-400 font-bold">Membalas @{replyTo.sender.name}</span>
                  <p className="text-[11px] text-slate-400 truncate leading-none mt-0.5">{replyTo.content}</p>
                </div>
                <button onClick={() => setReplyTo(null)} className="text-slate-500 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Rich File Selected Attachment Preview sitting inside the input block */}
            {selectedFile && (
              <div className="bg-[#2b2d31] border-l-4 border-[#5865f2] px-4 py-2.5 rounded-t-lg flex items-center gap-3 select-none">
                {selectedFile.type.startsWith('image/') ? (
                  /* Small square thumbnail image preview */
                  <div className="w-12 h-12 rounded-lg border border-[#3f4147] overflow-hidden bg-[#1e1f22]">
                    <img src={selectedFile.dataUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  /* Document icon placeholder */
                  <div className="w-12 h-12 rounded-lg bg-[#383a40] flex items-center justify-center text-xl text-[#b5bac1]">
                    📄
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-bold truncate leading-none mb-1">{selectedFile.name}</p>
                  <p className="text-[9px] text-[#949ba4] font-mono leading-none">{selectedFile.size}</p>
                </div>

                <button
                  onClick={() => setSelectedFile(null)}
                  className="w-6 h-6 rounded-full hover:bg-slate-700/50 flex items-center justify-center text-[#b5bac1] hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex items-end gap-3 bg-[#383a40] rounded-lg px-4 py-2.5 shadow-md">
              {/* Attachment Plus button - TRIGGER UPLOAD */}
              <button
                onClick={() => fileInputRef.current?.click()}
                title="Tambahkan Lampiran"
                className="w-6 h-6 flex items-center justify-center text-[#b5bac1] hover:text-white bg-[#4e5058]/40 hover:bg-[#4e5058] rounded-full transition-colors shrink-0 mb-0.5"
              >
                <Plus className="w-4 h-4" />
              </button>

              {/* Input Form area */}
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={selectedChannel ? `Tulis pesan di #${selectedChannel.name}` : 'Pilih saluran...'}
                rows={1}
                className="flex-1 bg-transparent text-sm text-[#dbdee1] placeholder-[#80848e] resize-none focus:outline-none max-h-32 py-1 leading-relaxed"
                style={{ scrollbarWidth: 'none' }}
                disabled={!selectedChannel}
              />

              {/* Emoji and GIF icons */}
              <div className="flex items-center gap-2 select-none shrink-0 mb-0.5">
                <div className="relative">
                  <button
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    className="w-6 h-6 flex items-center justify-center text-[#b5bac1] hover:text-white transition-colors"
                  >
                    <Smile className="w-5 h-5" />
                  </button>
                  {showEmojiPicker && (
                    <div className="absolute bottom-9 right-0 bg-[#2b2d31] border border-[#1f2023] rounded-xl p-3 shadow-2xl z-50 w-72">
                      {/* Tab buttons */}
                      <div className="flex border-b border-slate-700/50 mb-3 text-xs select-none">
                        <button
                          onClick={() => setPickerTab('emoji')}
                          className={`flex-1 pb-1.5 font-bold text-center border-b-2 transition-colors ${
                            pickerTab === 'emoji' ? 'border-[#5865f2] text-white' : 'border-transparent text-[#949ba4] hover:text-white'
                          }`}
                        >
                          😃 Emojis
                        </button>
                        <button
                          onClick={() => setPickerTab('sticker')}
                          className={`flex-1 pb-1.5 font-bold text-center border-b-2 transition-colors ${
                            pickerTab === 'sticker' ? 'border-[#5865f2] text-white' : 'border-transparent text-[#949ba4] hover:text-white'
                          }`}
                        >
                          🖼️ Stiker
                        </button>
                      </div>

                      {pickerTab === 'emoji' ? (
                        <div>
                          <p className="text-[9px] text-[#949ba4] font-black uppercase tracking-wider mb-2 font-mono">Emoji Cepat</p>
                          <div className="grid grid-cols-4 gap-1">
                            {QUICK_EMOJIS.map(e => (
                              <button key={e} onClick={() => { setInputValue(prev => prev + e); setShowEmojiPicker(false); inputRef.current?.focus(); }}
                                className="w-10 h-10 text-xl flex items-center justify-center hover:bg-[#35373c] rounded transition-transform hover:scale-125 font-sans">
                                {e}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="text-[9px] text-[#949ba4] font-black uppercase tracking-wider mb-2 font-mono">Stiker Premium LMS</p>
                          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto scrollbar-thin pr-1">
                            {STICKERS.map(s => (
                              <button
                                key={s.id}
                                onClick={() => handleSendSticker(s.id)}
                                className={`p-2 bg-[#1e1f22] hover:bg-[#35373c] border border-slate-800 rounded-lg flex flex-col items-center justify-center gap-1 group transition-all duration-150 active:scale-95`}
                                title={s.desc}
                              >
                                <span className="text-3xl filter drop-shadow group-hover:scale-110 transition-transform">{s.emoji}</span>
                                <span className="text-[9px] text-slate-300 font-bold truncate max-w-full">{s.name}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleSend}
                  disabled={(!inputValue.trim() && !selectedFile) || isSending}
                  className={`w-6 h-6 rounded flex items-center justify-center transition-all ${
                    inputValue.trim() || selectedFile
                      ? 'text-indigo-400 hover:text-indigo-300 scale-110 active:scale-95'
                      : 'text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {isSending ? (
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 4. Discord Members Sidebar (Right-most Column) ────────────────────────── */}
      {showMemberList && (
        <div className="w-[200px] flex-shrink-0 hidden lg:flex flex-col bg-[#2b2d31] overflow-y-auto select-none border-l border-[#1f2023]/40">
          <div className="p-4 pb-2">
            <h4 className="text-[10px] font-bold text-[#949ba4] uppercase tracking-wider font-mono">Member Aktif</h4>
          </div>

          {/* Adapt Member list to Server type */}
          {activeServerId === 'ai' ? (
            /* AI Server members */
            <div className="px-2 pt-2 space-y-2">
              <div className="flex items-center gap-1.5 px-2 mb-1">
                <Shield className="w-3 h-3 text-[#f0b232]" />
                <span className="text-[9px] font-bold text-[#f0b232] uppercase tracking-wider font-mono">AI BOT — 1</span>
              </div>
              <div className="flex items-center gap-2.5 px-2 py-1.5 rounded hover:bg-[#35373c] transition-colors cursor-pointer group">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-fuchsia-600 to-indigo-600 flex items-center justify-center font-bold text-white text-[10px]">
                  AI
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 leading-none mb-0.5">
                    <p className="text-[11px] font-bold text-white truncate">AI Mentor</p>
                    <span className="text-[7px] bg-[#5865f2] text-white font-black px-1 rounded-sm font-mono">BOT</span>
                  </div>
                  <p className="text-[9px] text-[#949ba4] truncate font-semibold">Online 24/7</p>
                </div>
              </div>
            </div>
          ) : (
            /* General / LMS / Chill server members */
            (['ADMIN', 'INSTRUCTOR', 'STUDENT'] as const).map(roleKey => {
              const baseList = activeServerId === 'chill' ? CHILL_ACTIVITIES : DEMO_MEMBERS;
              const members = baseList.filter(m => m.role === roleKey);
              const cfg = ROLE_CONFIG[roleKey]!;
              const Icon = cfg.icon;
              if (members.length === 0) return null;

              return (
                <div key={roleKey} className="px-2 pt-3">
                  <div className="flex items-center gap-1.5 px-2 mb-2 select-none">
                    <Icon className={`w-3 h-3 ${cfg.color}`} />
                    <span className={`text-[9px] font-bold uppercase tracking-wider font-mono ${cfg.color}`}>
                      {cfg.label} — {members.length}
                    </span>
                  </div>
                  {members.map((m, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-2 py-1.5 rounded hover:bg-[#35373c] transition-colors group cursor-pointer">
                      <div className="relative flex-shrink-0">
                        <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${getAvatarColor(m.name)} flex items-center justify-center text-white text-[9px] font-black`}>
                          {getInitials(m.name)}
                        </div>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#2b2d31] ${
                          m.status === 'online' ? 'bg-[#23a55a]' : m.status === 'away' ? 'bg-[#f0b232]' : 'bg-[#80848e]'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-[#dbdee1] group-hover:text-white truncate leading-tight mb-0.5">
                          {m.name.split(' ')[0]}
                        </p>
                        <p className="text-[9px] text-[#949ba4] truncate leading-none font-medium">
                          {m.activity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* ── 5. Discord-style Right-click Context Menu ────────────────────────────── */}
      {contextMenu && (() => {
        const msg = messages.find(m => m.id === contextMenu.msgId);
        if (!msg) return null;
        const isMe = msg.senderId === user.id;
        return (
          <div
            className="fixed z-[9999] bg-[#111214] border border-[#2b2d31] rounded-lg shadow-2xl py-1.5 min-w-[170px] select-none text-left"
            style={{ left: Math.min(contextMenu.x, window.innerWidth - 180), top: Math.min(contextMenu.y, window.innerHeight - 180) }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => { setReplyTo(msg); setContextMenu(null); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[#dbdee1] hover:bg-[#5865f2] hover:text-white transition-colors">
              <Reply className="w-3.5 h-3.5" /> Balas Pesan
            </button>
            <button onClick={() => { navigator.clipboard.writeText(msg.content); setContextMenu(null); }} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[#dbdee1] hover:bg-[#5865f2] hover:text-white transition-colors">
              <Copy className="w-3.5 h-3.5" /> Salin Teks
            </button>
            {canModerate && (
              <button onClick={() => handlePin(msg)} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-amber-300 hover:bg-[#5865f2] hover:text-white transition-colors">
                <Pin className="w-3.5 h-3.5" /> {msg.isPinned ? 'Lepas Sematan' : 'Sematkan Pesan'}
              </button>
            )}
            {(canModerate || isMe) && (
              <>
                <div className="h-[1px] bg-slate-800/40 my-1 mx-2" />
                <button onClick={() => handleDelete(msg)} className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[#f23f43] hover:bg-[#f23f43] hover:text-white transition-colors font-bold">
                  <Trash2 className="w-3.5 h-3.5" /> {isMe ? 'Hapus Pesan' : '🛡️ Moderasi: Hapus Pesan'}
                </button>
              </>
            )}
            {canModerate && !isMe && (
              <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-red-500 hover:bg-red-500/10 transition-colors">
                <Flag className="w-3.5 h-3.5" /> Laporkan Pengguna
              </button>
            )}
          </div>
        );
      })()}

      {/* ── LIGHTBOX MODAL (Image Full-Screen Viewer) ────────────────────────── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          onClick={() => setLightboxImage(null)}
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
          onKeyDown={e => { if (e.key === 'Escape') setLightboxImage(null); }}
          tabIndex={0}
        >
          {/* Animated image container */}
          <div
            className="relative flex flex-col items-center gap-3 px-4"
            onClick={e => e.stopPropagation()}
            style={{ animation: 'lbZoomIn 0.18s cubic-bezier(.4,0,.2,1) both' }}
          >
            {/* Top bar: filename + close */}
            <div className="flex items-center justify-between w-full max-w-4xl">
              <div className="flex items-center gap-2">
                <Image className="w-4 h-4 text-indigo-400" />
                <span className="text-white text-sm font-bold truncate max-w-xs">{lightboxImage.name}</span>
                <span className="text-slate-500 text-xs font-mono">{lightboxImage.size}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* Download button */}
                <a
                  href={lightboxImage.dataUrl}
                  download={lightboxImage.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5865f2] hover:bg-[#4752c4] text-white text-xs font-bold rounded-lg transition-colors"
                  title="Unduh Gambar"
                >
                  <Download className="w-3.5 h-3.5" /> Unduh
                </a>
                {/* Close button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="w-8 h-8 flex items-center justify-center bg-[#2b2d31] hover:bg-[#f23f43] text-[#b5bac1] hover:text-white rounded-lg transition-colors"
                  title="Tutup (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Full image */}
            <img
              src={lightboxImage.dataUrl}
              alt={lightboxImage.name}
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl border border-white/5 object-contain"
              draggable={false}
            />

            {/* Bottom hint */}
            <p className="text-slate-600 text-[11px] select-none">Klik di luar gambar atau tekan <kbd className="bg-[#2b2d31] px-1.5 py-0.5 rounded text-slate-400 font-mono text-[10px]">Esc</kbd> untuk menutup</p>
          </div>

          {/* Keyframe style injected via style tag */}
          <style>{`
            @keyframes lbZoomIn {
              from { opacity: 0; transform: scale(0.88); }
              to   { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
