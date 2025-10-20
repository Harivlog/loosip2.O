import {View, Text, Platform, Image} from 'react-native';
import React, { useEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { CustomTabBar } from '../Components/CustomBottomTab';
import Kesfet from '../Screens/Kesfet';
import Gundem from '../Screens/Gundem';
import VideoCall from '../Screens/VideoCall';
import Profile from '../Screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchDetail from '../Screens/SearchDetail';
import EditProfile from '../Screens/EditProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Search = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Gundem" component={Gundem} />
      <Stack.Screen name="SearchDetail" component={SearchDetail} />
    </Stack.Navigator>
  );
};

const profile = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Profil" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    
    tabBar={(props) => <CustomTabBar {...props} />}
  >
    <Tab.Screen name="Keşfet" component={Kesfet} />
    <Tab.Screen name="Gündem" component={Search} />
    <Tab.Screen name="Create" component={View} />
    <Tab.Screen name="VideoCall" component={VideoCall} />
    <Tab.Screen name="Profil" component={profile} />
  </Tab.Navigator>
  );
};

export default BottomTab;
