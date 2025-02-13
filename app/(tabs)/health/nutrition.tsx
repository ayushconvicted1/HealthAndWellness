import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        <ActivityIndicator size="large" color="#0000ff" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    marginBottom: 15,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#757575',
    marginTop: 5,
  },
  mealCard: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    marginTop: 10,
  },
  mealItem: {
    marginBottom: 10,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mealDetails: {
    fontSize: 14,
    color: '#757575',
  },
});

export default Nutrition;