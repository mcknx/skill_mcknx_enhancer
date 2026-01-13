---
description: How to add new technology topics and scenarios to Skill Enhancer
---

# Adding New Concepts to Skill Enhancer

## Overview
Skill Enhancer is a gamified learning platform that teaches "when to use" specific concepts through scenario-based challenges. This guide explains how to add new technologies (like TypeScript, Node.js, CSS, etc.).

---

## Step 1: Create Scenario Data File

Create a new file in `src/data/[technology-name].ts`:

```typescript
import { Scenario } from './types';

export const [technologyName]Scenarios: Scenario[] = [
  {
    id: 'unique-id-1',
    category: 'Beginner • Topic',  // Format: "Level • Topic"
    problem: 'Describe the problem the developer is facing...',
    visual: `ASCII diagram showing the concept visually`,
    problemCode: `// Optional: Show the broken code
function example() {
  // ❌ This is wrong because...
}`,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option B',
    hint: 'A helpful hint without giving away the answer',
    explanation: 'Why this is the correct answer...',
    codeExample: `// Working solution code
const correct = () => { ... }`
  },
  // Add more scenarios...
];
```

---

## Step 2: Register the Technology

Update `src/data/technologies.ts`:

```typescript
export const technologies: Technology[] = [
  // ... existing technologies
  {
    id: 'your-tech-id',
    name: 'Technology Name',
    icon: '🔧',  // Use an emoji
    description: 'Short description of what will be learned',
    scenarioCount: 20  // Number of scenarios
  }
];
```

---

## Step 3: Add to Progress Hook

Update `src/hooks/useProgress.ts` in the `getScenariosForTech` function:

```typescript
import { yourTechScenarios } from '../data/your-tech';

function getScenariosForTech(techId: string): Scenario[] {
  switch (techId) {
    case 'react-hooks':
      return reactHooksScenarios;
    case 'your-tech-id':
      return yourTechScenarios;  // Add this
    default:
      return [];
  }
}
```

---

## Scenario Guidelines

### Difficulty Levels
- **Beginner**: Basic concepts, single-hook problems
- **Intermediate**: Real-world bugs, multi-step solutions
- **Advanced**: Interview-level problems, edge cases

### Required Fields
| Field | Description |
|-------|-------------|
| `id` | Unique identifier |
| `category` | "Level • Topic" format |
| `problem` | Real-world scenario description (keep distinct from explanation) |
| `visual` | ASCII diagram (will be displayed side-by-side with code) |
| `problemCode` | **MANDATORY**: Show broken/context code. |
| `options` | Exactly 4 choices (A, S, D, F) |
| `correctAnswer` | Must match one option exactly, simple name (e.g. "useMemo") |
| `hint` | Helpful without giving away answer |
| `explanation` | Why this is correct (keep short!) |
| `codeExample` | Working solution (hidden by default in feedback) |

### Design Mandates (CRITICAL)

#### 1. Problem Code is Mandatory
Every scenario MUST have a `problemCode` field. 
- **Why**: Users need to see the "broken" code or context to understand the problem.
- **Content**: Show the bug (e.g. infinite loop, stale closure) or the inefficient implementation.
- **Comments**: Use `// ❌` to highlight the specific issue.

#### 2. Compact & Comfortable Layout
The UI is designed for focus and reading comfort.
- **Side-by-Side**: Visual ASCII diagrams and `problemCode` are displayed in a 2-column grid.
- **Height**: Both boxes have a max-height of ~280px.
- **Text Width**: Problem text is centered with `max-width: 640px` to prevent eye strain.

#### 3. Simplified "Reward" Feedback
When a user answers, the feedback must be minimal and rewarding (dopamine hit).
- **Correct State**: Shows "🎉 Correct!" + Answer Name.
- **Incorrect State**: Shows "💡 The answer is:" + Answer Name.
- **Explanation**: A short, single-sentence "why".
- **Code Example**: Hidden by default (user clicks Copy to see it). DO NOT clutter the immediate feedback with code blocks.

### Visual Diagram Style
```
┌─────────────────┐
│   Component     │
└────────┬────────┘
         │
         ▼
```
Use box-drawing characters: `┌ ┐ └ ┘ │ ─ ▼ ► ◄ ▲`

### problemCode Best Practices
- Show the actual broken code
- Add `// ❌` comments to highlight issues
- Include console output or error messages
- Keep under 25 lines to fit in the 280px scrollable area

---

## Example: Adding TypeScript Scenarios

1. Create `src/data/typescript.ts`:
```typescript
export const typescriptScenarios: Scenario[] = [
  {
    id: 'generics-1',
    category: 'Intermediate • Generics',
    problem: 'I have a function that should work with any type but still preserve type information...',
    // ...
  }
];
```

2. Update `technologies.ts` to change `scenarioCount: 0` to actual count

3. Add import to `useProgress.ts`

---

## Testing Checklist
- [ ] All scenario IDs are unique
- [ ] All `correctAnswer` values match an option exactly
- [ ] Visual diagrams render correctly (check monospace)
- [ ] Problem code displays properly
- [ ] Hotkeys (A/S/D/F) work
- [ ] Progress saves to localStorage
