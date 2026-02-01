import { useState, useEffect, useCallback } from 'react';
import { Scenario } from '../data/types';

interface ScenarioCardProps {
    scenario: Scenario;
    onComplete: (revealed: boolean) => void;
    onNext: () => void;
    isLast: boolean;
    currentIndex: number;
    totalScenarios: number;
}

const HOTKEYS = ['a', 's', 'd', 'f']; // ASDF for options

export function ScenarioCard({
    scenario,
    onComplete,
    onNext,
    isLast,
    currentIndex,
    totalScenarios,
}: ScenarioCardProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showHint, setShowHint] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [hasRevealed, setHasRevealed] = useState(false);

    const handleSelect = useCallback((option: string) => {
        if (selectedAnswer) return; // Already answered

        setSelectedAnswer(option);
        const correct = option === scenario.correctAnswer;
        setIsCorrect(correct);

        // Always show explanation after answering (right or wrong)
        setShowExplanation(true);
        onComplete(hasRevealed || !correct); // Mark as "revealed" if wrong
    }, [selectedAnswer, scenario.correctAnswer, hasRevealed, onComplete]);

    const handleReveal = useCallback(() => {
        setHasRevealed(true);
        setSelectedAnswer(scenario.correctAnswer);
        setIsCorrect(true);
        setShowExplanation(true);
        onComplete(true);
    }, [scenario.correctAnswer, onComplete]);

    const handleNext = useCallback(() => {
        // Reset state for next scenario
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowHint(false);
        setShowExplanation(false);
        setHasRevealed(false);
        onNext();
    }, [onNext]);

    // Keyboard shortcuts
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore if user is typing in an input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return;
            }

            const key = e.key.toLowerCase();

            // Option selection (A, S, D, F)
            const optionIndex = HOTKEYS.indexOf(key);

            if (optionIndex !== -1 && optionIndex < scenario.options.length && !selectedAnswer) {
                e.preventDefault();
                handleSelect(scenario.options[optionIndex]);
                return;
            }

            // H for hint
            if (key === 'h' && !selectedAnswer && !showHint) {
                e.preventDefault();
                setShowHint(true);
                return;
            }

            // R for reveal
            if (key === 'r' && !selectedAnswer) {
                e.preventDefault();
                handleReveal();
                return;
            }

            // Enter or Space for next
            if ((key === 'enter' || key === ' ') && selectedAnswer && !isLast) {
                e.preventDefault();
                handleNext();
                return;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [scenario.options, selectedAnswer, showHint, isLast, handleSelect, handleReveal, handleNext]);

    const getOptionClass = (option: string) => {
        if (!selectedAnswer) return 'option-btn';
        if (option === scenario.correctAnswer) return 'option-btn correct';
        if (option === selectedAnswer && !isCorrect) return 'option-btn incorrect';
        return 'option-btn';
    };

    const getHotkeyLabel = (index: number) => {
        return HOTKEYS[index].toUpperCase();
    };

    return (
        <div className="scenario-container">
            {/* LEFT/TOP CARD: Question & Context */}
            <div className="question-card">
                <div className="card-header">
                    <div className="progress-mini">
                        <span className="progress-text">Progress: {currentIndex + 1}/{totalScenarios}</span>
                        <div className="mini-bar-container">
                            <div
                                className="mini-bar-fill"
                                style={{ width: `${((currentIndex) / totalScenarios) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                    <span className="scenario-category">{scenario.category}</span>
                </div>

                <p className="scenario-problem">{scenario.problem}</p>

                <div className="visual-display">
                    <div className="visual-box">
                        <pre className="visual-content">{scenario.visual}</pre>
                    </div>

                    {scenario.problemCode && (
                        <div className="problem-code-block">
                            <div className="code-header">
                                <span className="code-language">Problem Code</span>
                            </div>
                            <div className="code-content">
                                <pre>{scenario.problemCode}</pre>
                            </div>
                        </div>
                    )}
                </div>

                <div className="keyboard-hints desktop-only">
                    <span>
                        <span className="key-badge">A</span>
                        <span className="key-badge">S</span>
                        <span className="key-badge">D</span>
                        <span className="key-badge">F</span> answer •
                        <span className="key-badge">H</span> hint
                    </span>
                </div>
            </div>

            {/* RIGHT/BOTTOM CARD: Interaction & Feedback */}
            <div className="interaction-card">
                {showExplanation ? (
                    <div className={`explanation-content ${!isCorrect ? 'incorrect-answer' : ''}`}>
                        <div className="answer-header">
                            <h3 className="answer-title">
                                {isCorrect ? (hasRevealed ? 'Answer Revealed' : 'Correct!') : 'Incorrect'}
                            </h3>
                            <span className="answer-value">{scenario.correctAnswer}</span>
                        </div>

                        <p className="explanation-text">{scenario.explanation}</p>

                        <div className="solution-code-wrapper">
                            <div className="code-header small-header">
                                <span className="code-language">Solution</span>
                            </div>
                            <div className="code-content">
                                <pre>{scenario.codeExample}</pre>
                            </div>
                        </div>

                        {!isLast && (
                            <button className="btn btn-next" onClick={handleNext}>
                                Next Challenge
                            </button>
                        )}
                        {isLast && (
                            <div className="completion-message">
                                🎉 All scenarios completed!
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="options-wrapper">
                        <div className="options-vertical">
                            {scenario.options.map((option, index) => (
                                <button
                                    key={option}
                                    className={getOptionClass(option)}
                                    onClick={() => handleSelect(option)}
                                    disabled={!!selectedAnswer}
                                >
                                    <span className="option-hotkey">{getHotkeyLabel(index)}</span>
                                    <span className="option-text">{option}</span>
                                </button>
                            ))}
                        </div>

                        <div className="action-row">
                            <button
                                className="btn btn-hint"
                                onClick={() => setShowHint(true)}
                                disabled={showHint}
                            >
                                {showHint ? 'Hint Active' : 'Get Hint'}
                            </button>
                        </div>

                        {showHint && (
                            <div className="hint-bubble">
                                <p>{scenario.hint}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
