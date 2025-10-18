import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../../RootStackParamList';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../assets/icon/home-icon';
import Colors from '../../assets/theme/Colors';
import DiscoverIcon from '../assets/icon/discover-icon';
import ProfileIcon from '../assets/icon/profile-icon';

const Tab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
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
