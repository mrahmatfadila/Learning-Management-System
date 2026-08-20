const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_content_db',
  },
};
