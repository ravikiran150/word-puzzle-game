import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import GameScreen from './screens/GameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <GameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
