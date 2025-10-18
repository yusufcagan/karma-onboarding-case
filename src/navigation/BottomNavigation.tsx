import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomTabParamList,
  HomeStackParamList,
} from '../../RootStackParamList';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../assets/icon/home-icon';
import Colors from '../../assets/theme/Colors';
import DiscoverIcon from '../assets/icon/discover-icon';
import ProfileIcon from '../assets/icon/profile-icon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GeneratingScreen from '../screens/HomeScreen/GeneratingScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ResultScreen from '../screens/HomeScreen/ResultScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomNavigation() {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GeneratingScreen" component={GeneratingScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (
            routeName === 'GeneratingScreen' ||
            routeName === 'ResultScreen'
          ) {
            return { display: 'none' };
          }
          return { backgroundColor: 'white' };
        })(route),
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarActiveTintColor: Colors.Primary,
          tabBarInactiveTintColor: '#BBBBBB',
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIcon
                color={focused ? Colors.Primary : '#BBBBBB'}
                width={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarActiveTintColor: Colors.Primary,
          tabBarInactiveTintColor: '#BBBBBB',
          tabBarIcon: ({ focused }) => {
            return (
              <DiscoverIcon
                color={focused ? Colors.Primary : '#BBBBBB'}
                width={24}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarActiveTintColor: Colors.Primary,
          tabBarInactiveTintColor: '#BBBBBB',
          tabBarIcon: ({ focused }) => {
            return (
              <ProfileIcon
                color={focused ? Colors.Primary : '#BBBBBB'}
                width={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
