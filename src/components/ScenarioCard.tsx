import { useState, useEffect, useCallback } from 'react';
import { Scenario } from '../data/types';

interface ScenarioCardProps {
    scenario: Scenario;
    onComplete: (revealed: boolean) => void;
    onNext: () => void;
    isLast: boolean;
}

const HOTKEYS = ['a', 's', 'd', 'f']; // ASDF for options

export function ScenarioCard({ scenario, onComplete, onNext, isLast }: ScenarioCardProps) {
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

        if (correct) {
            setShowExplanation(true);
            onComplete(hasRevealed);
        }
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
        <div className="scenario-card">
            <span className="scenario-category">{scenario.category}</span>
            <p className="scenario-problem">{scenario.problem}</p>

            <div className="visual-box">
                <pre className="visual-content">{scenario.visual}</pre>
            </div>

            <div className="options-grid">
                {scenario.options.map((option, index) => (
                    <button
                        key={option}
                        className={getOptionClass(option)}
                        onClick={() => handleSelect(option)}
                        disabled={!!selectedAnswer}
                    >
                        <span className="option-hotkey">{getHotkeyLabel(index)}</span>
                        {option}
                    </button>
                ))}
            </div>

            <div className="action-buttons">
                {!selectedAnswer && (
                    <>
                        <button
                            className="btn btn-hint"
                            onClick={() => setShowHint(true)}
                            disabled={showHint}
                        >
                            💡 {showHint ? 'Hint shown' : 'Hint'} <span className="hotkey-badge">H</span>
                        </button>
                        <button className="btn btn-reveal" onClick={handleReveal}>
                            👁️ Reveal <span className="hotkey-badge">R</span>
                        </button>
                    </>
                )}

                {selectedAnswer && !isLast && (
                    <button className="btn btn-next" onClick={handleNext}>
                        Next Challenge <span className="hotkey-badge">↵</span>
                    </button>
                )}
            </div>

            {showHint && !showExplanation && (
                <div className="hint-box">
                    <div className="label">💡 Hint</div>
                    <p>{scenario.hint}</p>
                </div>
            )}

            {showExplanation && (
                <div className="explanation-box">
                    <div className="label">✅ {hasRevealed ? 'Answer' : 'Correct!'}</div>
                    <h4>{scenario.correctAnswer}</h4>
                    <p>{scenario.explanation}</p>
                    <div className="code-block">
                        <div className="code-header">
                            <span className="code-language">JavaScript</span>
                            <button
                                className="code-copy"
                                onClick={() => navigator.clipboard.writeText(scenario.codeExample)}
                            >
                                📋 Copy
                            </button>
                        </div>
                        <div className="code-content">
                            <pre>{scenario.codeExample}</pre>
                        </div>
                    </div>
                </div>
            )}

            {selectedAnswer && !isCorrect && !showExplanation && (
                <div className="hint-box" style={{ marginTop: '1rem' }}>
                    <div className="label">❌ Not quite</div>
                    <p>That's not the best choice. Try again or reveal the answer to learn!</p>
                </div>
            )}

            <div className="keyboard-hints">
                <span>⌨️ <code>A S D F</code> answer • <code>H</code> hint • <code>Enter</code> next</span>
            </div>
        </div>
    );
}
