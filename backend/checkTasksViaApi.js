async function check() {
  const modRes = await fetch('http://localhost:5000/api/modules');
  const modules = await modRes.json();
  console.log('Modules:', modules.length);
  for (const m of modules) {
    const taskRes = await fetch(`http://localhost:5000/api/tasks/module/${m.id}`);
    const tasks = await taskRes.json();
    if (tasks && tasks.length > 0) {
      console.log(`Module ${m.title} has ${tasks.length} tasks:`, tasks.map(t => t.title));
    }
  }
}
check();
