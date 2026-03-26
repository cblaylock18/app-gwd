import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons as Icon } from '@expo/vector-icons';
import Home from './screens/Home';
import History from './screens/History';
import { COLORS } from '../constants/COLORS';
import { KeyboardProvider } from 'react-native-keyboard-controller';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Tab.Navigator screenOptions={{
        tabBarActiveBackgroundColor: COLORS.primaryYellow, tabBarActiveTintColor: COLORS.black, tabBarInactiveTintColor: COLORS.grey, tabBarInactiveBackgroundColor: COLORS.lightYellow, headerTintColor: COLORS.white, headerStyle: {
          backgroundColor: COLORS.black
        }, tabBarStyle: {
          backgroundColor: COLORS.primaryYellow,
          paddingBottom: 0,
          marginBottom: insets.bottom
        },
      }}>
        <Tab.Screen name="Today's Game" component={Home} options={{ tabBarIcon: ({ focused }) => <Icon name={focused ? "school" : "school-outline"} size={24} color={focused ? COLORS.black : COLORS.grey} /> }} />
        <Tab.Screen name="History" component={History} options={{ title: "History", tabBarIcon: ({ focused }) => <Icon name={focused ? "calendar-clear" : "calendar-clear-outline"} size={24} color={focused ? COLORS.black : COLORS.grey} /> }} />
      </Tab.Navigator >
      <StatusBar style="light" />
    </>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <KeyboardProvider>
          <MyTabs />
        </KeyboardProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}