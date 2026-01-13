// Types for the Skill Enhancer learning platform

export interface Scenario {
    id: string;
    category: string;
    problem: string;
    visual: string;           // ASCII diagram or text illustration
    problemCode?: string;     // Code snippet showing the problem
    options: string[];
    correctAnswer: string;
    hint: string;
    explanation: string;
    codeExample: string;
}

export interface Technology {
    id: string;
    name: string;
    icon: string;
    description: string;
    scenarios: Scenario[];
}

export interface UserProgress {
    scenarioId: string;
    status: 'mastered' | 'revealed' | 'incorrect' | 'unattempted';
    attempts: number;
    lastAttempted: number;
}

export interface AppState {
    currentScenarioIndex: number;
    showHint: boolean;
    showExplanation: boolean;
    selectedAnswer: string | null;
    isCorrect: boolean | null;
    progress: Record<string, UserProgress>;
    completed: number;
    revealed: number;
}
