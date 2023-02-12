export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      break;
  }
};

export type Quote = {
  quote: string;
  author: string;
};

export type DefaultTimePreset = 15 | 30 | 60 | 120;
export type DefaultWordsPreset = 10 | 25 | 50 | 100;

export type WordTestConfig = {
  wordsCount: DefaultWordsPreset;
  timeInSeconds: DefaultTimePreset;
  language: Language;
  testType: TestType;
};

export type State = {
  config: WordTestConfig;
  customConfig: {
    wordsCount?: number;
    timeInSeconds?: number;
    customText?: string;
    wordslength?: {
      from: number;
      to: number;
    };
    language: Language;
  };
};

export enum TestType {
  WORDS = 'words',
  TIME = 'time',
  QUOTES = 'quotes',
  CUSTOM = 'custom',
  ZEN = 'zen',
  ENDLESS = 'endless',
}
export enum ActionType {
  SET_WORDS = 'SET_WORDS',
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_TEST_TYPE = 'SET_TEST_TYPE',
  SET_CONFIG = 'SET_CONFIG',
  SET_CUSTOM_SETTINGS = 'SET_CUSTOM_SETTINGS',
}

export enum Language {
  ENGLISH = 'english',
  RUSSIAN = 'russian',
  GERMAN = 'german',
  QUOTES = 'quotes',
}
export type Action =
  | {
      type: ActionType.SET_TEST_TYPE;
      payload: TestType;
    }
  | {
      type: ActionType.SET_CONFIG;
      payload: {
        wordsCount?: number;
        timeInSeconds?: number;
      };
    }
  | {
      type: ActionType.SET_CUSTOM_SETTINGS;
      payload: {
        wordsCount?: number;
        timeInSeconds?: number;
        customText?: string;
        wordslength?: {
          from: number;
          to: number;
        };
        language: Language;
      };
    };
