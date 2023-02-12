import { useState } from 'react';

import { WordTestConfig } from '@/context/reducer';

type Word = {
  word: string;
  typedWord: string;
  status: 'none' | 'correct' | 'incorrect' | 'skipped' | 'current';
};

type TypeStat = {
  wordIndex: number;
  letterIndex: number;
  second: number;
  wpm: number;
  accuracy: number;
};

export const useWordTest = ({
  language,
  testType,
  timeInSeconds,
  wordsCount,
}: WordTestConfig) => {
  const [words, setWords] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [isTestStarted, setIsTestStarted] = useState<boolean>(false);
  const [isTestFinished, setIsTestFinished] = useState<boolean>(false);
  const [accuracy, setAccuracy] = useState<number>(100);
  const [wpm, setWpm] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(timeInSeconds);
  const [typeStats, setTypeStats] = useState<TypeStat[]>([]);
};
