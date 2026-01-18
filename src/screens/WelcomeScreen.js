import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomeScreen({ navigation }) {
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [userType, setUserType] = useState('');

  const handleSignup = async () => {
    if (!name || !age || !userType) {
      alert('Please fill all fields');
      return;
    }

    const user = {
      id: Date.now().toString(),
      name,
      age: parseInt(age),
      userType,
      createdAt: new Date(),
    };

    await AsyncStorage.setItem('currentUser', JSON.stringify(user));
    navigation.navigate('Onboarding', { user });
  };

  return (
    <LinearGradient colors={['#007AFF', '#0051D5']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {!showSignup ? (
          <View style={styles.welcomeContent}>
            <View style={styles.header}>
              <View style={styles.logo}>
                <Text style={styles.logoText}>🔐</Text>
              </View>
              <Text style={styles.title}>e-Raksha Cyber</Text>
              <Text style={styles.subtitle}>
                AI-Powered Cyber Scam Awareness
              </Text>
            </View>

            <View style={styles.features}>
              <Feature
                icon="🎯"
                title="Personalized"
                description="AI creates your behavioral profile"
              />
              <Feature
                icon="⚡"
                title="Realistic"
                description="Experience actual scam scenarios safely"
              />
              <Feature
                icon="🛡️"
                title="Protective"
                description="Learn through practice, not lectures"
              />
              <Feature
                icon="📊"
                title="Progressive"
                description="Difficulty adapts to your improvement"
              />
            </View>

            <View style={styles.description}>
              <Text style={styles.descriptionTitle}>
                What's the Problem?
              </Text>
              <Text style={styles.descriptionText}>
                Generic cybersecurity training doesn't work. You don't learn whether
                YOU will fall for a scam.{'\n\n'}
                e-Raksha flips the model.{'\n\n'}
                We test you, profile you, and train you with realistic scams you're
                most likely to face.
              </Text>
            </View>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => setShowSignup(true)}
            >
              <LinearGradient
                colors={['#FF6B6B', '#FF4444']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.signupButtonText}>Get Started</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.signupContent}>
            <Text style={styles.signupTitle}>Create Your Profile</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />

            <Text style={styles.label}>You are:</Text>
            <View style={styles.typeButtons}>
              {['Student', 'Parent', 'Senior', 'Professional'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.typeButton,
                    userType === type && styles.typeButtonSelected,
                  ]}
                  onPress={() => setUserType(type)}
                >
                  <Text
                    style={[
                      styles.typeButtonText,
                      userType === type && styles.typeButtonTextSelected,
                    ]}
                  >
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleSignup}
            >
              <LinearGradient
                colors={['#4CAF50', '#45a049']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.continueButtonText}>Continue to Assessment</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowSignup(false)}>
              <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

function Feature({ icon, title, description }) {
  return (
    <View style={styles.feature}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <View>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  welcomeContent: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    fontSize: 60,
    marginBottom: 15,
  },
  logoText: {
    fontSize: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
  features: {
    marginBottom: 30,
  },
  feature: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  featureIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 19,
  },
  description: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
  },
  signupButton: {
    height: 55,
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContent: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  signupTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  typeButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 25,
    gap: 10,
  },
  typeButton: {
    flex: 1,
    minWidth: '45%',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  typeButtonSelected: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderColor: '#fff',
  },
  typeButtonText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    fontWeight: '500',
  },
  typeButtonTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  continueButton: {
    height: 55,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 15,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    textAlign: 'center',
  },
});
