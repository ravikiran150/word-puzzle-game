import { useState, useEffect } from 'react';
import wordData from '../assets/words.json';

const useLevelManager = () => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [levelWords, setLevelWords] = useState([]);
  const [levelComplete, setLevelComplete] = useState(false);
  const [allLetters, setAllLetters] = useState([]);

  useEffect(() => {
    loadLevel(currentLevel);
  }, [currentLevel]);

  const loadLevel = (level) => {
    const levelData = wordData.levels.find(l => l.level === level) || wordData.levels[0];
    setLevelWords(levelData.words);
    setLevelComplete(false);
    
    // Generate letter grid by combining all words and shuffling
    const letters = levelData.words
      .map(word => word.word.split(''))
      .flat()
      .sort(() => Math.random() - 0.5);
    
    setAllLetters(letters);
  };

  const nextLevel = () => {
    setCurrentLevel(prev => prev + 1);
  };

  const replayLevel = () => {
    loadLevel(currentLevel);
  };

  return {
    currentLevel,
    levelWords,
    allLetters,
    levelComplete,
    setLevelComplete,
    nextLevel,
    replayLevel,
  };
};

export default useLevelManager;
