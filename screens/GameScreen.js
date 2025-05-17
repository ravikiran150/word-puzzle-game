import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import LetterGrid from '../components/LetterGrid';
import CluePanel from '../components/CluePanel';
import LevelCompleteModal from '../components/LevelCompleteModal';
import Header from '../components/Header';
import useWordValidator from '../hooks/useWordValidator';
import useLevelManager from '../hooks/useLevelManager';

const GameScreen = () => {
  const {
    currentLevel,
    levelWords,
    allLetters,
    levelComplete,
    setLevelComplete,
    nextLevel,
    replayLevel,
  } = useLevelManager();

  const {
    selectedLetters,
    selectedLetterIndices,
    foundWords,
    completedWordIndices,
    setSelectedLetters,
    setSelectedLetterIndices,
    checkWord,
    resetSelection,
    setFoundWords,
  } = useWordValidator(levelWords);

  const handleLetterPress = (letter, index) => {
    if (selectedLetterIndices.includes(index)) return;
    
    const newSelectedLetters = [...selectedLetters, letter];
    const newSelectedIndices = [...selectedLetterIndices, index];
    
    setSelectedLetters(newSelectedLetters);
    setSelectedLetterIndices(newSelectedIndices);
    
    // Auto-check if the selected letters form a valid word
    const currentWord = newSelectedLetters.join('');
    const isWord = levelWords.some(w => w.word === currentWord);
    
    if (isWord) {
      const isValid = checkWord();
      if (isValid) {
        // Check if all words are found
        if (foundWords.length + 1 === levelWords.length) {
          setLevelComplete(true);
        }
        resetSelection();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header level={currentLevel} />
      
      <CluePanel 
        clues={levelWords} 
        foundWords={foundWords} 
      />
      
      <LetterGrid
        letters={allLetters}
        onLetterPress={handleLetterPress}
        selectedLetters={selectedLetterIndices}
        completedWords={completedWordIndices}
      />
      
      <LevelCompleteModal
        visible={levelComplete}
        words={levelWords}
        onContinue={() => {
          setFoundWords([]);
          nextLevel();
        }}
        onReplay={() => {
          setFoundWords([]);
          replayLevel();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
});

export default GameScreen;
