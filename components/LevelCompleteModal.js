import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Animated } from 'react-native';

const LevelCompleteModal = ({ visible, words, onContinue, onReplay }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(300));

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          speed: 10,
          bounciness: 10,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      fadeAnim.setValue(0);
      slideAnim.setValue(300);
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        <Animated.View 
          style={[
            styles.modal, 
            { transform: [{ translateY: slideAnim }] }
          ]}
        >
          <Text style={styles.title}>Level Complete!</Text>
          
          <View style={styles.definitions}>
            {words.map((word, index) => (
              <View key={index} style={styles.definitionItem}>
                <Text style={styles.word}>{word.word}:</Text>
                <Text style={styles.meaning}>{word.definition}</Text>
              </View>
            ))}
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.continueButton]}
              onPress={onContinue}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.replayButton]}
              onPress={onReplay}
            >
              <Text style={styles.buttonText}>Replay</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10b981',
    textAlign: 'center',
    marginBottom: 20,
  },
  definitions: {
    marginBottom: 20,
  },
  definitionItem: {
    marginBottom: 10,
  },
  word: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  meaning: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  continueButton: {
    backgroundColor: '#10b981',
  },
  replayButton: {
    backgroundColor: '#3b82f6',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LevelCompleteModal;
