import React from 'react'

import { Dimensions,ScrollView,StyleSheet } from 'react-native';
import Home from './Home'
import Add from './Add'
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
function Tabbar(){
 const Tab =createBottomTabNavigator();
  return(<NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Add') {
          iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'black',
    })}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Add' component={Add}/>
      
    </Tab.Navigator>
  </NavigationContainer>)
}

export default Tabbar