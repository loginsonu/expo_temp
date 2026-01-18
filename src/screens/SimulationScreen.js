import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SimulationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulations - Coming Soon</Text>
      <Text style={styles.description}>Practice scam scenarios here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
