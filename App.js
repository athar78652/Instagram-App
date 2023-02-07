import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import HomeScreen from './components/HomeScreen';

import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DiscoveryScreen from './components/DiscoveryScreen';
import CreatePostScreen from './components/CreatePostScreen';
import NotificationsScreen from './components/NotificationsScreen';
import ProfileScreen from './components/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';


const Tab=createBottomTabNavigator();

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name='Instagram' component={HomeScreen}/>
            
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
    <Image source='https://www.citypng.com/public/uploads/preview/-11590321744kgx0vygeu0.png'/>
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return <Foundation name='home' size={size} color={color}/>;
            }
            if (route.name === 'Discovery') {
              return <Feather name='search' size={size} color={color}/>;
            }
            if (route.name === 'Post') {
              return <Feather name='plus-square' size={size} color={color}/>;
            }
            if (route.name === 'Notifications') {
              return <AntDesign name='hearto' size={size} color={color}/>;
            }
            if (route.name === 'Profile') {
              return <Ionicons name='person-outline' size={size} color={color}/>;
            }


            
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
          showLabel:false,
        })}
    >
      <Tab.Screen name="Home" component={MyStack} options={{headerShown:false}} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={CreatePostScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;
