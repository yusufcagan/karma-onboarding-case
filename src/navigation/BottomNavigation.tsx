import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomTabParamList,
  DiscoverStackParamList,
  HomeStackParamList,
  ProfileStackParamList,
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
import ProfileEdit from '../screens/ProfileScreen/ProfileEdit';
import SettingsScreen from '../screens/ProfileScreen/SettingsScreen';

const Tab = createBottomTabNavigator<BottomTabParamList>();
export default function BottomNavigation() {
  const Stack = createNativeStackNavigator<HomeStackParamList>();
  const ProfStack = createNativeStackNavigator<ProfileStackParamList>();
  const DisStack = createNativeStackNavigator<DiscoverStackParamList>();
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GeneratingScreen" component={GeneratingScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    );
  };

  const ProfileStack = () => {
    return (
      <ProfStack.Navigator screenOptions={{ headerShown: false }}>
        <ProfStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <ProfStack.Screen name="ProfileEditScreen" component={ProfileEdit} />
      </ProfStack.Navigator>
    );
  };

  const DiscoverStack = () => {
    return (
      <DisStack.Navigator screenOptions={{ headerShown: false }}>
        <DisStack.Screen name="DiscoverScreen" component={DiscoverScreen} />
        <DisStack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
      </DisStack.Navigator>
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
            routeName === 'ResultScreen' ||
            routeName === 'ProfileEditScreen' ||
            routeName === 'SettingsScreen'
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
        name="DiscoverStack"
        component={DiscoverStack}
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
        name="ProfileStack"
        component={ProfileStack}
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
