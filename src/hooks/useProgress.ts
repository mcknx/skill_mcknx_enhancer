import { useState, useEffect } from 'react';
import { Scenario } from '../data/types';
import { reactHooksScenarios } from '../data/react-hooks';
import { nextjsScenarios } from '../data/nextjs';
import { reactNativeScenarios } from '../data/react-native';
import { n8nScenarios } from '../data/n8n';
import { nodejsScenarios } from '../data/nodejs';

interface UseProgressReturn {
    scenarios: Scenario[];
    currentIndex: number;
    completed: number;
    revealed: number;
    goToNext: () => void;
    markCompleted: (revealed: boolean) => void;
    resetProgress: () => void;
    isFinished: boolean;
}

const getStorageKey = (techId: string) => `skill-enhancer-${techId}-progress`;

interface StoredProgress {
    currentIndex: number;
    completed: number;
    revealed: number;
    completedIds: string[];
}

function getScenariosForTech(techId: string): Scenario[] {
    switch (techId) {
        case 'react-hooks':
            return reactHooksScenarios;
        case 'nextjs':
            return nextjsScenarios;
        case 'react-native':
            return reactNativeScenarios;
        case 'n8n':
            return n8nScenarios;
        case 'nodejs':
            return nodejsScenarios;
        default:
            return [];
    }
}

export function useProgress(techId: string): UseProgressReturn {
    const scenarios = getScenariosForTech(techId);
    const storageKey = getStorageKey(techId);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [revealed, setRevealed] = useState(0);
    const [completedIds, setCompletedIds] = useState<string[]>([]);

    // Load progress from localStorage on mount or tech change
    useEffect(() => {
        try {
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                const data: StoredProgress = JSON.parse(stored);
                setCurrentIndex(data.currentIndex);
                setCompleted(data.completed);
                setRevealed(data.revealed);
                setCompletedIds(data.completedIds || []);
            } else {
                // Reset for new tech
                setCurrentIndex(0);
                setCompleted(0);
                setRevealed(0);
                setCompletedIds([]);
            }
        } catch (e) {
            console.error('Failed to load progress:', e);
        }
    }, [storageKey]);

    // Save progress to localStorage whenever it changes
    useEffect(() => {
        const data: StoredProgress = {
            currentIndex,
            completed,
            revealed,
            completedIds,
        };
        localStorage.setItem(storageKey, JSON.stringify(data));
    }, [currentIndex, completed, revealed, completedIds, storageKey]);

    const goToNext = () => {
        if (currentIndex < scenarios.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const markCompleted = (wasRevealed: boolean) => {
        const currentId = scenarios[currentIndex]?.id;
        if (currentId && !completedIds.includes(currentId)) {
            setCompletedIds([...completedIds, currentId]);
            setCompleted(completed + 1);
            if (wasRevealed) {
                setRevealed(revealed + 1);
            }
        }
    };

    const resetProgress = () => {
        setCurrentIndex(0);
        setCompleted(0);
        setRevealed(0);
        setCompletedIds([]);
        localStorage.removeItem(storageKey);
    };

    return {
        scenarios,
        currentIndex,
        completed,
        revealed,
        goToNext,
        markCompleted,
        resetProgress,
        isFinished: scenarios.length > 0 && currentIndex >= scenarios.length - 1 && completedIds.length === scenarios.length,
    };
}
