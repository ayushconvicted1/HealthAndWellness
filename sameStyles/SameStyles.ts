import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      marginTop: Platform.OS === 'ios' ? 0 : 20
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
    },mealCard: {
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
      activityIndicator: {
        marginTop: Platform.OS === 'ios' ? 0 : 20
      }
  });