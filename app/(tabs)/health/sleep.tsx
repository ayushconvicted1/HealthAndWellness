import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from "../../../sameStyles/SameStyles" 

const Sleep = () => {
  const [loading, setLoading] = useState(true);
  const [sleepData, setSleepData] = useState({
    duration: 0, // hours
    quality: '',
    score: 0, // out of 100
  });

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setSleepData({
        duration: 7.5, // hours
        quality: 'Good',
        score: 85, // out of 100
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
      <Text style={styles.header}>Sleep Summary</Text>

      {/* Sleep Duration */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="bed" size={30} color="#673AB7" />
        <Text style={styles.value}>{sleepData.duration} hrs</Text>
        <Text style={styles.label}>Total Sleep</Text>
      </View>

      {/* Sleep Quality */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="emoticon-happy" size={30} color="#4CAF50" />
        <Text style={styles.value}>{sleepData.quality}</Text>
        <Text style={styles.label}>Sleep Quality</Text>
      </View>

      {/* Sleep Score */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="chart-line" size={30} color="#FF5722" />
        <Text style={styles.value}>{sleepData.score}/100</Text>
        <Text style={styles.label}>Restfulness Score</Text>
      </View>
    </SafeAreaView>
  );
};



export default Sleep;