function WordsList({ words }: { words: string[] }) {
  return (
    <ul>
      {words.map((word) => (
        <li key={word}>{word}</li>
      ))}
    </ul>
  );
}

export default WordsList;
