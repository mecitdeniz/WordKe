import React from 'react';
import {SafeAreaView} from 'react-native';
import GameScreen from './src/scrreens/GameSceen';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <GameScreen />
    </SafeAreaView>
  );
};

export default App;
