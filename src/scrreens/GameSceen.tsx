import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import levels from '../assets/levels.json';
import Tile from '../components/Tile';
import {getDestinaion, IPosition, isValidMove} from './utils';
import SwipeGesture from '../swipe-gesture';
import Alert from '../components/Alert';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';

const GameScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [puzzle, setPuzzle] = useState<string[][]>([[], [], []]);
  const [goal, setGoal] = useState<string[][]>([[], [], []]);

  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

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
    setPuzzle(levels[randomLevel].state);
    setGoal(levels[randomLevel].goal);
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
            <Tile char={char} size="large" key={'' + index} />
          </SwipeGesture>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {puzzle[0].length ? (
        <View style={styles.board}>
          {renderRows(0)}
          {renderRows(1)}
          {renderRows(2)}
        </View>
      ) : (
        <Text>Not ready</Text>
      )}
      <Alert visible={visible}>
        <Button title="Close" onPress={() => setVisible(false)} />
        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          Congratulations!
        </Text>
        <Button
          title="Next"
          onPress={() => {
            setVisible(false);
          }}
        />
      </Alert>
      <Button title="Show" onPress={() => setVisible(true)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 35,
    backgroundColor: '#C8C8C8',
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
});

export default GameScreen;
