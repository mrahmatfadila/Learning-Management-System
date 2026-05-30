DO $$ 
DECLARE
  instructor_id UUID;
BEGIN
  SELECT id INTO instructor_id FROM "User" WHERE role = 'INSTRUCTOR' LIMIT 1;
  IF instructor_id IS NULL THEN
    instructor_id := gen_random_uuid();
    INSERT INTO "User" (id, name, email, password, role, "isVerified", "createdAt", "updatedAt") 
    VALUES (instructor_id, 'John Instructor', 'john@instructor.com', 'password123', 'INSTRUCTOR', true, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'HTML & Web Basics') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'HTML & Web Basics', 'Learn the foundational structure of the web. Master semantic HTML5, accessible markup, and document flow.', 'Programming', instructor_id, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'CSS Styling & Animations') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'CSS Styling & Animations', 'Design beautiful, responsive web pages. Deep dive into Flexbox, Grid, CSS Variables, and Keyframe animations.', 'Design', instructor_id, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'Modern Javascript (ES6+)') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'Modern Javascript (ES6+)', 'The definitive guide to JavaScript. Understand closures, async/await, DOM manipulation, and modern ES6+ syntax.', 'Programming', instructor_id, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'PHP Backend Development') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'PHP Backend Development', 'Build robust server-side applications. Learn PHP 8, object-oriented concepts, and basic API integrations.', 'Programming', instructor_id, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'MySQL Database Mastery') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'MySQL Database Mastery', 'Master relational databases. Write complex queries, optimize performance, and design scalable schemas.', 'Database', instructor_id, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'Git Version Control') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'Git Version Control', 'Collaborate like a pro. Master branches, merges, rebasing, and resolving conflicts with Git and GitHub.', 'Programming', instructor_id, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'Mobile App with React Native') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'Mobile App with React Native', 'Build cross-platform mobile apps using your React skills. Learn navigation, state management, and device APIs.', 'Mobile', instructor_id, NOW(), NOW());
  END IF;

  IF NOT EXISTS (SELECT 1 FROM "Module" WHERE title = 'Cisco Networking Fundamentals') THEN
    INSERT INTO "Module" (id, title, description, category, "instructorId", "createdAt", "updatedAt") 
    VALUES (gen_random_uuid(), 'Cisco Networking Fundamentals', 'Understand how the internet works. Learn subnetting, routing protocols, and basic switch configurations.', 'Jaringan', instructor_id, NOW(), NOW());
  END IF;
END $$;
