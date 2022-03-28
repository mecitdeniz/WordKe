import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import levels from '../assets/levels.json';
import {RootStackParams} from '../../App';

import Tile from '../components/Tile';
import Logo from '../components/Logo';
import SwipeGesture from '../components/swipe-gesture';

import {getDestinaion, IPosition, isValidMove} from './utils';
import Banner from '../components/ads/Banner';
import Text, {TextTypes} from '../components/Text';
import { findPuzzle } from '../utils/game';

const GameScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [puzzle, setPuzzle] = useState<string[][]>([[], [], []]);
  const [goal, setGoal] = useState<string[][]>([[], [], []]);

  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);

  const onSwipePerformed = (action: string, position: IPosition) => {
    const destination = getDestinaion(action, position);
    if (!isValidMove(destination)) return;

    const newPuzzle = swap(puzzle, position, destination);
    setPuzzle(newPuzzle.slice());
    setCount(prev => prev + 1);
  };

  const swap = (list: string[][], a: IPosition, b: IPosition): string[][] => {
    const temp = list[a.row][a.col];
    list[a.row][a.col] = list[b.row][b.col];
    list[b.row][b.col] = temp;
    return list;
  };

  const isComplated = () => {
    const strPuzzle = puzzle.toString().trim();
    const strGoal = goal.toString().trim();
    console.log(strPuzzle);
    console.log(strGoal);
    if (strPuzzle !== strGoal) return false;
    return true;
  };

  const generatePuzzle = () => {
    const randomLevel = Math.floor(Math.random() * 10);
    console.log(randomLevel, levels[randomLevel].state);
    const {puzzle,goal} = findPuzzle()
    setPuzzle(puzzle);
    setGoal(goal);
    //setPuzzle(levels[randomLevel].state);
    //setGoal(levels[randomLevel].goal);
  };

  useEffect(() => {
    if (!ready) {
      generatePuzzle();
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready && isComplated()) {
      navigation.replace('Win', {goal, count});
    }
  }, [puzzle]);

  const renderRows = (rowIndex: number) => {
    return (
      <View style={styles.row}>
        {puzzle[rowIndex].map((char, index) => (
          <SwipeGesture
            key={`tile_${rowIndex}_${index}`}
            gestureStyle={styles.square}
            onSwipePerformed={(action: string) => {
              onSwipePerformed(action, {row: rowIndex, col: index});
            }}>
            <Tile
              char={char}
              type={TextTypes.DEFAULT}
              key={'' + index}
              success={false}
            />
          </SwipeGesture>
        ))}
      </View>
    );
  };

  const renderBoard = () => {
    return (
      <View style={styles.board}>
        {renderRows(0)}
        {renderRows(1)}
        {renderRows(2)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0000" hidden />
      <Logo />
      
      <Text type={TextTypes.TITLE} style={styles.count}>
        {count}
      </Text>

      {puzzle[0].length ? (
        renderBoard()
      ) : (
        <Text type={TextTypes.SUBTITLE}>Not ready</Text>
      )}

      <Banner />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 35,
    backgroundColor: '#121213',
  },
  board: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    backgroundColor: '#000000',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    color: '#FFFF',
    fontSize: 36,
    fontFamily: 'SigmarOne-Regular',
    marginTop: 30,
  },
  count: {
    marginTop: 30,
    color: '#FFFF',
    textAlign: 'center',
  },
});

export default GameScreen;
