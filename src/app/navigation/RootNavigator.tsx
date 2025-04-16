import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../constants';
import { RootStackParamList } from './types';
import { BottomTabNavigator } from './BottomTabNavigator';
import { AboutScreen } from '../screens/AboutScreen';
import { SupportScreen } from '../screens/SupportScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#1f2937',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREEN_NAMES.ABOUT}
          component={AboutScreen}
          options={{ title: 'About Us' }}
        />
        <Stack.Screen
          name={SCREEN_NAMES.SUPPORT}
          component={SupportScreen}
          options={{ title: 'Support' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 