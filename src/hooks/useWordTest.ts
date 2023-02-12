import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Language, TestType, WordTestConfig } from '@/context/reducer';

enum WordStatus {
  NONE = 'none',
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  SKIPPED = 'skipped',
  CURRENT = 'current',
}

type Word = {
  word: string;
  typedWord: string;
  status: WordStatus;
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
  const { data, isLoading, error, refetch } = useQuery<string[]>(
    ['words', language, testType, timeInSeconds, wordsCount],
    async () => {
      let baseUrl = 'http://localhost:3000/api/words';
      switch (language) {
        case Language.ENGLISH:
          baseUrl = `${baseUrl}?language=en`;
          break;
        case Language.RUSSIAN:
          baseUrl = `${baseUrl}?language=ru`;
          break;
        case Language.GERMAN:
          baseUrl = `${baseUrl}?language=de`;
          break;
      }
      baseUrl = `${baseUrl}&count=${wordsCount}`;

      const response = await fetch(baseUrl);
      if (!response.ok) throw new Error('Error while fetching words');
      const data = await response.json();
      return data;
    },
    {
      enabled: testType !== TestType.QUOTES,
    },
  );

  useEffect(() => {
    if (!isLoading && !error && data) {
      const words: Word[] = data.map(
        (word: string) =>
          ({
            word,
            typedWord: '',
            status: WordStatus.NONE,
          } as Word),
      );
      setWords(words);
      setCurrentWord(words[0]);
    }
  }, [data]);
};
