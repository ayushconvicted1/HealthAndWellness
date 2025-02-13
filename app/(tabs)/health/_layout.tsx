import { Tabs } from 'expo-router';
import Screen3 from './sleep';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Colors } from '@/constants/Colors';
import { HapticTab } from '@/components/HapticTab';
import { Feather, FontAwesome5 } from '@expo/vector-icons';


export default function HealthTabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 55, position: "absolute", top: -5 }, // Custom top bar
        tabBarLabelStyle: { fontSize: 10 }, // Adjust label size
        tabBarItemStyle: {height: 50},
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
      }}
    >
  <Tabs.Screen name="activity"  options={{ title: 'Activity', tabBarIcon: ({ color }) => <Feather size={28} name="activity" color={color} />, }}  />
  <Tabs.Screen name="nutrition" options={{ title: 'Nutrition', tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="apple-alt" color={color} />, }}  />
  <Tabs.Screen name="sleep" options={{ title: 'Sleep', tabBarIcon: ({ color }) => <Feather size={28} name="moon" color={color} />,  }} />
</Tabs>

  );
}
