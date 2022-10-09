import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  GAME_SCREEN,
  HOME_SCREEN,
  SPLASH_SCREEN,
  WIN_SCREEN,
} from '../common/constants';
import GameScreen from '../screens/Game/GameSceen';
import HomeScreen from '../screens/Home/HomeScreeen';
import WinScreen from '../screens/Win/WinScreeen';
import WinScreenParams from '../screens/Win/WinScreenParams';

export type RootStackParams = {
  Home: any;
  Game: any;
  Win: WinScreenParams;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackButtonMenuEnabled: true,
          headerTintColor: '#FFFF',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#121213',
          },
          headerTitle: '',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={GAME_SCREEN} component={GameScreen} />
        <Stack.Screen
          name={WIN_SCREEN}
          component={WinScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
