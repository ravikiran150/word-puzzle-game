import { useState } from 'react';

const useWordValidator = (currentLevelWords) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [selectedLetterIndices, setSelectedLetterIndices] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [completedWordIndices, setCompletedWordIndices] = useState([]);

  const checkWord = () => {
    const currentWord = selectedLetters.join('');
    const targetWord = currentLevelWords.find(word => 
      word.word === currentWord && !foundWords.includes(word.word)
    );

    if (targetWord) {
      setFoundWords([...foundWords, targetWord.word]);
      setCompletedWordIndices([...completedWordIndices, ...selectedLetterIndices]);
      return true;
    }
    return false;
  };

  const resetSelection = () => {
    setSelectedLetters([]);
    setSelectedLetterIndices([]);
  };

  return {
    selectedLetters,
    selectedLetterIndices,
    foundWords,
    completedWordIndices,
    setSelectedLetters,
    setSelectedLetterIndices,
    checkWord,
    resetSelection,
    setFoundWords,
  };
};

export default useWordValidator;
