import { Technology } from '../data/technologies';

interface TechSelectorProps {
    technologies: Technology[];
    selectedTech: string | null;
    onSelect: (techId: string) => void;
}

export function TechSelector({ technologies, selectedTech, onSelect }: TechSelectorProps) {
    return (
        <div className="tech-selector">
            <h2 className="tech-selector-title">Choose a Topic</h2>
            <p className="tech-selector-subtitle">Select a technology to practice</p>

            <div className="tech-grid">
                {technologies.map((tech) => (
                    <button
                        key={tech.id}
                        className={`tech-card ${tech.scenarioCount === 0 ? 'disabled' : ''} ${selectedTech === tech.id ? 'selected' : ''}`}
                        onClick={() => tech.scenarioCount > 0 && onSelect(tech.id)}
                        disabled={tech.scenarioCount === 0}
                    >
                        <span className="tech-icon">{tech.icon}</span>
                        <div className="tech-info">
                            <h3 className="tech-name">{tech.name}</h3>
                            <p className="tech-description">{tech.description}</p>
                            {tech.scenarioCount > 0 ? (
                                <span className="tech-count">{tech.scenarioCount} scenarios</span>
                            ) : (
                                <span className="tech-coming-soon">Coming Soon</span>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
