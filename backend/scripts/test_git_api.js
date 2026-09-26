const http = require('http');

function testEndpoint(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, data: json });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data.substring(0, 200) });
        }
      });
    }).on('error', (err) => {
      resolve({ error: err.message });
    });
  });
}

async function run() {
  console.log('Testing Backend API on port 5000...');
  const res1 = await testEndpoint('http://localhost:5000/api/modules/git');
  console.log('GET /api/modules/git:', res1.status, res1.data ? { title: res1.data.title, chaptersCount: res1.data.chapters?.length, lessonsCount: res1.data.lessons?.length } : res1);

  const res2 = await testEndpoint('http://localhost:5000/api/modules/git-github-version-control');
  console.log('GET /api/modules/git-github-version-control:', res2.status, res2.data ? { title: res2.data.title, chaptersCount: res2.data.chapters?.length, lessonsCount: res2.data.lessons?.length } : res2);

  const res3 = await testEndpoint('http://localhost:5000/api/lessons/module/git');
  console.log('GET /api/lessons/module/git:', res3.status, Array.isArray(res3.data) ? `Total Lessons: ${res3.data.length}` : res3);
}

run();
