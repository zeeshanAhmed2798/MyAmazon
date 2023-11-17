import React from 'react';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainForHome from '../Home/MainForHome';
import MenuTab from '../AllTabs/MenuTab';
import Profile from '../AllTabs/Profile';
import ShopTab from '../AllTabs/ShopTab';

const Tab = createBottomTabNavigator();

const SetteingsLogo = () => {
  return (
    <Image
      source={require('../TabLogos/setteings.png')}
      style={{ width: 30, height: 30 }}
    />
  );
};
const ShopLogo = () => {
  return (
    <Image
      source={require('../TabLogos/Shooping.png')}
      style={{ width: 30, height: 30 ,tintColor:'black'}}
    />
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'red', // color when tab is active
          inactiveTintColor: 'black', // color when tab is inactive
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'; // use 'home' or 'home-outline' based on your Ionicons set
              color = focused ? 'red' : 'black';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else if (route.name === 'Shop') {
              iconName='cart'
            } else if (route.name === 'Settings') {
              activeTintColor=focused ? 'red':'black'
              iconName = 'menu';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
            
          },
        })}
      >
        <Tab.Screen name="Home" component={MainForHome} options={{ headerShown: false,tabBarLabel:'' }} />
        <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false,tabBarLabel:'' }} />
        <Tab.Screen name="Shop" component={ShopTab} options={{ headerShown: false,tabBarLabel:'' }} />
        <Tab.Screen name="Settings" component={MenuTab} options={{ headerShown: false ,tabBarLabel:''}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
