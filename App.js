import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SimulationScreen from './src/screens/SimulationScreen';
import ResultScreen from './src/screens/ResultScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Main App Container
function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const user = await AsyncStorage.getItem('currentUser');
      const onboardingComplete = await AsyncStorage.getItem('onboardingComplete');
      
      if (user && onboardingComplete) {
        setUserState(JSON.parse(user));
      } else {
        setUserState(null);
      }
    } catch (e) {
      console.error('Error restoring user session:', e);
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {!userState ? (
        // Authentication Stack
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: true
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
      ) : (
        // Main App Stack
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#999'
          }}
        >
          <Tab.Screen 
            name="Dashboard" 
            component={DashboardScreen}
            options={{
              tabBarLabel: 'Dashboard',
              headerTitle: 'e-Raksha Cyber'
            }}
          />
          <Tab.Screen 
            name="Simulation" 
            component={SimulationScreen}
            options={{
              tabBarLabel: 'Simulations',
              headerTitle: 'Scam Simulations'
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              headerTitle: 'My Profile'
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return <AppNavigator />;
}
