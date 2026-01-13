interface ProgressBarProps {
    current: number;
    total: number;
    completed: number;
}

export function ProgressBar({ current, total, completed }: ProgressBarProps) {
    const percentage = (completed / total) * 100;

    return (
        <div className="progress-container">
            <span className="progress-label">Progress</span>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <span className="progress-count">{current + 1} / {total}</span>
        </div>
    );
}
