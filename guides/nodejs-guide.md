# Node.js — Mastery Learning Guide

> **Goal:** Go from zero to production-ready Node.js developer.
> **Approach:** Follow roadmap.sh structure + official docs, then test each concept interactively in this repo's Skill Enhancer system.

---

## Sources

| Source | URL | Use |
|--------|-----|-----|
| roadmap.sh | https://roadmap.sh/nodejs | Full learning path (113 topics) |
| Node.js Docs | https://nodejs.org/en/learn | Official learning section & API reference |
| javascript.info | https://javascript.info/ | Modern JS deep-dive (prerequisite + server concepts) |
| W3Schools Node.js | https://www.w3schools.com/nodejs/ | Node.js basics and quick references |
| freeCodeCamp | https://www.freecodecamp.org/ | Node.js handbook, Express tutorials, projects |
| MDN Web Docs | https://developer.mozilla.org/en-US/docs/Learn_web_development | JavaScript fundamentals reference |
| The Odin Project | https://www.theodinproject.com/paths | Full Stack JS path — Node.js courses (free, project-based) |
| Express.js Docs | https://expressjs.com/ | Express framework official guide |

---

## Learning Path Overview

```
Phase 1: Prerequisites & JS Deep Dive (Week 1-2)
Phase 2: Node.js Core Fundamentals (Week 3-4)
Phase 3: Building APIs with Express (Week 5-6)
Phase 4: Databases & ORMs (Week 7-8)
Phase 5: Authentication, Security & Testing (Week 9-10)
Phase 6: Advanced Patterns & Production (Week 11-12)
```

---

## Phase 1: Prerequisites & JS Deep Dive (Week 1-2)

### 1.1 JavaScript Foundations (Server Context)
- [ ] ES6+ features (destructuring, spread, template literals, optional chaining)
- [ ] Arrow functions and `this` binding
- [ ] Closures and scope
- [ ] Prototypes and classes
- [ ] Symbols and iterators
- [ ] Modules — CommonJS (`require`) vs ESM (`import`)
- [ ] Error types (TypeError, ReferenceError, custom errors)

**javascript.info:** https://javascript.info/ (Parts 1-2)

### 1.2 Asynchronous JavaScript (Critical for Node.js)
- [ ] Callbacks and callback hell
- [ ] Promises — creation, chaining, error handling
- [ ] async/await — syntactic sugar over Promises
- [ ] Promise.all, Promise.allSettled, Promise.race
- [ ] Error handling with try/catch in async code
- [ ] The Event Loop — how it works
- [ ] Microtasks vs Macrotasks

**javascript.info:** https://javascript.info/async

### 1.3 What is Node.js?
- [ ] V8 JavaScript engine
- [ ] Non-blocking I/O model
- [ ] Single-threaded event-driven architecture
- [ ] Node.js vs browser JavaScript
- [ ] When to use Node.js (and when not to)
- [ ] Node.js release schedule (LTS vs Current)

**Node.js Docs:** https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

### 1.4 Development Environment
- [ ] Install Node.js (nvm recommended)
- [ ] npm, yarn, pnpm — package managers
- [ ] package.json and package-lock.json
- [ ] npx — execute packages
- [ ] Node REPL for quick testing
- [ ] VS Code extensions for Node.js
- [ ] Debugging with `--inspect` and VS Code debugger

**roadmap.sh:** https://roadmap.sh/nodejs — "Introduction", "Modules", "npm"

#### 🧪 Interactive Test Ideas for Phase 1
```
Scenario: "Node.js uses multiple threads to handle each incoming request."
Options: [True, False — it uses a single thread with event loop, True — one thread per request, Depends on configuration]
Answer: False — it uses a single thread with event loop

Scenario: "Which module system is native to Node.js (historically)?"
Options: [ESM (import/export), CommonJS (require), AMD, UMD]
Answer: CommonJS (require)

Scenario: "You need to run 3 API calls in parallel and wait for all to complete."
Options: [Sequential await, Promise.all([...]), Callbacks, setTimeout]
Answer: Promise.all([...])

Scenario: "What happens when an unhandled Promise rejection occurs in Node.js?"
Options: [Nothing, Process crashes (Node 15+), Auto-retries, Returns null]
Answer: Process crashes (Node 15+)
```

---

## Phase 2: Node.js Core Fundamentals (Week 3-4)

### 2.1 Module System
- [ ] CommonJS modules (`require`, `module.exports`)
- [ ] ES Modules (`import`, `export`) with `"type": "module"`
- [ ] Built-in modules (fs, path, os, crypto, etc.)
- [ ] Module resolution algorithm
- [ ] Creating and publishing npm packages
- [ ] Package management (dependencies, devDependencies, peer)

### 2.2 File System (fs module)
- [ ] Reading files (readFile, readFileSync, createReadStream)
- [ ] Writing files (writeFile, appendFile)
- [ ] Directory operations (mkdir, readdir, rmdir)
- [ ] File watching (fs.watch, chokidar)
- [ ] File paths (path.join, path.resolve, __dirname, __filename)
- [ ] Sync vs Async vs Stream approaches

### 2.3 Event System
- [ ] EventEmitter class
- [ ] Creating custom events
- [ ] on, once, emit, removeListener
- [ ] Error events (special handling)
- [ ] Event-driven architecture patterns

### 2.4 Streams & Buffers
- [ ] What are Buffers (binary data handling)
- [ ] Readable streams
- [ ] Writable streams
- [ ] Transform streams
- [ ] Piping streams (`.pipe()`)
- [ ] Backpressure handling
- [ ] Practical uses: file processing, HTTP, compression

### 2.5 HTTP Core Module
- [ ] `http.createServer()` — bare-bones server
- [ ] Request and Response objects
- [ ] Routing without frameworks
- [ ] Serving static files
- [ ] Handling POST data and JSON parsing
- [ ] HTTPS with `https` module

### 2.6 Process & Environment
- [ ] `process` global object
- [ ] Environment variables (`process.env`)
- [ ] dotenv for `.env` files
- [ ] Command-line arguments (`process.argv`)
- [ ] Process signals (SIGINT, SIGTERM)
- [ ] Child processes (exec, spawn, fork)
- [ ] Worker threads for CPU-intensive tasks

**roadmap.sh:** https://roadmap.sh/nodejs — "Modules", "File System", "Events", "Streams", "HTTP"
**Node.js Docs:** https://nodejs.org/en/learn

#### 🧪 Interactive Test Ideas for Phase 2
```
Scenario: "You need to read a 2GB log file without loading it entirely into memory."
Options: [fs.readFileSync, fs.readFile with callback, fs.createReadStream, JSON.parse]
Answer: fs.createReadStream

Scenario: "You want to create a custom event system for your module."
Options: [EventEmitter, setTimeout, Promise, callback]
Answer: EventEmitter

Scenario: "A stream is producing data faster than the consumer can handle."
Options: [Data loss, Backpressure — stream pauses automatically, Memory overflow, Error thrown]
Answer: Backpressure — stream pauses automatically

Scenario: "You need to store API keys outside your code."
Options: [Hardcode in source, process.env with dotenv, package.json, Comments in code]
Answer: process.env with dotenv

Scenario: "A CPU-intensive computation blocks the event loop. What's the best solution?"
Options: [Run it on main thread, Use Worker Threads, Use setTimeout, Increase Node memory]
Answer: Use Worker Threads

Scenario: "You need the absolute path to a file in the current directory."
Options: ['./' + filename, path.join(__dirname, filename), process.cwd() always, Just filename]
Answer: path.join(__dirname, filename)
```

---

## Phase 3: Building APIs with Express (Week 5-6)

### 3.1 Express.js Fundamentals
- [ ] Install Express and create a basic server
- [ ] Routing (GET, POST, PUT, PATCH, DELETE)
- [ ] Route parameters and query strings
- [ ] Request body parsing (express.json(), express.urlencoded())
- [ ] Response methods (json, send, status, redirect)
- [ ] Router — modular route organization
- [ ] Static file serving

**Express Docs:** https://expressjs.com/en/starter/installing.html

### 3.2 Middleware
- [ ] What is middleware (request → middleware → response)
- [ ] Built-in middleware (express.json, express.static)
- [ ] Custom middleware (logging, auth, validation)
- [ ] Third-party middleware (cors, helmet, morgan, compression)
- [ ] Error-handling middleware (4 arguments)
- [ ] Middleware execution order matters

### 3.3 REST API Design
- [ ] RESTful conventions (resources, HTTP verbs, status codes)
- [ ] API versioning (/api/v1/)
- [ ] Request validation (Joi, Zod, express-validator)
- [ ] Error response format (consistent error objects)
- [ ] Pagination, sorting, filtering
- [ ] HATEOAS concepts

### 3.4 Alternative Frameworks
- [ ] Fastify — high-performance alternative
- [ ] NestJS — opinionated, Angular-inspired
- [ ] Koa — lightweight (by Express team)
- [ ] Hono — ultrafast, edge-ready
- [ ] When to choose which

**roadmap.sh:** https://roadmap.sh/nodejs — "Express", "Fastify", "NestJS"
**The Odin Project:** https://www.theodinproject.com/paths — Full Stack JS → NodeJS course

#### 🧪 Interactive Test Ideas for Phase 3
```
Scenario: "You need to parse JSON request bodies in Express."
Options: [body-parser (deprecated approach), express.json() middleware, JSON.parse manually, req.body works automatically]
Answer: express.json() middleware

Scenario: "A middleware runs for every request to log method and URL."
Options: [Route handler, app.use() with custom middleware, error middleware, Static middleware]
Answer: app.use() with custom middleware

Scenario: "You need to handle errors in Express with a centralized error handler."
Options: [try/catch in every route, Middleware with (err, req, res, next), process.on('error'), console.error]
Answer: Middleware with (err, req, res, next)

Scenario: "REST convention: deleting a user at /api/users/123 should use which HTTP method?"
Options: [GET, POST, PUT, DELETE]
Answer: DELETE

Scenario: "You want to validate that a POST body has required fields before processing."
Options: [Manual if checks, Zod / Joi validation middleware, Try/catch, Regex validation]
Answer: Zod / Joi validation middleware

Scenario: "Express routes execute in the order they're defined. A catch-all route should go..."
Options: [First, Last, Anywhere, In a separate file]
Answer: Last
```

---

## Phase 4: Databases & ORMs (Week 7-8)

### 4.1 SQL Databases
- [ ] PostgreSQL — setup and basic SQL
- [ ] MySQL/MariaDB basics
- [ ] SQL fundamentals (SELECT, INSERT, UPDATE, DELETE, JOIN)
- [ ] Database design (normalization, relationships, indexes)
- [ ] Transactions and ACID properties
- [ ] Connection pooling

### 4.2 NoSQL Databases
- [ ] MongoDB — document-based database
- [ ] Mongoose ODM — schema, models, queries
- [ ] Redis — in-memory key-value store (caching, sessions, pub/sub)
- [ ] When to use SQL vs NoSQL

### 4.3 ORMs & Query Builders
- [ ] Prisma — type-safe ORM (recommended)
- [ ] Drizzle ORM — lightweight, SQL-like
- [ ] Sequelize — traditional ORM
- [ ] Knex.js — SQL query builder
- [ ] TypeORM — decorator-based ORM
- [ ] Database migrations and seeding

### 4.4 Data Patterns
- [ ] Repository pattern
- [ ] Data Access Layer (DAL)
- [ ] Soft deletes
- [ ] Pagination strategies (offset vs cursor)
- [ ] Full-text search
- [ ] Caching strategies (Redis, in-memory)

**roadmap.sh:** https://roadmap.sh/nodejs — "Databases", "ORMs", "Prisma", "MongoDB"
**freeCodeCamp:** https://www.freecodecamp.org/ — Back End and APIs certification

#### 🧪 Interactive Test Ideas for Phase 4
```
Scenario: "You need type-safe database queries that auto-generate TypeScript types from your schema."
Options: [Raw SQL, Mongoose, Prisma, Knex.js]
Answer: Prisma

Scenario: "Your app needs fast, temporary data storage for sessions and caching."
Options: [PostgreSQL, MongoDB, Redis, File system]
Answer: Redis

Scenario: "Data has complex relationships (users → orders → products). Which database type fits best?"
Options: [NoSQL (MongoDB), SQL (PostgreSQL), Key-value (Redis), Graph database]
Answer: SQL (PostgreSQL)

Scenario: "You need to update a user's balance and create a transaction record atomically."
Options: [Two separate queries, Database transaction, Try/catch, setTimeout between queries]
Answer: Database transaction

Scenario: "Your API returns 10,000 items. What's the best approach?"
Options: [Return all items, Pagination (limit + offset or cursor), Compression, Streaming]
Answer: Pagination (limit + offset or cursor)
```

---

## Phase 5: Authentication, Security & Testing (Week 9-10)

### 5.1 Authentication
- [ ] Session-based authentication (express-session)
- [ ] JWT (JSON Web Tokens) — access + refresh tokens
- [ ] OAuth 2.0 flow (social login)
- [ ] Passport.js — authentication middleware
- [ ] bcrypt — password hashing
- [ ] Multi-factor authentication (MFA/2FA)
- [ ] API key authentication

### 5.2 Authorization
- [ ] Role-based access control (RBAC)
- [ ] Permission middleware
- [ ] Resource ownership validation
- [ ] API rate limiting (express-rate-limit)

### 5.3 Security Best Practices
- [ ] OWASP Top 10 awareness
- [ ] Input validation and sanitization
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Helmet.js — security headers
- [ ] CORS configuration
- [ ] HTTPS enforcement
- [ ] Dependency vulnerability scanning (npm audit)
- [ ] Environment variable management (secrets)

### 5.4 Testing
- [ ] Unit testing with Jest or Vitest
- [ ] Integration testing with Supertest
- [ ] Mocking (jest.mock, sinon)
- [ ] Test-driven development (TDD) approach
- [ ] Code coverage (istanbul/nyc)
- [ ] End-to-end API testing
- [ ] Load testing (artillery, k6)

**roadmap.sh:** https://roadmap.sh/nodejs — "Authentication", "Security", "Testing"

#### 🧪 Interactive Test Ideas for Phase 5
```
Scenario: "You need stateless authentication for a REST API consumed by a mobile app."
Options: [Session cookies, JWT tokens, Basic auth, API key only]
Answer: JWT tokens

Scenario: "A user's password should be stored in the database as..."
Options: [Plain text, Base64 encoded, Bcrypt hash, MD5 hash]
Answer: Bcrypt hash

Scenario: "An API endpoint receives user input and directly concatenates it into a SQL query."
Options: [Good practice, SQL injection vulnerability, XSS vulnerability, No issue]
Answer: SQL injection vulnerability

Scenario: "You want to test an Express route handler returns correct JSON."
Options: [Manual browser test, Supertest + Jest, console.log, Postman only]
Answer: Supertest + Jest

Scenario: "A client is making 1000 requests per second to your API."
Options: [Handle them all, Rate limiting middleware, Block the IP forever, Scale horizontally only]
Answer: Rate limiting middleware

Scenario: "Helmet.js helps protect your app by..."
Options: [Encrypting data, Setting secure HTTP headers, Blocking all requests, Adding authentication]
Answer: Setting secure HTTP headers
```

---

## Phase 6: Advanced Patterns & Production (Week 11-12)

### 6.1 Application Architecture
- [ ] MVC pattern (Model-View-Controller)
- [ ] Service layer pattern
- [ ] Dependency injection
- [ ] Clean architecture principles
- [ ] Monorepo vs multi-repo
- [ ] Microservices vs monolith

### 6.2 Real-Time Communication
- [ ] WebSockets (ws library, Socket.io)
- [ ] Server-Sent Events (SSE)
- [ ] Long polling
- [ ] Message queues (RabbitMQ, Bull/BullMQ with Redis)
- [ ] Pub/Sub patterns

### 6.3 Performance & Scaling
- [ ] Clustering (cluster module)
- [ ] PM2 — process manager
- [ ] Load balancing (Nginx, HAProxy)
- [ ] Caching strategies (Redis, CDN, in-memory)
- [ ] Database connection pooling
- [ ] Horizontal vs vertical scaling
- [ ] Memory leak detection and profiling
- [ ] Benchmarking (autocannon, wrk)

### 6.4 DevOps & Deployment
- [ ] Docker — containerizing Node.js apps
- [ ] Docker Compose for multi-service apps
- [ ] CI/CD pipelines (GitHub Actions)
- [ ] Environment configuration (staging, production)
- [ ] Logging (Winston, Pino)
- [ ] Monitoring (Prometheus, Grafana, Datadog)
- [ ] Health checks and graceful shutdown
- [ ] Cloud deployment (Vercel, Railway, AWS, DigitalOcean)

### 6.5 TypeScript with Node.js
- [ ] TypeScript setup in Node.js projects
- [ ] Type definitions (@types packages)
- [ ] Configuring tsconfig.json for Node.js
- [ ] tsx for running TypeScript directly
- [ ] Strict typing for API contracts

### 6.6 Advanced Topics
- [ ] GraphQL (Apollo Server, type-graphql)
- [ ] gRPC for service-to-service communication
- [ ] Serverless functions (AWS Lambda, Vercel)
- [ ] Background jobs (BullMQ, Agenda)
- [ ] File upload handling (Multer)
- [ ] Email sending (Nodemailer, Resend)
- [ ] PDF generation
- [ ] Web scraping (Cheerio, Puppeteer)

**roadmap.sh:** https://roadmap.sh/nodejs — "Scaling", "Deployment", "WebSockets", "GraphQL"

#### 🧪 Interactive Test Ideas for Phase 6
```
Scenario: "Your Node.js app needs to use all CPU cores on the server."
Options: [Single process is fine, Cluster module or PM2 cluster mode, Worker threads, Increase RAM]
Answer: Cluster module or PM2 cluster mode

Scenario: "You need real-time bidirectional communication between client and server."
Options: [REST API polling, WebSockets, HTTP long polling, GraphQL subscriptions]
Answer: WebSockets

Scenario: "You want structured, production-grade logging with JSON output."
Options: [console.log, Winston or Pino, fs.appendFile, alert()]
Answer: Winston or Pino

Scenario: "Your API server should shut down gracefully when receiving SIGTERM."
Options: [process.exit(0) immediately, Close server, finish requests, then exit, Ignore the signal, Restart automatically]
Answer: Close server, finish requests, then exit

Scenario: "Where should you handle background email sending to avoid blocking API responses?"
Options: [In the route handler, BullMQ job queue, setTimeout, Separate process with no coordination]
Answer: BullMQ job queue

Scenario: "You need a type-safe API where client and server share type definitions."
Options: [Document types in README, TypeScript with shared types package, GraphQL code generation, Manual validation]
Answer: TypeScript with shared types package
```

---

## Skill Enhancer Scenario Categories

Map these to the interactive testing system in this repo:

| Category | Topics | Scenarios Count |
|----------|--------|----------------|
| Beginner • JS Deep Dive | Event loop, async/await, Promises, modules | ~7 |
| Beginner • Core Node | fs, path, events, streams, buffers, HTTP | ~8 |
| Beginner • Environment | npm, package.json, env vars, debugging | ~5 |
| Intermediate • Express | Routing, middleware, REST design, validation | ~8 |
| Intermediate • Databases | SQL, MongoDB, Prisma, Redis, migrations | ~7 |
| Intermediate • Auth & Security | JWT, bcrypt, OWASP, helmet, rate limiting | ~7 |
| Intermediate • Testing | Jest, Supertest, mocking, TDD | ~5 |
| Advanced • Architecture | MVC, services, DI, microservices | ~5 |
| Advanced • Performance | Clustering, PM2, caching, profiling | ~5 |
| Advanced • DevOps | Docker, CI/CD, logging, monitoring, deployment | ~5 |
| **Total** | | **~62** |

---

## Recommended Learning Order

1. ✅ javascript.info Parts 1-2 (if JS needs deepening)
2. ✅ Node.js official Learn section (https://nodejs.org/en/learn)
3. ✅ The Odin Project — Full Stack JS → NodeJS course
4. ✅ roadmap.sh/nodejs — follow topic by topic
5. ✅ freeCodeCamp — Back End and APIs certification
6. ✅ Build a project after each phase
7. ✅ Test yourself with Skill Enhancer scenarios

## Project Ideas (Build After Each Phase)

| Phase | Project |
|-------|---------|
| Phase 2 | CLI tool that processes files (CSV parser, log analyzer) |
| Phase 3 | RESTful API for a blog (CRUD, validation, error handling) |
| Phase 4 | Task manager with PostgreSQL + Prisma + Redis caching |
| Phase 5 | Auth system with JWT, refresh tokens, roles, and full test suite |
| Phase 6 | Real-time chat app with WebSockets, Docker, CI/CD deployment |
