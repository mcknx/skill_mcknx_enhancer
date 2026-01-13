interface CompletionScreenProps {
    total: number;
    completed: number;
    revealed: number;
    onRestart: () => void;
}

export function CompletionScreen({ total, completed, revealed, onRestart }: CompletionScreenProps) {
    const mastered = completed - revealed;
    const masteryRate = Math.round((mastered / total) * 100);

    return (
        <div className="scenario-card completion-screen">
            <div className="completion-icon">🎉</div>
            <h2>You've completed all scenarios!</h2>
            <p>Great job learning when to use React Hooks in different situations.</p>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-value">{completed}</div>
                    <div className="stat-label">Completed</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">{mastered}</div>
                    <div className="stat-label">Mastered</div>
                </div>
                <div className="stat-card">
                    <div className="stat-value">{masteryRate}%</div>
                    <div className="stat-label">Mastery Rate</div>
                </div>
            </div>

            <button className="btn btn-restart" onClick={onRestart}>
                🔄 Start Over
            </button>
        </div>
    );
}
