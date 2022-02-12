import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BannerAd, TestIds, BannerAdSize} from '@react-native-admob/admob';

import LevelBar from '../components/LevelBar';
import Tile from '../components/Tile';
import {getDestinaion, IPosition, isValidMove} from './utils';
import SwipeGesture from '../swipe-gesture';

const GameScreen = () => {
  const [level, setLevel] = React.useState([
    ['H', 'E', 'L'],
    ['L', 'O', 'W'],
    ['O', 'R', 'D'],
  ]);

  const onSwipePerformed = (action: string, position: IPosition) => {
    const destination = getDestinaion(action, position);
    if (!isValidMove(destination)) return;

    const posValue = level[position.row][position.col];
    const destValue = level[destination.row][destination.col];

    const lvl = [...level];
    lvl[position.row][position.col] = destValue;
    lvl[destination.row][destination.col] = posValue;
    setLevel([...lvl]);
  };

  React.useEffect(() => {}, []);

  const renderRows = (rowIndex: number) => {
    return (
      <View style={styles.row}>
        {level[rowIndex].map((char, index) => (
          <SwipeGesture
            key={`tile_${rowIndex}_${index}`}
            gestureStyle={styles.square}
            onSwipePerformed={(action: string) =>
              onSwipePerformed(action, {row: rowIndex, col: index})
            }>
            <Tile char={char} key={'' + index} />
          </SwipeGesture>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LevelBar level="1" />

      <View style={styles.board}>
        {renderRows(0)}
        {renderRows(1)}
        {renderRows(2)}
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
    paddingVertical: 35,
  },
  board: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  square: {
    backgroundColor: '#000000',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  row: {
    flexDirection: 'row',
  },
});

export default GameScreen;
