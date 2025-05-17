import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const LetterGrid = ({ letters, onLetterPress, selectedLetters, completedWords }) => {
  const [scaleAnim] = useState(new Animated.Value(1));

  const handlePress = (letter, index) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    onLetterPress(letter, index);
  };

  const isLetterUsed = (index) => {
    return completedWords.some(word => word.includes(index));
  };

  const isLetterSelected = (index) => {
    return selectedLetters.includes(index);
  };

  return (
    <View style={styles.grid}>
      {letters.map((letter, index) => {
        const isUsed = isLetterUsed(index);
        const isSelected = isLetterSelected(index);
        
        return (
          <Animated.View 
            key={index}
            style={[
              styles.letterContainer,
              isUsed && styles.usedLetter,
              isSelected && styles.selectedLetter,
              { transform: [{ scale: scaleAnim }] }
            ]}
          >
            <TouchableOpacity 
              onPress={() => !isUsed && handlePress(letter, index)}
              disabled={isUsed}
              style={styles.letterButton}
            >
              <Text style={styles.letterText}>{letter}</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  letterContainer: {
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  letterButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  usedLetter: {
    backgroundColor: '#d1fae5',
    opacity: 0.7,
  },
  selectedLetter: {
    backgroundColor: '#a5f3fc',
  },
});

export default LetterGrid;
