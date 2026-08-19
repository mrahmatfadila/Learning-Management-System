# ANTIGRAVITY PROJECT SAFETY & GIT BACKUP RULES

## PRIORITY: DATA SAFETY > CODE SAFETY > TASK COMPLETION

Aturan ini WAJIB dipatuhi pada setiap pekerjaan.

Tujuan utama:
* Melindungi source code existing.
* Melindungi database dan data existing.
* Mencegah perubahan destruktif.
* Memastikan setiap perubahan yang berhasil memiliki backup melalui Git.
* Memastikan project selalu dapat dikembalikan ke kondisi sebelumnya.

---

# 1. GIT ADALAH CHECKPOINT WAJIB

Setiap task yang selesai WAJIB dibuatkan Git commit.

Workflow WAJIB:
1. Periksa `git status`.
2. Periksa perubahan yang sudah ada SEBELUM mulai bekerja.
3. Jangan menghapus atau menimpa perubahan lokal yang dibuat oleh developer.
4. Kerjakan task.
5. Test perubahan.
6. Periksa kembali `git status`.
7. Review file yang berubah.
8. Pastikan tidak ada file penting yang tidak sengaja berubah.
9. Commit perubahan.
10. Pastikan commit berhasil.
11. Jika repository menggunakan remote GitHub, push commit ke branch yang sesuai jika push diizinkan oleh project workflow.
12. Laporkan commit hash kepada developer.

Setiap task yang selesai harus menghasilkan checkpoint Git yang jelas.

Contoh:
`feat: add ticket priority calculation`
atau
`fix: resolve ticket filtering issue`

---

# 2. JANGAN PERNAH MENGHAPUS PERUBAHAN DEVELOPER

Sebelum mulai bekerja WAJIB menjalankan pemeriksaan Git.

Jika terdapat perubahan yang belum di-commit:
* Jangan melakukan reset.
* Jangan melakukan checkout terhadap perubahan tersebut.
* Jangan menggunakan `git restore .`.
* Jangan menggunakan `git reset --hard`.
* Jangan menggunakan `git clean`.
* Jangan menghapus perubahan tersebut.
* Jangan overwrite file yang memiliki perubahan developer tanpa memahami isinya.

Jika perubahan existing tidak berhubungan dengan task:
PISAHKAN perubahan tersebut dan jangan menyentuhnya.

Jika tidak yakin, BERHENTI dan tanyakan kepada developer.

---

# 3. DILARANG MELAKUKAN OPERASI GIT DESTRUKTIF

Tanpa persetujuan eksplisit developer, DILARANG menjalankan:
* `git reset --hard`
* `git reset --merge`
* `git clean -fd`
* `git clean -fdx`
* `git checkout .`
* `git restore .`
* `git push --force`
* `git push -f`
* menghapus branch
* menghapus commit
* rewrite Git history
* rebase terhadap branch bersama

Jika command berpotensi menghilangkan perubahan developer:
STOP. Minta konfirmasi terlebih dahulu.

---

# 4. COMMIT SETELAH TASK SELESAI

Setelah implementasi selesai:
1. Jalankan test/build/lint yang relevan.
2. Periksa `git diff`.
3. Periksa `git status`.
4. Pastikan hanya perubahan yang berhubungan dengan task yang masuk ke commit.
5. Commit perubahan.

Jangan membuat commit yang berisi perubahan random atau tidak berhubungan.
Gunakan commit message yang jelas.

Format:
`type: description`

Contoh:
`feat: add ticket dashboard`
`fix: resolve login session issue`
`refactor: simplify ticket service`
`docs: update project documentation`
`chore: update dependencies`

---

# 5. JANGAN COMMIT SECRET

JANGAN PERNAH melakukan commit terhadap:
* `.env`
* `.env.local`
* password
* API key
* access token
* JWT secret
* database password
* private key
* credential
* SSH key
* certificate private key

Sebelum commit, periksa perubahan dan pastikan tidak ada secret.
Jika menemukan secret: STOP. Jangan commit.

---

# 6. DATABASE ADALAH DATA KRITIS

Database tidak boleh dianggap sebagai bagian yang boleh di-reset untuk menyelesaikan error.

DILARANG tanpa persetujuan:
* `DROP DATABASE`
* `DROP TABLE`
* `TRUNCATE`
* `DELETE` massal
* database reset
* migration reset
* `prisma migrate reset`
* `prisma db push --force-reset`
* command lain yang dapat menghapus data

Jangan pernah menggunakan reset database sebagai solusi pertama.
Jika terjadi error database:
1. Analisis error.
2. Identifikasi penyebab.
3. Periksa schema.
4. Periksa migration.
5. Cari solusi non-destruktif.
6. Jika tetap membutuhkan operasi destruktif, STOP. Minta persetujuan developer.

---

# 7. PRISMA DATABASE SAFETY

Untuk project yang menggunakan Prisma:
DILARANG menjalankan `prisma migrate reset` atau `prisma db push --force-reset` tanpa persetujuan eksplisit.

Jika membutuhkan perubahan schema:
Gunakan migration/push yang aman tanpa mereset data (`npx prisma db push` tanpa `--force-reset`).

---

# 8. JANGAN MENGHAPUS CODE EXISTING

Jangan menghapus component, page, API, route, service, utility, database model, migration, configuration, authentication, middleware, atau feature existing hanya karena dianggap tidak diperlukan.

---

# 9. PERUBAHAN HARUS MINIMAL

Gunakan prinsip: "MAKE THE SMALLEST SAFE CHANGE."

---

# 10. JANGAN MEMPERBAIKI ERROR DENGAN CARA DESTRUKTIF

Workflow penanganan error:
ERROR → ANALYZE → IDENTIFY ROOT CAUSE → MINIMAL FIX → TEST → REVIEW → COMMIT

---

# 11. BACKUP CHECKPOINT & WORKFLOW

`git status` → `task start` → `implementation` → `testing` → `git diff` → `commit` → `task complete`

---

# 12. PRODUCTION & REPOSITORY SAFETY

DILARANG menggunakan `git push --force` atau `git push -f` tanpa persetujuan developer.

---

# FINAL PRINCIPLE

"MAKE THE SMALLEST SAFE CHANGE."
"NEVER DESTROY DATA OR CODE TO FIX A PROBLEM."
"EVERY COMPLETED TASK MUST HAVE A RECOVERABLE GIT CHECKPOINT."
"IF YOU ARE NOT SURE, STOP AND ASK."
