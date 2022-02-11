import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Tile from '../components/Tile';
import SwipeGesture from '../swipe-gesture';
import {getDestinaion} from './utils';

const TestScreen = () => {
  const [loading, setLoading] = React.useState(true);
  //const position = new Animated.ValueXY({x: 0, y: 0});
  const [level, setLevel] = React.useState([
    'H',
    'E',
    'L',
    'L',
    'O',
    'W',
    'O',
    'R',
    'D',
  ]);
  const [state,setStat] = React.useState(true)
  const [positions, setPositions] = React.useState<Animated.ValueXY[]>([]);
  const [currentPositions, setCurrentPositions] = React.useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const onSwipePerformed = (action: string, index: number) => {
    console.log('Move P:', positions);

    const currentPos = currentPositions[index];

    const destination = getDestinaion(action, currentPos);
    if (typeof destination != 'number') return;

    console.log(
      'A:',
      action,
      'I:',
      index,
      'CI:',
      currentPos,
      'D:',
      destination,
    );
    move(index,destination)
  };

  const move = (tileOne: number, tileTwo: number) => {
    const posOne = positions[tileOne];
    const posTwo = positions[tileTwo];
    const destOne = positions[tileOne];
    const destTwo = positions[tileTwo];

    Animated.parallel([
      Animated.timing(posOne, {
        toValue: {
          x: parseInt(JSON.stringify(destTwo.x)),
          y: parseInt(JSON.stringify(destTwo.y)),
        },
        easing: Easing.elastic(0.5),
        useNativeDriver: false,
        duration: 200,
      }),
      Animated.timing(posTwo, {
        toValue: {
          x: parseInt(JSON.stringify(destOne.x)),
          y: parseInt(JSON.stringify(destOne.y)),
        },
        easing: Easing.elastic(0.5),
        useNativeDriver: false,
        duration: 200,
      }),
    ]).start();
    setStat(!state)
    console.log('Move P:', positions);
  };

  const callculatePositions = () => {
    const positions: Animated.ValueXY[] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const position = new Animated.ValueXY({x: j * 70, y: i * 70});
        positions.push(position);
        //console.log(position);
      }
    }
    setPositions(positions);
  };

  React.useEffect(() => {
    callculatePositions();
    setLoading(false);
  }, []);

  return (
    <View>
      {!loading ? (
        <View style={styles.board}>
          {level.map((char, index) => (
            <Animated.View
              key={'' + index}
              style={positions[index].getLayout()}>
              <SwipeGesture
                gestureStyle={styles.square}
                onSwipePerformed={(action: string) =>
                  onSwipePerformed(action, index)
                }>
                <Tile char={index.toString()} key={'' + index} />
              </SwipeGesture>
            </Animated.View>
          ))}
        </View>
      ) : (
        <Text>Loading</Text>
      )}

      <TouchableOpacity onPress={() => move(0, 1)} style={styles.button}>
        <Text>Move</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  board: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
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
