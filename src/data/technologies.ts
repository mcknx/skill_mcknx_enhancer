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
        description: 'Coming soon - SSR, routing, data fetching, and deployment',
        scenarioCount: 0
    },
    {
        id: 'react-native',
        name: 'React Native',
        icon: '📱',
        description: 'Coming soon - Native components, navigation, and mobile APIs',
        scenarioCount: 0
    },
    {
        id: 'n8n',
        name: 'n8n',
        icon: '🔄',
        description: 'Coming soon - Workflow automation, integrations, and AI agents',
        scenarioCount: 0
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        icon: '🟢',
        description: 'Coming soon - Async patterns, streams, and APIs',
        scenarioCount: 0
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
