const http = require('http');

const BASE_URL = process.env.SMOKE_URL || 'http://localhost:3000';
const checks = [
  { name: 'Health check', path: '/api/health', expect: 200 },
  { name: 'Homepage', path: '/', expect: 200 },
];

async function check(name, url, expectedStatus) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      const passed = res.statusCode === expectedStatus;
      console.log(`${passed ? 'PASS' : 'FAIL'} ${name} -> ${res.statusCode}`);
      resolve(passed);
    });
    req.on('error', (err) => {
      console.log(`FAIL ${name} -> ${err.message}`);
      resolve(false);
    });
    req.setTimeout(5000, () => { req.destroy(); resolve(false); });
  });
}

async function run() {
  console.log(`\nSmoke testing ${BASE_URL}\n`);
  let allPassed = true;
  for (const c of checks) {
    const passed = await check(c.name, `${BASE_URL}${c.path}`, c.expect);
    if (!passed) allPassed = false;
  }
  console.log(allPassed ? '\nAll checks passed!' : '\nSome checks failed!');
  process.exit(allPassed ? 0 : 1);
}

run();
