import { Scenario } from './types';

export const nodejsScenarios: Scenario[] = [
  {
    id: 'node-runtime-1',
    category: 'Beginner • Runtime',
    problem: 'Your API should handle many concurrent I/O tasks efficiently without spawning a thread per request. Which model describes Node.js best?',
    visual: `Node.js model:
Single JS thread
+ Event Loop
+ Non-blocking I/O`,
    options: [
      'Thread per request',
      'Single-threaded event loop with async I/O',
      'Synchronous blocking server',
      'GPU parallel runtime'
    ],
    correctAnswer: 'Single-threaded event loop with async I/O',
    hint: 'Think event loop and async operations.',
    explanation: 'Node.js executes JS on one main thread and delegates I/O to the system/libuv, enabling scalable concurrency.',
    codeExample: `import http from 'node:http';

http.createServer(async (_req, res) => {
  // async I/O can overlap across requests
  const data = await fetchData();
  res.end(data);
}).listen(3000);`
  },
  {
    id: 'node-modules-1',
    category: 'Beginner • Modules',
    problem: 'In a CommonJS project, which syntax imports the fs module?',
    visual: `CommonJS vs ESM
CJS: require(...)
ESM: import ... from ...`,
    options: [
      "import fs from 'fs'",
      "const fs = require('fs')",
      "using fs from 'fs'",
      "load fs from 'fs'"
    ],
    correctAnswer: "const fs = require('fs')",
    hint: 'CommonJS uses require().',
    explanation: 'CommonJS module loading syntax is require(). ESM uses import/export and different project config.',
    codeExample: `const fs = require('fs');
const content = fs.readFileSync('notes.txt', 'utf8');`
  },
  {
    id: 'node-express-1',
    category: 'Intermediate • APIs',
    problem: 'Your POST /users route receives JSON body but req.body is undefined. What is missing?',
    visual: `Request -> Express route
Body: {"name":"Ana"}

req.body === undefined ❌`,
    options: [
      'helmet middleware',
      'express.json() middleware',
      'cors middleware only',
      'TypeScript types'
    ],
    correctAnswer: 'express.json() middleware',
    hint: 'JSON body parsing must be enabled before routes.',
    explanation: 'Express does not parse JSON bodies by default for all setups; add express.json() so req.body is populated.',
    codeExample: `import express from 'express';

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  res.status(201).json({ name: req.body.name });
});`
  },
  {
    id: 'node-streams-1',
    category: 'Intermediate • Performance',
    problem: 'You need to process a 4GB log file without exhausting memory. Which approach is best?',
    visual: `Large file 4GB
Option A: read entire file -> high RAM ❌
Option B: stream chunks -> low RAM ✅`,
    options: ['fs.readFileSync', 'fs.createReadStream', 'JSON.parse file', 'readFile + split'],
    correctAnswer: 'fs.createReadStream',
    hint: 'Use chunked processing.',
    explanation: 'Streams process data in chunks, avoiding full file buffering and reducing memory usage drastically.',
    codeExample: `import fs from 'node:fs';
import readline from 'node:readline';

const stream = fs.createReadStream('app.log');
const rl = readline.createInterface({ input: stream });

for await (const line of rl) {
  // process each line
}`
  },
  {
    id: 'node-security-1',
    category: 'Advanced • Security',
    problem: 'You store database credentials in source code for convenience. What is the safer production approach?',
    visual: `Bad:
const DB_PASS = 'supersecret';

Better:
process.env.DB_PASS`,
    options: [
      'Keep secrets in source code',
      'Use environment variables and secret manager',
      'Base64 encode password in code',
      'Store secrets in client app'
    ],
    correctAnswer: 'Use environment variables and secret manager',
    hint: 'Secrets should be externalized from code and git.',
    explanation: 'Credentials belong in environment variables/secret managers, not repositories, to reduce leakage risk and rotate safely.',
    codeExample: `import 'dotenv/config';

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) throw new Error('DATABASE_URL is required');`
  }
];
