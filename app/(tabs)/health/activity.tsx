import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '@/sameStyles/SameStyles';

const Activity = () => {
  const [loading, setLoading] = useState(true);
  const [activityData, setActivityData] = useState({
    steps: 0,
    distance: 0,
    calories: 0,
  });

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setActivityData({
        steps: 8250,
        distance: 5.2, // km
        calories: 340, // kcal
      });
      setLoading(false);
    }, 1000); // Simulate a 2-second fetch time
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator style={styles.activityIndicator} size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Today's Activity</Text>

      {/* Step Count */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="walk" size={30} color="#4CAF50" />
        <Text style={styles.value}>{activityData.steps}</Text>
        <Text style={styles.label}>Steps</Text>
      </View>

      {/* Distance Traveled */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="map-marker-distance" size={30} color="#2196F3" />
        <Text style={styles.value}>{activityData.distance} km</Text>
        <Text style={styles.label}>Distance</Text>
      </View>

      {/* Calories Burned */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="fire" size={30} color="#FF5722" />
        <Text style={styles.value}>{activityData.calories} kcal</Text>
        <Text style={styles.label}>Calories Burned</Text>
      </View>
    </SafeAreaView>
  );
};

export default Activity;
