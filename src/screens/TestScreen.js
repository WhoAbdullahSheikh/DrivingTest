// TestScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import questions from '../data/questions';

const TestScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      // Test completed
      navigation.navigate('Results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.category}>{currentQuestion.category}</Text>
        <Text style={styles.progress}>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === index && styles.selectedOption
            ]}
            onPress={() => setSelectedOption(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.navigation}>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navButton, styles.nextButton]}
          onPress={handleNext}
        >
          <Text style={styles.navButtonText}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    fontSize: 16,
    color: '#666',
  },
  progress: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionContainer: {
    flexGrow: 1,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#e3f2fd',
    borderColor: '#3F51B5',
  },
  optionText: {
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#3F51B5',
  },
  navButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default TestScreen;