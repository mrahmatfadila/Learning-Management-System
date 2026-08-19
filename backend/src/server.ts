import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import moduleRoutes from './routes/moduleRoutes';
import userRoutes from './routes/userRoutes';
import enrollmentRoutes from './routes/enrollmentRoutes';
import lessonRoutes from './routes/lessonRoutes';
import chapterRoutes from './routes/chapterRoutes';
import taskRoutes from './routes/taskRoutes';
import submissionRoutes from './routes/submissionRoutes';
import scheduleRoutes from './routes/scheduleRoutes';
import messageRoutes from './routes/messageRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/submissions', submissionRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/messages', messageRoutes);


app.get('/', (req, res) => {
  res.send('LMS API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
