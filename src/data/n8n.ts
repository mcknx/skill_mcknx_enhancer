import { Scenario } from './types';

export const n8nScenarios: Scenario[] = [
  {
    id: 'n8n-trigger-1',
    category: 'Beginner • Triggers',
    problem: 'You want a workflow to run every weekday at 9:00 AM automatically. Which trigger should you use?',
    visual: `Schedule needs:
Mon-Fri
09:00
no manual click`,
    options: ['Manual Trigger', 'Webhook Trigger', 'Schedule Trigger', 'Error Trigger'],
    correctAnswer: 'Schedule Trigger',
    hint: 'Pick the trigger made for time-based execution.',
    explanation: 'Schedule Trigger is designed for cron/time-based automation and runs without manual intervention.',
    codeExample: `Workflow:
Schedule Trigger (0 9 * * 1-5)
 -> HTTP Request
 -> Slack node`
  },
  {
    id: 'n8n-webhook-1',
    category: 'Beginner • Integrations',
    problem: 'A third-party service should send order events directly into your workflow. Which node starts that flow?',
    visual: `External app
  -> POST /webhook/order-created
  -> n8n workflow`,
    options: ['Schedule Trigger', 'Webhook', 'Set', 'HTTP Request'],
    correctAnswer: 'Webhook',
    hint: 'You need an endpoint that receives inbound HTTP.',
    explanation: 'Webhook nodes expose URLs that external systems can call to trigger workflows with payload data.',
    codeExample: `Webhook (POST)
 -> IF order_total > 100
 -> Send Email`
  },
  {
    id: 'n8n-expression-1',
    category: 'Intermediate • Data Mapping',
    problem: 'You need the email from current input item inside a node field. Which expression is correct?',
    visual: `Input item JSON:
{
  "email": "dev@example.com"
}`,
    options: ['{{$item.email}}', '{{$json.email}}', '{{email}}', '{{$node.email}}'],
    correctAnswer: '{{$json.email}}',
    hint: 'Current item data is under $json.',
    explanation: 'In n8n expressions, $json points to the current item payload, so $json.email accesses that field.',
    codeExample: `To: {{$json.email}}
Subject: Welcome` 
  },
  {
    id: 'n8n-logic-1',
    category: 'Intermediate • Flow Logic',
    problem: 'You need to split orders into high-value and regular paths based on amount > 500.',
    visual: `orders -> [condition amount > 500]
           /                     \
      premium path           standard path`,
    options: ['Merge node', 'IF node', 'Set node', 'Wait node'],
    correctAnswer: 'IF node',
    hint: 'Use branch logic with true/false outputs.',
    explanation: 'IF node evaluates conditions and sends items to true/false branches, ideal for business rule routing.',
    codeExample: `IF: {{$json.amount}} > 500
True  -> VIP Slack alert
False -> Standard processing`
  },
  {
    id: 'n8n-ai-1',
    category: 'Advanced • AI Workflows',
    problem: 'You want a support assistant that answers questions from your docs and uses tools when needed. Which pattern fits best?',
    visual: `User question
 -> AI Agent
 -> (Retriever + Tools)
 -> grounded answer`,
    options: ['Single Set node', 'AI Agent with RAG/tools', 'Only HTTP Request', 'Manual Trigger only'],
    correctAnswer: 'AI Agent with RAG/tools',
    hint: 'You need both retrieval grounding and callable tools.',
    explanation: 'AI Agent workflows with retrieval and tools provide grounded responses and controlled actions for support automation.',
    codeExample: `Chat Trigger
 -> AI Agent
    - Vector Store Retriever
    - HTTP Tool (ticket lookup)
 -> Respond to Webhook`
  }
];
