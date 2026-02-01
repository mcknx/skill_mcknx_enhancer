import './styles/index.css';
import { useState } from 'react';
import { useProgress } from './hooks/useProgress';
import { ScenarioCard } from './components/ScenarioCard';
import { CompletionScreen } from './components/CompletionScreen';
import { TechSelector } from './components/TechSelector';
import { technologies } from './data/technologies';

function App() {
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const handleSelectTech = (techId: string) => {
        setSelectedTech(techId);
    };

    const handleBackToTopics = () => {
        setSelectedTech(null);
    };

    // Show tech selector if no tech selected
    if (!selectedTech) {
        return (
            <div className="app-container">
                <header className="header">
                    <h1>Skill Enhancer</h1>
                    <p>Master technical concepts through real-world scenarios</p>
                </header>
                <TechSelector
                    technologies={technologies}
                    selectedTech={selectedTech}
                    onSelect={handleSelectTech}
                />
            </div>
        );
    }

    // Render the scenario practice view
    return <PracticeView techId={selectedTech} onBack={handleBackToTopics} />;
}

interface PracticeViewProps {
    techId: string;
    onBack: () => void;
}

function PracticeView({ techId, onBack }: PracticeViewProps) {
    const {
        scenarios,
        currentIndex,
        completed,
        revealed,
        goToNext,
        markCompleted,
        resetProgress,
        isFinished,
    } = useProgress(techId);

    const currentScenario = scenarios[currentIndex];
    const isLast = currentIndex === scenarios.length - 1;
    const tech = technologies.find(t => t.id === techId);

    return (
        <div className="app-container">
            <header className="header">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Topics
                </button>
                <h1>{tech?.icon} {tech?.name}</h1>
                <p>Learn when to use each concept through real-world scenarios</p>
            </header>

            {isFinished ? (
                <CompletionScreen
                    total={scenarios.length}
                    completed={completed}
                    revealed={revealed}
                    onRestart={resetProgress}
                />
            ) : currentScenario ? (
                <ScenarioCard
                    key={currentScenario.id}
                    scenario={currentScenario}
                    onComplete={markCompleted}
                    onNext={goToNext}
                    isLast={isLast}
                    currentIndex={currentIndex}
                    totalScenarios={scenarios.length}
                />
            ) : null}
        </div>
    );
}

export default App;
