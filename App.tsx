/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/home';
import ProfileScreen from './src/screens/profile';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
