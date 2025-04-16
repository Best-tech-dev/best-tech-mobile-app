import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREEN_NAMES } from '../constants';
import { BottomTabParamList } from './types';
import { HomeScreen } from '../screens/HomeScreen';
import { ServicesScreen } from '../screens/ServicesScreen';
import { BlogScreen } from '../screens/BlogScreen';
import { CoursesScreen } from '../screens/CoursesScreen';
import { Ionicons } from '@expo/vector-icons';
import { colors, tabBarStyle } from '../theme/theme';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import { StudentScreen } from '../screens/StudentScreen';
const StyledView = styled(View);
const StyledText = styled(Text);

const Tab = createBottomTabNavigator<BottomTabParamList>();

const CustomTabBarIcon = ({ focused, iconName, label }: { focused: boolean; iconName: string; label: string }) => {
  return (
    <StyledView className="items-center justify-center w-16">
      <StyledView
        className={`items-center justify-center rounded-full w-10 h-10 ${
          focused ? 'bg-green-100' : ''
        }`}
      >
        <Ionicons
          name={iconName as any}
          size={22}
          color={focused ? colors.primary : colors.tab.inactive}
        />
      </StyledView>
      <StyledText
        className={`text-[9px] mt-1 whitespace-nowrap ${
          focused ? 'text-green-500 font-semibold' : 'text-gray-400'
        }`}
      >
        {label}
      </StyledText>
    </StyledView>
  );
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="home"
              label="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.SERVICES}
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="grid"
              label="Services"
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.STUDENT}
        component={StudentScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="person"
              label="Student"
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.BLOG}
        component={BlogScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="newspaper"
              label="Blog"
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.COURSES}
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="book"
              label="Courses"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}; 