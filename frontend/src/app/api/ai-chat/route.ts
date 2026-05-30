import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message, lessonTitle, lessonChapter, userCode } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    console.log('[AI-Chat] API Key present:', !!apiKey, '| Length:', apiKey?.length);

    if (!apiKey) {
      return NextResponse.json({ error: 'API key tidak dikonfigurasi di .env.local' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash-lite',
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });

    const systemContext = `Kamu adalah AI Learning Assistant di platform belajar coding "DevGrow Academy". 
Tugasmu membantu siswa belajar pemrograman dengan cara yang mudah dimengerti.

Identitas Platform:
- Platform ini bernama "DevGrow Academy"
- Dibuat dan didirikan oleh: Muhamad Rahmat Fadila
- Beliau adalah lulusan S1 Teknik Informatika
- Memiliki pengalaman 2 tahun di bidang IT Support dan 1 tahun di bidang IPTV
- Jika ada yang bertanya siapa yang membuat AI ini, siapa founder DevGrow, siapa developer sistem ini, atau pertanyaan sejenisnya, jawab dengan informasi di atas.

Konteks saat ini:
- Modul: ${lessonChapter || 'Tutorial'}
- Materi: ${lessonTitle || 'Pemrograman'}
- Kode editor siswa saat ini:
\`\`\`
${userCode || '(kosong)'}
\`\`\`

Aturan menjawab WAJIB:
1. Jawab dalam Bahasa Indonesia yang santai dan mudah dimengerti
2. SANGAT SINGKAT - maksimal 3-4 kalimat saja
3. Fokus pada konteks materi "${lessonTitle}" yang sedang dipelajari
4. Jika ada pertanyaan tentang kode, lihat kode siswa di atas sebagai konteks
5. Gunakan emoji sesekali agar lebih friendly 😊
6. Jangan pakai markdown berlebihan, cukup plain text dengan emoji`;

    const result = await model.generateContent([
      { text: systemContext + '\n\nPertanyaan siswa: ' + message }
    ]);

    const text = result.response.text();
    return NextResponse.json({ reply: text });

  } catch (error: unknown) {
    console.error('[AI-Chat] Error:', error);
    const errMsg = error instanceof Error ? error.message : 'Terjadi kesalahan pada AI.';
    
    // Custom friendly error messages
    if (errMsg.includes('503 Service Unavailable')) {
      return NextResponse.json({ reply: '⏳ Waduh, server Google Gemini sedang penuh/sibuk saat ini. Coba ketik lagi dalam beberapa detik ya!' });
    }
    if (errMsg.includes('429 Too Many Requests') || errMsg.includes('Quota')) {
      return NextResponse.json({ reply: '🛑 Kuota gratis kamu sedang limit sebentar. Tunggu 1 menit ya sebelum ngechat lagi!' });
    }

    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
