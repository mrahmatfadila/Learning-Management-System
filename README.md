# Learning Management System (LMS) - DevGrow 🎓

A next-generation, high-fidelity Learning Management System built for students, instructors, and administrators. This platform features clean, responsive design conforming to customized global Light and Dark mode preferences, interactive community tools, Notion-style visual text editors, real-time voice-video classes, and advanced analytics matrices.

## ✨ Features Checklist

### 🌗 1. Global Dark/Light Theme Switcher
- **par-value Syncing**: Clean Tailwind-based theme toggler synced automatically across all sidebar groups, header panels, metric stack widgets, and modal inputs.
- **Persistent Preferences**: Saves user selection cleanly inside local storage.

### 👥 2. High-Fidelity Student Management Dashboard
- **Live KPI Overview**: Tracking overall active enrollment numbers, pending requests, graduation ratios, and average progress scores.
- **Search & Filters**: Multi-level selections to filter students by module topics, progress levels, or search queries.
- **Enrollment Drawer & Controls**: Sleek slide-in profiles letting instructors approve access requests, reject, or revoke student access dynamically with database state integrations.

### 📊 3. Advanced Student Progress Matrix & Checklist Tracker
- **Class-by-Class Breakdown**: Tracking modular class averages and graduations index.
- **Visual Checkpoints timeline**: Dynamically lock, unlock, and highlight course milestones based on active database progress.
- **Manual Database Adjuster**: Simple manual range slider and input override letting instructors mutate enrollment progress instantly inside the database.

### 💬 4. WhatsApp/Discord-Style Chat & Voice Classrooms
- **Server Sidebars**: Responsive floating server buttons and collapsible channel groups.
- **Immersive Video-Voice Call**: Discord-style horizontal panel utilizing browser webcam capture, wave visualizers, active speaker highlighting, and mock screensharing cells.

### 📚 5. Notion-Style WYSIWYG Editor
- **WYSIWYG Writing Workspace**: Clean `contentEditable` workspace hiding raw source codes.
- **Interactive Builders**: Formatting toolbars and quiz template generators for instructors.

### ❓ 6. Q&A Forum System
- **Topic Filter Sidebar**: Instantly filter questions by module categories.
- **Helpful Rating & Best Answer Spotlight**: Mark solved questions and highlight selected answers in a verification spotlight block.

---

## 🛠️ Technology Stack

- **Frontend**: Next.js, React, Tailwind CSS, Lucide Icons, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database & ORM**: PostgreSQL / MySQL, Prisma Client ORM

---

## 🚀 Getting Started

### 1. Backend Configuration
1. Navigate to the `backend/` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` database connection credentials:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/lms"
   ```
4. Push prisma migrations and seed initial courses:
   ```bash
   npx prisma db push
   npx prisma generate
   npm run seed
   ```
5. Spin up backend developer server:
   ```bash
   npm run dev
   ```

### 2. Frontend Configuration
1. Navigate to the `frontend/` folder:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Spin up frontend Next.js server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) inside your web browser.
