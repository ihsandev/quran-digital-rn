import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Bookmark, Home, Quran, SplasScreen} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTab} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      initialRouteName="Quran"
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Quran"
        component={Quran}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplasScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
