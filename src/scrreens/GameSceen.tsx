import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BannerAd, TestIds, BannerAdSize} from '@react-native-admob/admob';

import LevelBar from '../components/LevelBar';
import Tile from '../components/Tile';

const GameScreen = () => {
  const [level, setLevel] = React.useState([
    ['H', 'E', 'L'],
    ['L', 'O', 'W'],
    ['O', 'R', 'D'],
  ]);
  
  return (
    <View style={styles.container}>
      <LevelBar level="1" />

      <View style={styles.board}>
        {level.map((row, index) => (
          <View key={`row_${index}`} style={{flexDirection: 'row'}}>
            {row.map((char, index) => (
              <Tile key={`tile_${index}`} char={char} />
            ))}
          </View>
        ))}
      </View>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={TestIds.BANNER}
        onAdLoaded={() => console.log('Banner Ad loaded!')}
        onAdFailedToLoad={error => console.log('Fail:', error)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  board: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default GameScreen;
