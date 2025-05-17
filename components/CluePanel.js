import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CluePanel = ({ clues, foundWords }) => {
  return (
    <View style={styles.container}>
      {clues.map((clue, index) => (
        <View key={index} style={styles.clueItem}>
          <Text style={[
            styles.clueText,
            foundWords.includes(clue.word) && styles.foundClue
          ]}>
            {clue.clue}: {foundWords.includes(clue.word) ? 
              clue.word : '_ '.repeat(clue.word.length)}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  clueItem: {
    marginVertical: 5,
  },
  clueText: {
    fontSize: 16,
    color: '#333',
  },
  foundClue: {
    color: '#10b981',
    fontWeight: 'bold',
  },
});

export default CluePanel;
