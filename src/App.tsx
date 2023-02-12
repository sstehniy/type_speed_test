import { QueryClient } from 'react-query';

import Controls from './components/ActionBar';
import Header from './components/Header';
import KeyboardVisual from './components/KeyboardVisual';
import WordsList from './components/WordsListStandard';

function App() {
  return (
    <>
      <Header />
      <KeyboardVisual />
      <WordsList words={[]} />
      <Controls />
    </>
  );
}

export default App;
