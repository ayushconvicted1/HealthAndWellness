import { Image, StyleSheet, Platform, View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [healthData, setHealthData] = useState({
    steps: 0,
    heartRate: 0,
    sleepHours: 0,
  });

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setHealthData({
        steps: 8500,
        heartRate: 72,
        sleepHours: 7.5,
      });
      setLoading(false);
    }, 1000); // Simulate a 2-second fetch time
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, Ayush! 👋</Text>
      <Text style={styles.subtitle}>Here’s your health summary for today:</Text>

      <View style={styles.card}>
        <MaterialCommunityIcons name="walk" size={30} color="#4CAF50" />
        <Text style={styles.metricLabel}>Steps Taken</Text>
        <Text style={styles.metricValue}>{healthData.steps}</Text>
      </View>

      <View style={styles.card}>
        <MaterialCommunityIcons name="heart-pulse" size={30} color="#E53935" />
        <Text style={styles.metricLabel}>Heart Rate</Text>
        <Text style={styles.metricValue}>{healthData.heartRate} bpm</Text>
      </View>

      <View style={styles.card}>
        <MaterialCommunityIcons name="sleep" size={30} color="#3F51B5" />
        <Text style={styles.metricLabel}>Sleep Hours</Text>
        <Text style={styles.metricValue}>{healthData.sleepHours} hrs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#757575',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    marginBottom: 15,
  },
  metricLabel: {
    fontSize: 16,
    color: '#424242',
    marginTop: 5,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 3,
  },
});