import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BehavioralAnalyzer } from '../services/BehavioralAnalyzer';

// MCQ Questions
const QUESTIONS = [
  {
    id: 'q1',
    category: 'decision-speed',
    question: 'How quickly do you typically make important decisions?',
    options: ['Very slowly', 'Slowly', 'Moderately', 'Quickly', 'Very quickly'],
  },
  {
    id: 'q2',
    category: 'risk-tolerance',
    question: 'How comfortable are you with financial risk?',
    options: ['Very uncomfortable', 'Uncomfortable', 'Neutral', 'Comfortable', 'Very comfortable'],
  },
  {
    id: 'q3',
    category: 'authority-trust',
    question: 'How much do you trust government and authority figures?',
    options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'],
  },
  {
    id: 'q4',
    category: 'digital-awareness',
    question: 'How aware are you of cyber threats?',
    options: ['Not at all', 'Slightly', 'Moderately', 'Very much', 'Extremely'],
  },
  {
    id: 'q5',
    category: 'urgency-response',
    question: 'How do you react when someone claims urgency?',
    options: ['Act immediately', 'Act quickly', 'Think first', 'Verify info', 'Always verify'],
  },
];

export default function OnboardingScreen({ navigation, route }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  useEffect(() => {
    setQuestionStartTime(Date.now());
  }, [currentQuestion]);

  const handleAnswer = (answer, answerIndex) => {
    const timeSpent = Date.now() - questionStartTime;
    const response = {
      questionId: QUESTIONS[currentQuestion].id,
      question: QUESTIONS[currentQuestion].question,
      category: QUESTIONS[currentQuestion].category,
      answer: answerIndex, // Pass the index (0-4) instead of text
      answerText: answer, // Keep the text for reference
      timeSpent,
      timestamp: new Date(),
    };

    const newResponses = [...responses, response];
    setResponses(newResponses);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeOnboarding(newResponses);
    }
  };

  const completeOnboarding = async (allResponses) => {
    const totalTime = Date.now() - startTime;
    const analysis = BehavioralAnalyzer.analyzeOnboardingResponses(allResponses);

    const user = route.params.user;
    user.behavioralProfile = {
      decisionMakingSpeed: analysis.decisionMakingSpeed,
      riskTolerance: analysis.riskTolerance,
      trustInAuthority: analysis.trustInAuthority,
      emotionalTriggers: analysis.emotionalTriggers,
      digitalAwarenessLevel: analysis.digitalAwarenessLevel,
      scamVulnerabilityScore: analysis.scamVulnerabilityScore,
      vulnerabilityFactors: analysis.vulnerabilityFactors,
      recommendedScamCategories: analysis.recommendedScamCategories,
    };

    await AsyncStorage.setItem('currentUser', JSON.stringify(user));
    await AsyncStorage.setItem('onboardingComplete', 'true');

    navigation.navigate('Dashboard');
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <LinearGradient colors={['#f5f5f5', '#e8e8e8']} style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Understand Your Cyber Risk</Text>
          <Text style={styles.subtitle}>
            Question {currentQuestion + 1} of {QUESTIONS.length}
          </Text>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.question}>{QUESTIONS[currentQuestion].question}</Text>

          <View style={styles.options}>
            {QUESTIONS[currentQuestion].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleAnswer(option, index)}
              >
                <View style={styles.optionContent}>
                  <View style={styles.optionLabel}>
                    <Text style={styles.optionLabelText}>
                      {String.fromCharCode(65 + index)}
                    </Text>
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 30,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    lineHeight: 26,
  },
  options: {
    gap: 12,
  },
  optionButton: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionLabelText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
});
