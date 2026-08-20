import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import contentRoutes from './routes/contentRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use('/api/v1', contentRoutes);

app.get('/', (req, res) => {
  res.json({
    service: 'LMS External Content Provider API',
    status: 'ONLINE',
    version: '1.0.0',
    documentation: {
      allModules: `http://localhost:${PORT}/api/v1/modules`,
      moduleDetail: `http://localhost:${PORT}/api/v1/modules/:id`,
      lessonDetail: `http://localhost:${PORT}/api/v1/lessons/:id`
    }
  });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 LMS External Content API Server is running on port ${PORT}`);
  console.log(`🌐 Public API: http://localhost:${PORT}/api/v1/modules`);
  console.log(`=======================================================`);
});
