# AGENTS.md

# PROJECT SAFETY & DEVELOPMENT RULES

> CRITICAL: These rules are mandatory.
>
> The primary objective is to protect source code, database, configuration, developer changes, and Git history.
>
> When in doubt: STOP and ASK THE DEVELOPER.

---

# 1. CORE PRINCIPLES & PRIORITY

Prinsip:
- "MAKE THE SMALLEST SAFE CHANGE."
- "NEVER DESTROY WHAT YOU DID NOT CREATE."
- "WHEN IN DOUBT, STOP AND ASK."

Priority:
1. Database dan data existing (PROTECT DATA FIRST).
2. Source code existing (PROTECT CODE SECOND).
3. Perubahan developer yang belum di-commit.
4. Git history.
5. Fitur existing.
6. Penyelesaian task.

NEVER sacrifice existing data or source code just to make an error disappear quickly.

---

# 2. BEFORE STARTING ANY TASK

Before modifying anything, WAJIB:

1. Baca `AGENTS.md`.
2. Jalankan `git status`.
3. Identifikasi branch aktif (`git branch`).
4. Periksa apakah terdapat perubahan lokal yang belum di-commit.
5. Pahami scope task.
6. Tentukan file yang benar-benar perlu diubah.

Do NOT assume existing uncommitted changes were created by AI. They belong to the developer.

If there are existing changes:
- Do not delete them.
- Do not reset them.
- Do not overwrite them.
- Do not use `git restore .` or `git checkout .`.
- Do not use `git reset --hard` or `git clean -fd`.
- Do not stash without a clear reason or mix unrelated changes into task commits.

If existing changes conflict with the requested task, STOP and ask the developer.

---

# 3. SOURCE CODE SAFETY

Existing code must be considered intentional unless the developer explicitly requests its removal.

NEVER delete:
- pages
- components
- API routes
- backend services
- database models
- utility functions
- middleware
- authentication
- configuration
- migrations
- existing features

just because they appear unused, outdated, duplicated, or unnecessary.

If you believe code should be removed:
STOP. Explain:
- what should be removed;
- why;
- dependencies;
- possible consequences & safer alternatives.

Wait for explicit approval.

---

# 4. MINIMAL CHANGE PRINCIPLE

Always use:
> CHANGE ONLY WHAT IS NECESSARY.

If the task requires changing 1-3 files, do not unnecessarily modify ten or more files.

Do NOT:
- refactor unrelated code;
- rename unrelated files;
- restructure project architecture;
- replace frameworks or major libraries;
- rewrite existing working components.

unless explicitly requested.

---

# 5. DATABASE SAFETY

DATABASE IS CRITICAL DATA.

Normal CRUD operations required by application features ARE ALLOWED:
- `SELECT`
- `INSERT`
- `UPDATE`
- `DELETE` on specific records with explicit `WHERE` clause
- Normal database transactions and queries.

However, the following operations are DESTRUCTIVE / HIGH RISK:
- `DROP DATABASE`
- `DROP TABLE`
- `TRUNCATE`
- Mass `DELETE`
- `DELETE` without clear `WHERE` clause
- Database reset / schema reset
- Destructive migrations or deleting migration history
- Recreating the database or deleting production data.

NEVER execute destructive database operations without explicit developer approval.

---

# 6. DELETE SAFETY

`DELETE` on specific data is allowed if required by the application feature (e.g., `DELETE FROM tickets WHERE id = 123`).

However, NEVER execute mass deletes (e.g., `DELETE FROM tickets`).

If a `DELETE` operation has potential to remove multiple records:
STOP. Display:
- SQL query;
- Target table;
- Estimated affected record count;
- Reason & risk assessment.

Wait for developer approval before continuing.

---

# 7. PRISMA SAFETY

For projects using Prisma:

NEVER execute:
```text
npx prisma migrate reset
```
or any force database reset commands without explicit developer approval.

Never use a database reset as a shortcut to solve an application error.

When changing `prisma/schema.prisma`:
1. Understand the existing schema.
2. Identify affected models.
3. Determine whether existing data is affected.
4. Create a safe migration.
5. Review the SQL migration.
6. Ensure existing data is preserved.
7. Test the migration.
8. Commit schema and migration together.

Never delete or rewrite existing production migrations without explicit approval.

---

# 8. DATABASE ADMIN & CREDENTIAL SAFETY

- Do not use superuser/admin credentials for application operations if not required.
- Use dedicated application database users with minimum necessary permissions.
- Do not hardcode database admin passwords, API keys, tokens, or secrets in source code.
- NEVER commit secrets (`.env`, `.env.local`, JWT secrets, private keys, SSH keys).

---

# 9. DATABASE RESET WARNING & REPORTING

If an error occurs and a database reset / drop / truncate is considered:
DO NOT execute it immediately.

STOP and report:
```text
DATABASE SAFETY WARNING

Operation:
[operation]

Database / Table:
[database / table]

Potential impact:
[impact]

Potential data loss:
[YES/NO]

Alternative safe solution:
[safe alternative]

Approval required before continuing.
```

Wait for explicit developer confirmation.

---

# 10. GIT SAFETY

Git is the primary source-code recovery mechanism.

FORBIDDEN without explicit approval:
- `git reset --hard`
- `git reset --merge`
- `git clean -fd`
- `git clean -fdx`
- `git checkout .`
- `git restore .`
- `git push --force`
- `git push -f`
- deleting branches or commits;
- rewriting shared Git history.

If a Git operation could cause loss of work:
STOP and ask.

---

# 11. PROTECT DEVELOPER CHANGES

If `git status` shows uncommitted changes before starting a task:
Those changes are PROTECTED.

Do not assume they belong to AI.
Do not overwrite, reset, restore, or delete them.
Only include changes related to the current task in the task commit.

If separation is difficult, STOP and ask the developer.

---

# 12. TESTING IS REQUIRED

After implementing a task, run relevant verification:
- `npm run lint` / build check
- TypeScript check (`tsc --noEmit`)
- Unit / integration tests
- Database migration check
- Application startup check.

If a test fails:
DO NOT hide the failure.
DO NOT reset the database or delete code to pass tests.
Find the root cause and apply a minimal fix.

---

# 13. REVIEW BEFORE COMMIT

Before creating a commit:
1. Run `git status`.
2. Run `git diff`.
3. Review changed files for accidental deletions or unrelated edits.
4. Check for secrets.
5. Confirm relevant tests pass and database is safe.

Only commit changes related to the task.

---

# 14. AUTOMATIC GIT CHECKPOINT

EVERY COMPLETED TASK MUST HAVE A RECOVERABLE GIT CHECKPOINT.

Workflow:
`TASK` → `IMPLEMENTATION` → `TEST` → `git status` → `git diff` → `REVIEW` → `git commit` → `git push (if allowed)`

Clear commit message format:
`type: description` (e.g. `feat: add ticket dashboard`, `fix: resolve login validation`).

Do NOT use vague messages (`update`, `changes`, `fix`, `aaa`).

---

# 15. GITHUB PUSH SAFETY

If repository has GitHub remote and project workflow allows:
1. Verify branch and commit.
2. Confirm no secrets are included.
3. Push to appropriate branch.

NEVER use `git push --force` or `git push -f` without explicit approval.
If push fails, do not delete commits or reset repository. Report error and wait.

---

# 16. SECRETS & ENVIRONMENT VARIABLES

NEVER commit `.env`, `.env.local`, `.env.production`, passwords, API keys, access tokens, JWT secrets, database credentials, or private keys.

If a secret is staged, STOP immediately and do not commit.

---

# 17. PROTECTED CONFIGURATION FILES

Be extremely careful when modifying:
- `.env` / `.env.local`
- `package.json` / lockfiles
- `tsconfig.json` / `next.config.*`
- `prisma/schema.prisma` / `prisma/migrations/*`
- `middleware.*` / `Dockerfile` / `docker-compose.*`
- Authentication & Database configuration.

Only modify when required by the task.

---

# 18. ERROR HANDLING WORKFLOW

When an error occurs:
`ERROR` → `ANALYZE` → `IDENTIFY ROOT CAUSE` → `MINIMAL FIX` → `TEST` → `REVIEW` → `COMMIT`

DO NOT use destructive shortcuts (db reset, git reset, deleting code/migrations) to solve errors.

---

# 19. PRODUCTION SAFETY

Production is HIGH RISK.
Never perform destructive operations on production without explicit approval.

If task involves production:
STOP and explain risks before taking action.

---

# 20. AUTOMATIC CHECKPOINT REPORTING

After task completion, report:
```text
TASK COMPLETED

Task:
[task description]

Changes:
- [change 1]
- [change 2]

Testing:
- [test executed]
- [result]

Git:
Branch: [branch]
Commit: [commit hash]
Commit message: [message]

GitHub:
Pushed: YES/NO

Database:
Changed: YES/NO
Migration: YES/NO
```

---

# 21. MANDATORY CONFIRMATION FORMAT

Explicit approval REQUIRED before:
`DROP DATABASE`, `DROP TABLE`, `TRUNCATE`, mass `DELETE`, database reset, destructive migration, deleting migration/important files, `git reset --hard`, `git clean`, force push, rewriting Git history, major architecture changes.

Format:
```text
CONFIRMATION REQUIRED

Operation:
[...]

Target:
[...]

Risk:
[...]

Potential data loss:
[...]

Reason:
[...]

Alternative safe approach:
[...]

DO NOT CONTINUE UNTIL THE DEVELOPER CONFIRMS.
```

---

# 22. CONFIRMATION DOES NOT OVERRIDE SAFETY

Even if developer confirms a high-risk operation:
1. Explain risks again.
2. Ensure backup is available.
3. Verify target database/environment is correct (not production by accident).

If information is unclear, STOP and ask.

---

# 23. DATABASE BACKUP PRINCIPLE

Git protects source code, NOT database data.
For major database changes or risky migrations:
Recommend a separate database backup before execution.

---

# 24. AUTOMATIC DATABASE BACKUP RULE

AI WAJIB MENJALANKAN BACKUP DATABASE OTOMATIS:

Setiap kali menyelesaikan prompt/task yang melibatkan perubahan schema atau data database (INSERT, UPDATE, DELETE, migration, seeding, dll.), AI WAJIB menjalankan:
```bash
npm run db:backup
```
pada direktori `backend/`.

Fitur ini akan menghasilkan snapshot PostgreSQL bertanggal secara otomatis di `backend/backups/backup_YYYY-MM-DD_HH-mm-ss.sql` dan `backend/backups/latest.sql`.

Untuk memulihkan data database kapan saja ke snapshot terakhir, cukup jalankan:
```bash
npm run db:restore
```

---

# 25. INITIAL SETUP INSTRUCTION

When initializing rules:
1. Check project structure.
2. Verify `AGENTS.md` presence.
3. Merge rules into `AGENTS.md`.
4. Do not modify database, delete code, perform migrations, or reset Git.
5. Display setup report to developer (Location, Creation status, Git branch, Git status, GitHub remote, pre-existing changes).
6. DO NOT commit or push setup before explicit developer approval.

---

# 25. ABSOLUTE RULES

1. NEVER delete or reset the database without approval.
2. NEVER intentionally delete existing data without approval.
3. NEVER delete existing code without approval.
4. NEVER delete existing migrations without approval.
5. NEVER destroy developer's uncommitted changes.
6. NEVER use `git reset --hard` or `git clean -fd` without approval.
7. NEVER force-push without approval.
8. NEVER commit secrets.
9. NEVER modify unrelated files unnecessarily.
10. NEVER use destructive operations to solve errors.
11. ALWAYS test completed work.
12. ALWAYS review changes before committing.
13. ALWAYS create a Git checkpoint after successfully completing a task.
14. ALWAYS prioritize data safety over speed.
15. WHEN IN DOUBT, STOP AND ASK.

---

# 26. GOLDEN RULE

> NEVER DESTROY WHAT YOU DID NOT CREATE.
>
> NEVER DELETE WHAT YOU DO NOT FULLY UNDERSTAND.
>
> MAKE THE SMALLEST SAFE CHANGE.
>
> PROTECT DATA FIRST.
>
> PROTECT CODE SECOND.
>
> EVERY SUCCESSFUL TASK MUST HAVE A RECOVERABLE GIT CHECKPOINT.
>
> WHEN IN DOUBT, STOP AND ASK THE DEVELOPER.

---

# 27. ENTERPRISE LMS CURRICULUM & CONTENT STANDARDS (JS, PHP, PYTHON, ETC.)

> ATURAN BAKU PENYUSUNAN MATERI KURIKULUM LMS
>
> Seluruh pengisian modul pemrograman (JavaScript, PHP, Python, HTML, CSS, Git, dll.) WAJIB mengikuti standar kelengkapan, kedalaman, dan struktur data berskala enterprise seperti modul JavaScript (306 materi) dan PHP (888 materi).

### 1. Granularitas & Kedalaman Materi Skala Besar (Aturan Sub-Judul Sidebar)
- Setiap materi harus diuraikan secara mendalam, komprehensif, dan menyeluruh (exhaustively detailed).
- **ATURAN TANDA KURUNG / SUB-JUDUL SIDEBAR**: Jika sebuah topik memiliki sub-topik di dalam tanda kurung (contoh: `Python Variables (Python Variables, Variable Names, Assign Multiple Values, Output Variables, Global Variables, Variable Exercises, Code Challenge)`), maka **SETIAP SUB-TOPIK WAJIB DIPECAH MENJADI ENTRY LESSON TERSENDIRI DI SIDEBAR** dengan judul yang bersih dan rapi (contoh lesson: `Python Variables`, `Python Variable Names`, `Python Assign Multiple Values`, `Python Output Variables`, `Python Global Variables`, `Python Variable Exercises`, `Python Variables Challenge`).
- **DILARANG** menggabungkan daftar sub-topik panjang ke dalam 1 judul lesson tunggal (seperti `Python Lists (Python Lists, Access List Items, Change List Items, ...)`).
- Dilarang membuat konten ringkas/singkat (jangan buat placeholder atau "lorem ipsum").

### 2. Struktur Objek Materi Wajib
Setiap lesson wajib memiliki struktur data lengkap:
```javascript
{
  id: 'slug-unik-kebab-case',
  title: 'Judul Lengkap Beserta Sub-Grup',
  chapter: 'Nama Bab',
  chapterId: 'id-bab',
  order: 1, // Nomor urut sekuensial
  overview: 'Ringkasan konsep dan tujuan pembelajaran',
  theory: `<!-- HTML Visual Cards dengan Tailwind CSS, tabel referensi, box perbandingan, dan pembedahan konsep -->`,
  code: `# Kode program executable yang bersih, modern, dan mendidik`,
  codeExplanation: [
    'Penjelasan baris kode per baris secara detail'
  ],
  challenge: {
    instruction: 'Instruksi tantangan koding yang jelas',
    starterCode: 'Kode awal untuk dikerjakan siswa',
    hint: 'Petunjuk penyelesaian tantangan'
  },
  quiz: {
    question: 'Pertanyaan kuis pilihan ganda evaluasi teknis',
    options: ['Opsi A', 'Opsi B', 'Opsi C', 'Opsi D'],
    correctIndex: 0,
    explanation: 'Pembahasan lengkap mengapa jawaban tersebut benar'
  }
}
```

### 3. Dual-Database Sync & Student Auto-Enrollment
- Data materi harus disimpan di **`lms_content_db`** dan langsung disinkronkan ke **`lms_edutech_db`**.
- Chapter dan Module di `lms_edutech_db` harus terverifikasi (`isVerified: true`) dan terhubung dengan role instruktur/admin.
- Siswa (*role: STUDENT*) harus otomatis terdaftar (*Enrollment APPROVED*) agar modul langsung tampil dengan jumlah materi yang tepat di dashboard siswa.

### 4. Eksekusi Backup Otomatis (Rule #24)
- Setiap kali selesai melakukan seeding atau update materi ke database, WAJIB menjalankan:
  ```bash
  npm run db:backup
  ```
  pada folder `backend/`.

### 5. Standar Hierarki 3 Tingkat Sidebar (Judul Bab -> Sub Judul 1 -> Sub Judul 2 Menjorok)
Aturan pemetaan saat developer mengirimkan format kurikulum seperti:
```text
Python Tutorial
Python HOME
Python Intro
Python Get Started
Python Syntax (Syntax, Statements, Code Challenge)
Python Output (Print Text, Print Numbers, Code Challenge)
Python Comments (Comments, Code Challenge)
```

Pemetaan hierarki sidebar yang WAJIB diterapkan:
- **Tier 1 (Judul Bab Utama / Accordion Level 1)**:
  - Judul bab besar (contoh: `Python Tutorial`).
- **Topik Mandiri (Tanpa Tanda Kurung)**:
  - Topik dasar mandiri (contoh: `Python HOME`, `Python Intro`, `Python Get Started`) ditampilkan langsung sejajar di bawah Bab dengan bullet/icon rapi.
- **Tier 2 (Sub Judul 1 / Parent Topic Header)**:
  - Nama topik pengelompokan yang memiliki anak di dalam kurung (contoh: `Python Syntax`, `Python Output`, `Python Comments`). Ditampilkan sebagai header kategori dengan indikator visual pemisah.
- **Tier 3 (Sub Judul 2 / Child Lessons Menjorok ke Dalam / Indented)**:
  - Setiap materi di dalam tanda kurung dipecah menjadi entri materi interaktif mandiri yang ditampilkan **menjorok ke dalam (indented)** dengan garis pohon vertikal:
    - Di bawah `Python Syntax` $\rightarrow$ `Syntax`, `Statements`, `Code Challenge`
    - Di bawah `Python Output` $\rightarrow$ `Print Text`, `Print Numbers`, `Code Challenge`
    - Di bawah `Python Comments` $\rightarrow$ `Comments`, `Code Challenge`
- Format penamaan database untuk Tier 3 menggunakan format: `[Parent Topic] - [Child Lesson]` (contoh: `Python Syntax - Syntax`, `Python Syntax - Statements`, `Python Syntax - Code Challenge`) sehingga parser frontend otomatis mengenali induk dan merender nama bersihnya menjorok di sidebar.

---

# 28. CLEAN CODE, MAINTAINABILITY & HIGH-PERFORMANCE WEB STANDARDS

> ATURAN BAKU PENULISAN KODE BERSIH, MUDAH DI-MAINTENANCE, DAN RINGAN (HIGH PERFORMANCE)
>
> Seluruh penulisan kode (Frontend & Backend) WAJIB mematuhi prinsip Clean Code, mudah dibaca, mudah dikembangkan (maintainable), dan berkinerja tinggi agar sistem tidak berat atau lambat.

### 1. Prinsip Clean Code & Readable Architecture
- **Keterbacaan Utama (Readability First)**: Gunakan penamaan variabel, fungsi, dan komponen yang jelas, eksplisit, dan deskriptif bahasa Inggris/Indonesia yang konsisten.
- **Single Responsibility Principle (SRP)**: Satu fungsi atau komponen hanya menangani satu tugas spesifik. Hindari fungsi multi-task yang panjang dan rumit.
- **Pemisahan Logika & Tampilan (Separation of Concerns)**: Pisahkan logika kalkulasi bisnis, data fetching, dan rendering UI ke dalam helper atau custom hooks jika kode mulai kompleks.
- **Clean File Structure**: Jaga agar file tidak membengkak tanpa struktur yang jelas. Hindari duplikasi kode (DRY - Don't Repeat Yourself).

### 2. Efisiensi & Kinerja Tinggi Frontend (Anti-Lag & Anti-Freeze)
- **Cegah DOM Overload / Over-Rendering**:
  - Pada modul dengan ratusan/ribuan data (contoh: PHP 888 materi), **DILARANG** merender seluruh item DOM terbuka secara bersamaan.
  - Gunakan sistem **Collapsible Accordion / On-Demand Rendering** sehingga hanya bab aktif yang dirender ke DOM.
- **Optimasi Next.js Routing & Prefetch**:
  - Gunakan hook resmi dan stabil Next.js seperti `useParams()` dan `useRouter()` dari `next/navigation`.
  - Tambahkan `prefetch={false}` pada link di dalam tabel atau daftar panjang materi untuk mencegah browser membeku akibat ratusan request prefetch latar belakang yang simultan.
- **Zero Keystroke Lag (Memoization)**:
  - Gunakan `useMemo` dan `useCallback` untuk kalkulasi filter, pencarian, dan pengelompokan hierarki agar pengetikan di input/editor tetap responsif (0ms lag).
- **Asynchronous Heavy Libraries**:
  - Komponen berat seperti Code Editor (Monaco Editor) wajib dimuat secara non-blocking (`dynamic import` dengan `ssr: false` dan lightweight fallback loader).

### 3. Efisiensi & Kinerja Tinggi Backend (Lightweight Payloads)
- **Pemisahan Query List vs Query Detail (Payload Reduction)**:
  - Endpoint yang mengambil daftar modul/silabus (`getModuleById` / `getLessonsByModuleId`) **HANYA** boleh memilih metadata ringan (`id`, `title`, `type`, `order`, `chapter`, `chapterId`).
  - **DILARANG** menyertakan string HTML/JSON `content` yang besar pada query daftar, karena dapat membengkakkan payload hingga puluhan Megabytes.
  - Konten detail materi yang lengkap hanya diambil saat pengguna membuka satu materi spesifik (`getLessonById`).
- **Fast Timeout & Non-Blocking API**:
  - Setiap pemanggilan HTTP internal/Content API harus dilengkapi timeout yang cepat (maksimal 150-200ms) agar jika service offline, sistem tidak mengalami blocking atau jeda tunggu lama.

---

# 29. BROWSER AUTOMATION RESTRICTION (NO AUTO BROWSER SUBAGENT / USER SCREENSHOT ONLY)

> ATURAN BAKU: DILARANG KERAS MEMBUKA BROWSER / SUBAGENT BROWSER SECARA OTOMATIS
>
> Penggunaan browser subagent otomatis sangat memakan banyak kuota limit AI dan berpotensi menyebabkan hanging/lag.

### Aturan:
1. **DILARANG KERAS** menjalankan `browser_subagent` atau membuka browser sendiri untuk melihat hasil tampilan/analisis frontend.
2. Jika membutuhkan konfirmasi/pemeriksaan visual UI: **AI WAJIB MEMINTA DEVELOPER (USER) UNTUK MELAKUKAN SCREENSHOT (SS)** dan mengirimkannya ke chat.
3. Verifikasi pekerjaan frontend berfokus pada kebenaran logika kode, pemetaan data, build check, dan respons instruksi langsung dengan developer.



