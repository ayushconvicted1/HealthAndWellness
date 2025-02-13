import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from "../../../sameStyles/SameStyles" 

const Nutrition = () => {
  const [loading, setLoading] = useState(true);
  const [nutritionData, setNutritionData] = useState<any>({
    calories: 0,
    water: 0,
    meals: [],
  });

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setNutritionData({
        calories: 1800, // kcal
        water: 2.5, // liters
        meals: [
          { name: 'Breakfast', items: 'Oatmeal, Banana, Coffee' },
          { name: 'Lunch', items: 'Grilled Chicken, Rice, Salad' },
          { name: 'Dinner', items: 'Salmon, Quinoa, Vegetables' },
        ],
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
      <Text style={styles.header}>Today's Nutrition</Text>

      {/* Calorie Intake */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="food" size={30} color="#FF9800" />
        <Text style={styles.value}>{nutritionData.calories} kcal</Text>
        <Text style={styles.label}>Calories Consumed</Text>
      </View>

      {/* Water Consumption */}
      <View style={styles.card}>
        <MaterialCommunityIcons name="cup-water" size={30} color="#03A9F4" />
        <Text style={styles.value}>{nutritionData.water} L</Text>
        <Text style={styles.label}>Water Intake</Text>
      </View>

      {/* Meal Logs */}
      <View style={styles.mealCard}>
        {nutritionData.meals.map((meal: any, index: number) => (
          <View key={index} style={styles.mealItem}>
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealDetails}>{meal.items}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Nutrition;