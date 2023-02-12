import { createContext, PropsWithChildren } from 'react';
import { useImmerReducer } from 'use-immer';

import { Action, Language, reducer, State, TestType } from './reducer';

type StateContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const StateContext = createContext(null as unknown as StateContextType);

const initialState: State = {
  config: {
    timeInSeconds: 30,
    wordsCount: 50,
    language: Language.ENGLISH,
    testType: TestType.TIME,
  },
  customConfig: {
    language: Language.ENGLISH,
    customText: '',
    timeInSeconds: undefined,
    wordsCount: undefined,
    wordslength: undefined,
  },
};

const StateContextProvider: React.FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [state, dispatch] = useImmerReducer<State, Action>(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>
  );
};

export default StateContextProvider;
