import React from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import Tile from '../components/Tile';
import SwipeGesture from '../swipe-gesture';
import {getDestinaion} from './utils';

const TestScreen = () => {
  const [loading, setLoading] = React.useState(true);
  //const position = new Animated.ValueXY({x: 0, y: 0});
  const [level, setLevel] = React.useState([
    ['H', 'E', 'L'],
    ['L', 'O', 'W'],
    ['O', 'R', 'D'],
  ]);
  const [positions, setPositions] = React.useState<Animated.ValueXY[]>([]);

  const onSwipePerformed = (action: string, index: number) => {
    console.log('A:', action, 'I:', index);
    const destination = getDestinaion(action, index);
    if (typeof destination != 'number') return;
    const lvl = [...level];
    lvl[index] = level[destination];
    lvl[destination] = level[index];
    setLevel([...lvl])
  };
  
  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <View>
      {!loading ? (
        <View style={styles.board}>
          {level.map((row, index) => (
            <View style={styles.row}>
              {row.map((char, index) => (
                <SwipeGesture
                  gestureStyle={styles.square}
                  onSwipePerformed={(action: string) =>
                    onSwipePerformed(action, index)
                  }>
                  <Tile char={char} key={'' + index} />
                </SwipeGesture>
              ))}
            </View>
          ))}
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  board: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    justifyContent:"center",
    alignItems:"center"
  },
  row: {
    flexDirection: 'row',
  },
  swipesGestureContainer: {
    height: 60,
    width: 60,
    margin: 5,
  },
  square: {
    backgroundColor: '#000000',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin:5
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default TestScreen;
