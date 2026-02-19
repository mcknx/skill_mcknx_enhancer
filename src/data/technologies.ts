export interface Technology {
    id: string;
    name: string;
    icon: string;
    description: string;
    scenarioCount: number;
}

// Registry of available technologies
export const technologies: Technology[] = [
    {
        id: 'react-hooks',
        name: 'React Hooks',
        icon: '⚛️',
        description: 'Master when to use useState, useEffect, and more',
        scenarioCount: 35
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        icon: '▲',
        description: 'App Router, Server Components, caching, and deployment',
        scenarioCount: 25
    },
    {
        id: 'react-native',
        name: 'React Native',
        icon: '📱',
        description: 'Mobile UI, navigation, state, and native capabilities',
        scenarioCount: 5
    },
    {
        id: 'n8n',
        name: 'n8n',
        icon: '🔄',
        description: 'Workflow automation, integrations, expressions, and AI',
        scenarioCount: 5
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        icon: '🟢',
        description: 'Async patterns, APIs, middleware, and runtime internals',
        scenarioCount: 5
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        icon: '📘',
        description: 'Coming soon - Types, generics, and advanced patterns',
        scenarioCount: 0
    },
    {
        id: 'css',
        name: 'CSS & Layouts',
        icon: '🎨',
        description: 'Coming soon - Flexbox, Grid, and responsive design',
        scenarioCount: 0
    },
    {
        id: 'git',
        name: 'Git',
        icon: '📦',
        description: 'Coming soon - Branching, merging, and collaboration',
        scenarioCount: 0
    },
    {
        id: 'sql',
        name: 'SQL',
        icon: '🗄️',
        description: 'Coming soon - Queries, joins, and optimization',
        scenarioCount: 0
    }
];
