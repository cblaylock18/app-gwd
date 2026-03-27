import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons as Icon } from '@expo/vector-icons';
import Game from './screens/Game';
import Archive from './screens/Archive';
import { COLORS } from '../constants/COLORS';
import { KeyboardProvider } from 'react-native-keyboard-controller';

// Define common header styles for stack navigators
const HEADER_STYLES = {
  headerStyle: { backgroundColor: COLORS.black },
  headerTintColor: COLORS.white,
  headerTitleStyle: { fontSize: 24 },
};

// Create navigators
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ArchiveStack = createNativeStackNavigator();

function HomeTab() {
  return (
    <HomeStack.Navigator screenOptions={HEADER_STYLES}>
      <HomeStack.Screen name="Game" component={Game} />
    </HomeStack.Navigator>
  );
}

function ArchiveTab() {
  return (
    <ArchiveStack.Navigator screenOptions={HEADER_STYLES}>
      <ArchiveStack.Screen name="Archive" component={Archive} />
      <ArchiveStack.Screen name="Game" component={Game} />
    </ArchiveStack.Navigator>
  );
}

// create main tab navigator with custom styles and icons
function MyTabs() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Tab.Navigator initialRouteName="HomeTab" screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: COLORS.primaryYellow, tabBarActiveTintColor: COLORS.black, tabBarInactiveTintColor: COLORS.grey, tabBarInactiveBackgroundColor: COLORS.lightYellow, tabBarStyle: {
          backgroundColor: COLORS.primaryYellow,
          paddingBottom: 0,
          marginBottom: insets.bottom
        },
      }}>
        <Tab.Screen name="HomeTab" component={HomeTab} options={{ title: "Today's Game", tabBarIcon: ({ focused }) => <Icon name={focused ? "school" : "school-outline"} size={24} color={focused ? COLORS.black : COLORS.grey} /> }} />

        <Tab.Screen name="ArchiveTab" component={ArchiveTab} options={{ headerShown: false, title: "Archive", tabBarIcon: ({ focused }) => <Icon name={focused ? "calendar-clear" : "calendar-clear-outline"} size={24} color={focused ? COLORS.black : COLORS.grey} /> }} />
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