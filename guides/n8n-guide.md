# n8n — Mastery Learning Guide

> **Goal:** Go from zero to advanced n8n workflow automation specialist.
> **Approach:** Follow n8n's official learning path + courses, then test each concept interactively in this repo's Skill Enhancer system.

---

## Sources

| Source | URL | Use |
|--------|-----|-----|
| n8n Learning Path | https://docs.n8n.io/learning-path/ | Official structured learning guide |
| n8n Docs | https://docs.n8n.io/ | Complete reference documentation |
| n8n Level 1 Course | https://docs.n8n.io/courses/level-one/ | Beginner text course (7 chapters + quiz) |
| n8n Level 2 Course | https://docs.n8n.io/courses/level-two/ | Intermediate text course (6 chapters) |
| n8n Video Courses | https://www.youtube.com/playlist?list=PLlET0GsrLUL59YbxstZE71WszP3pVnZfI | Beginner + Advanced video playlists |
| n8n Community | https://community.n8n.io/ | Forum for help, sharing workflows, badges |
| n8n Templates | https://n8n.io/workflows/ | Pre-built workflow templates |
| roadmap.sh | https://roadmap.sh/ | General developer roadmaps (for JS/API prerequisites) |
| javascript.info | https://javascript.info/ | JS deep-dive for Code node and expressions |
| freeCodeCamp | https://www.freecodecamp.org/ | Free tutorials for API, JS, and web fundamentals |

---

## Learning Path Overview

```
Phase 1: Prerequisites & Setup (Week 1)
Phase 2: Editor UI & First Workflows (Week 2)
Phase 3: Data Handling & Flow Logic (Week 3-4)
Phase 4: Integrations & APIs (Week 5-6)
Phase 5: Advanced Workflows & AI (Week 7-8)
Phase 6: Self-Hosting, Security & Production (Week 9-10)
```

---

## Phase 1: Prerequisites & Setup (Week 1)

### 1.1 Foundational Knowledge
- [ ] Basic understanding of APIs (REST, webhooks, HTTP methods)
- [ ] JSON data format (objects, arrays, key-value pairs)
- [ ] Basic JavaScript (variables, functions, conditionals, loops)
- [ ] What is workflow automation (concept)
- [ ] n8n vs alternatives (Zapier, Make, Power Automate)

**javascript.info:** https://javascript.info/ (Chapters 1-5)
**freeCodeCamp:** https://www.freecodecamp.org/news/what-is-an-api-in-english-please/

### 1.2 Setting Up n8n
- [ ] Choose your n8n: Cloud vs Self-hosted
- [ ] Sign up for n8n Cloud (free trial)
- [ ] OR install with Docker: `docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n`
- [ ] OR install with npm: `npx n8n`
- [ ] Access the editor UI at localhost:5678
- [ ] Create your account and explore the interface

**n8n Docs:** https://docs.n8n.io/choose-n8n/

### 1.3 Understanding the Editor UI
- [ ] Canvas — the workflow building area
- [ ] Node panel — browsing and searching nodes
- [ ] Execution panel — viewing run results
- [ ] Sidebar — workflows, credentials, variables
- [ ] Keyboard shortcuts for efficiency

**Level 1 - Chapter 1:** https://docs.n8n.io/courses/level-one/chapter-1/

#### 🧪 Interactive Test Ideas for Phase 1
```
Scenario: "You want to start using n8n quickly without setting up any infrastructure."
Options: [Docker install, npm install, n8n Cloud, Build from source]
Answer: n8n Cloud

Scenario: "An API returns data in this format: {'name': 'John', 'age': 30}. What format is this?"
Options: [XML, CSV, JSON, YAML]
Answer: JSON

Scenario: "You want a workflow to start when an external service sends data to n8n."
Options: [Manual Trigger, Schedule Trigger, Webhook Trigger, Cron job]
Answer: Webhook Trigger

Scenario: "n8n's automation approach is primarily..."
Options: [Code-first, Low-code / visual, No-code only, CLI-based]
Answer: Low-code / visual
```

---

## Phase 2: Building Workflows (Week 2)

### 2.1 Your First Workflow
- [ ] Manual Trigger node — start workflows manually
- [ ] HTTP Request node — fetch data from APIs
- [ ] Connecting nodes with wires
- [ ] Executing workflows and viewing output
- [ ] Understanding JSON data flowing between nodes
- [ ] Pinning data for testing

**Level 1 - Chapter 2:** https://docs.n8n.io/courses/level-one/chapter-2/

### 2.2 Workflow Components
- [ ] Nodes — actions, triggers, and logic
- [ ] Connections — data flow between nodes
- [ ] Sticky Notes — documentation within workflows
- [ ] Workflow settings (timezone, error handling)
- [ ] Tags for organization
- [ ] Execution modes: Manual vs Production

### 2.3 Trigger Nodes
- [ ] Manual Trigger — for testing
- [ ] Schedule Trigger — cron-based scheduling
- [ ] Webhook Trigger — receive external HTTP requests
- [ ] App-specific triggers (Gmail, Slack, GitHub, etc.)
- [ ] Error Trigger — handle workflow failures
- [ ] Workflow Trigger — triggered by other workflows

### 2.4 Credentials Management
- [ ] Creating and storing credentials
- [ ] OAuth2 authentication flow
- [ ] API key authentication
- [ ] Credential sharing between workflows

**n8n Docs:** https://docs.n8n.io/workflows/components/
**n8n Docs:** https://docs.n8n.io/credentials/

#### 🧪 Interactive Test Ideas for Phase 2
```
Scenario: "You want a workflow that runs every day at 9 AM."
Options: [Manual Trigger, Webhook Trigger, Schedule Trigger, App Trigger]
Answer: Schedule Trigger

Scenario: "You need to fetch data from a REST API in your workflow."
Options: [Code node, HTTP Request node, Function node, Set node]
Answer: HTTP Request node

Scenario: "How does data flow between nodes in n8n?"
Options: [As strings, As JSON objects/arrays, As binary files only, As SQL queries]
Answer: As JSON objects/arrays

Scenario: "A third-party service needs to notify n8n when an event occurs."
Options: [Schedule Trigger with polling, Webhook Trigger, Manual check, Email trigger]
Answer: Webhook Trigger
```

---

## Phase 3: Data Handling & Flow Logic (Week 3-4)

### 3.1 Understanding n8n Data Structure
- [ ] Items — the basic data unit in n8n
- [ ] Each node receives and outputs an array of items
- [ ] JSON data vs Binary data
- [ ] Accessing item data with expressions
- [ ] Data mapping in node parameters

**Level 2 - Chapter 1:** https://docs.n8n.io/courses/level-two/chapter-1/

### 3.2 Data Transformation
- [ ] Edit Fields (Set) node — reshape data
- [ ] Rename Keys node — rename properties
- [ ] Sort node — order items
- [ ] Remove Duplicates node
- [ ] Aggregate node — combine items
- [ ] Split Out node — split arrays into items
- [ ] Summarize node — calculate totals, averages
- [ ] Date & Time node — format and manipulate dates

### 3.3 Expressions & Code
- [ ] Expression syntax: `{{ $json.fieldName }}`
- [ ] Accessing previous node data: `{{ $('NodeName').item.json }}`
- [ ] Built-in methods ($now, $today, $if, etc.)
- [ ] Data transformation functions (strings, arrays, objects)
- [ ] JMESPath for querying JSON
- [ ] Code node (JavaScript or Python)
- [ ] AI-assisted code generation

**n8n Docs:** https://docs.n8n.io/code/expressions/
**n8n Docs:** https://docs.n8n.io/code/code-node/

### 3.4 Flow Logic
- [ ] IF node — conditional branching
- [ ] Switch node — multiple branches
- [ ] Merge node — combine branches (Append, Keep Key, Merge By Fields)
- [ ] Loop Over Items — batch processing
- [ ] Wait node — pause execution
- [ ] Sub-workflows — modular workflow design
- [ ] Error handling (Error Trigger, Stop And Error)
- [ ] Execution order in multi-branch workflows

**Level 2 - Chapters 2-4:** https://docs.n8n.io/courses/level-two/chapter-2/

#### 🧪 Interactive Test Ideas for Phase 3
```
Scenario: "You need to access the 'email' field from the current item's data."
Options: [$json.email, $item.email, $data.email, $node.email]
Answer: $json.email

Scenario: "A workflow receives 100 orders. You only want orders over $50."
Options: [IF node, Switch node, Filter node, Code node]
Answer: IF node (or Filter node)

Scenario: "You have two branches and need to combine their results into one output."
Options: [IF node, Merge node, Set node, Split Out node]
Answer: Merge node

Scenario: "You need to loop through items and process them in batches of 10."
Options: [Loop Over Items with batch size 10, IF node, Split Out, Manual looping]
Answer: Loop Over Items with batch size 10

Scenario: "An expression {{ $('HTTP Request').first().json.data }} does what?"
Options: [Gets all items from HTTP Request, Gets the first item's data field, Gets the last item, Triggers HTTP Request]
Answer: Gets the first item's data field

Scenario: "A workflow fails. You want to send a Slack notification about the failure."
Options: [Try/catch in Code node, Error Trigger workflow, IF node, Retry logic]
Answer: Error Trigger workflow
```

---

## Phase 4: Integrations & APIs (Week 5-6)

### 4.1 Popular App Integrations
- [ ] Google Sheets — read/write spreadsheet data
- [ ] Slack — send messages and notifications
- [ ] Gmail — send emails, read inbox
- [ ] GitHub — manage issues, PRs, repos
- [ ] Airtable / Notion — database operations
- [ ] Telegram — bot messaging
- [ ] Discord — server automation
- [ ] HubSpot / Salesforce — CRM operations

### 4.2 HTTP Request Node (Advanced)
- [ ] GET, POST, PUT, DELETE methods
- [ ] Headers and authentication
- [ ] Query parameters and body payload
- [ ] Pagination handling
- [ ] Binary data (file downloads/uploads)
- [ ] Retry on failure
- [ ] Response extraction

### 4.3 Database Integrations
- [ ] Postgres node — SQL queries
- [ ] MySQL node — SQL queries
- [ ] MongoDB node — document operations
- [ ] Redis node — caching and pub/sub
- [ ] Supabase node
- [ ] Executing raw SQL

### 4.4 Building Real-World Automations
- [ ] Lead capture: Form → CRM → Email notification
- [ ] Content pipeline: RSS → Transform → Social media post
- [ ] Customer support: Email → Categorize → Route to team
- [ ] Data sync: App A → Transform → App B (bidirectional)
- [ ] Monitoring: API health check → Alert on failure

**n8n Docs:** https://docs.n8n.io/integrations/
**n8n Templates:** https://n8n.io/workflows/

#### 🧪 Interactive Test Ideas for Phase 4
```
Scenario: "You need to send a POST request with a JSON body to an external API."
Options: [HTTP Request node with POST method, Webhook node, Code node fetch(), Gmail node]
Answer: HTTP Request node with POST method

Scenario: "Your workflow should write data to a Google Sheet."
Options: [HTTP Request to Sheets API, Google Sheets node, Code node, Set node]
Answer: Google Sheets node

Scenario: "An API returns paginated data. You need ALL pages."
Options: [Single HTTP Request, Loop + HTTP Request with pagination, Webhook, Wait for all pages]
Answer: Loop + HTTP Request with pagination

Scenario: "You want to build a Slack bot that responds to messages."
Options: [Schedule Trigger + Slack, Slack Trigger + Respond, Webhook + HTTP, Manual + Slack]
Answer: Slack Trigger + Respond
```

---

## Phase 5: Advanced Workflows & AI (Week 7-8)

### 5.1 Advanced Workflow Patterns
- [ ] Sub-workflows for modular design
- [ ] Workflow templates — reusable patterns
- [ ] Error handling strategies (retry, fallback, notification)
- [ ] Idempotent workflow design
- [ ] Webhook workflow development and testing
- [ ] Streaming responses

### 5.2 AI & LangChain in n8n
- [ ] AI Agent node — conversational AI assistants
- [ ] Chat Trigger — build chatbots
- [ ] LLM models (OpenAI, Anthropic, Ollama, Google Gemini)
- [ ] AI chains — sequential LLM operations
- [ ] RAG (Retrieval Augmented Generation) in n8n
- [ ] Vector stores (Pinecone, Qdrant, Supabase)
- [ ] AI tools — let AI call functions
- [ ] Memory nodes for conversation history
- [ ] Output parsers (structured, list, auto-fix)
- [ ] Building custom AI workflows

**n8n Docs:** https://docs.n8n.io/advanced-ai/
**n8n Docs:** https://docs.n8n.io/advanced-ai/intro-tutorial/

### 5.3 Code & Expressions (Advanced)
- [ ] Code node with external npm modules
- [ ] JMESPath advanced queries
- [ ] Custom variables ($vars)
- [ ] Workflow static data (persistent state)
- [ ] Binary data handling (files, images)
- [ ] Built-in data transformation chaining

### 5.4 n8n API
- [ ] REST API overview
- [ ] API authentication (API keys)
- [ ] Managing workflows via API
- [ ] Triggering executions via API
- [ ] Using the API playground

**n8n Docs:** https://docs.n8n.io/api/

#### 🧪 Interactive Test Ideas for Phase 5
```
Scenario: "You want to build a chatbot that answers questions about your documentation."
Options: [HTTP Request + OpenAI, AI Agent + Vector Store (RAG), Code node + fetch, Webhook + response]
Answer: AI Agent + Vector Store (RAG)

Scenario: "Your LLM needs to 'remember' previous messages in a conversation."
Options: [Store in Set node, Memory node (Buffer/Window), Sticky Note, Global variable]
Answer: Memory node (Buffer/Window)

Scenario: "You want a sub-workflow to be reusable across multiple parent workflows."
Options: [Copy-paste the nodes, Execute Sub-workflow node, Import/Export, Duplicate workflow]
Answer: Execute Sub-workflow node

Scenario: "An AI agent needs to look up a customer's order status in your database."
Options: [Train the LLM on data, Give it a Tool that queries the DB, Paste DB data in prompt, Use RAG]
Answer: Give it a Tool that queries the DB

Scenario: "You need persistent state that survives between workflow executions."
Options: [Set node, $json variable, Workflow Static Data, Code node variable]
Answer: Workflow Static Data
```

---

## Phase 6: Self-Hosting, Security & Production (Week 9-10)

### 6.1 Self-Hosting Options
- [ ] Docker deployment (recommended)
- [ ] Docker Compose setup
- [ ] npm installation
- [ ] Cloud server setups (DigitalOcean, AWS, Azure, GCP)
- [ ] Kubernetes deployment (GKE)
- [ ] Environment variables configuration
- [ ] Database setup (PostgreSQL for production)
- [ ] Reverse proxy with Nginx/Traefik

**n8n Docs:** https://docs.n8n.io/hosting/

### 6.2 Scaling & Performance
- [ ] Queue mode for worker scaling
- [ ] Concurrency control
- [ ] Performance benchmarking
- [ ] Execution data pruning
- [ ] Binary data external storage
- [ ] Task runners configuration

### 6.3 Security & Access Control
- [ ] User management (roles and permissions)
- [ ] Role-based access control (RBAC)
- [ ] Projects for team organization
- [ ] SAML / OIDC single sign-on
- [ ] Two-factor authentication (2FA)
- [ ] Security audit
- [ ] Blocking dangerous nodes
- [ ] API security

### 6.4 Source Control & Environments
- [ ] Git integration for workflow versioning
- [ ] Branch patterns (dev, staging, production)
- [ ] Environment separation
- [ ] Pushing and pulling workflows
- [ ] External secrets management
- [ ] Workflow history and rollback

### 6.5 Monitoring & Logging
- [ ] Execution logs and debugging
- [ ] Log streaming
- [ ] Prometheus metrics
- [ ] Error monitoring (Sentry integration)
- [ ] Insights dashboard

**n8n Docs:** https://docs.n8n.io/source-control-environments/
**n8n Docs:** https://docs.n8n.io/hosting/scaling/overview/

#### 🧪 Interactive Test Ideas for Phase 6
```
Scenario: "Your n8n instance needs to handle thousands of concurrent workflow executions."
Options: [Single instance, Queue mode with workers, Increase RAM, Multiple instances without coordination]
Answer: Queue mode with workers

Scenario: "You need workflow changes to go through a review process before reaching production."
Options: [Manual copy, Git integration with branch patterns, Email approval, Export/Import]
Answer: Git integration with branch patterns

Scenario: "Team members should only access workflows in their department."
Options: [Separate n8n instances, Projects with RBAC, Share password, No solution]
Answer: Projects with RBAC

Scenario: "Your production n8n should use which database?"
Options: [SQLite (default), PostgreSQL, MongoDB, Redis]
Answer: PostgreSQL
```

---

## Skill Enhancer Scenario Categories

Map these to the interactive testing system in this repo:

| Category | Topics | Scenarios Count |
|----------|--------|----------------|
| Beginner • Setup | Installation, editor UI, first workflow | ~5 |
| Beginner • Triggers | Manual, Schedule, Webhook, App triggers | ~6 |
| Beginner • Nodes | HTTP Request, Set, app integrations | ~7 |
| Intermediate • Data | Expressions, data structure, transformation | ~8 |
| Intermediate • Logic | IF, Switch, Merge, Loop, error handling | ~8 |
| Intermediate • Integrations | APIs, databases, popular apps | ~6 |
| Advanced • AI | AI Agent, RAG, LLM, tools, memory | ~7 |
| Advanced • Code | Code node, expressions, JMESPath | ~5 |
| Advanced • Production | Self-hosting, scaling, security, git | ~6 |
| **Total** | | **~58** |

---

## Recommended Learning Order

1. ✅ Understand JSON and APIs (javascript.info, freeCodeCamp)
2. ✅ n8n Quick Quickstart (https://docs.n8n.io/try-it-out/quickstart/)
3. ✅ Level 1 Course (https://docs.n8n.io/courses/level-one/)
4. ✅ Level 2 Course (https://docs.n8n.io/courses/level-two/)
5. ✅ AI Tutorial (https://docs.n8n.io/advanced-ai/intro-tutorial/)
6. ✅ Build real-world automations after each phase
7. ✅ Test yourself with Skill Enhancer scenarios

## Project Ideas (Build After Each Phase)

| Phase | Project |
|-------|---------|
| Phase 2 | Hacker News → Slack daily digest |
| Phase 3 | Order processing: filter, transform, calculate, notify |
| Phase 4 | Lead pipeline: Form → CRM → Email sequence |
| Phase 5 | AI chatbot that answers questions from your docs (RAG) |
| Phase 6 | Production setup with Docker, Git, and monitoring |
