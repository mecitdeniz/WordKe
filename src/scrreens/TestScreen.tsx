import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Tile from '../components/Tile';
import SwipeGesture from '../swipe-gesture';

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
  const [positions, setPositions] = React.useState<Animated.ValueXY[]>([]);

  const move = (tileOne: number, tileTwo: number) => {
    Animated.timing(positions[tileOne], {
      toValue: {
        x: parseInt(JSON.stringify(positions[tileTwo].x)),
        y: parseInt(JSON.stringify(positions[tileTwo].y)),
      },
      useNativeDriver: false,
    }).start();

    Animated.timing(positions[tileTwo], {
      toValue: {
        x: parseInt(JSON.stringify(positions[tileOne].x)),
        y: parseInt(JSON.stringify(positions[tileOne].y)),
      },

      useNativeDriver: false,
    }).start();
  };

  const callculatePositions = () => {
    const positions: Animated.ValueXY[] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const position = new Animated.ValueXY({x: j * 70, y: i * 70});
        positions.push(position);
        console.log(position);
      }
    }
    setPositions(positions);
  };

  React.useEffect(() => {
    callculatePositions();
    setLoading(false);
    console.log(parseInt(JSON.stringify(positions[1].x)));
  }, []);

  return (
    <View>
      {!loading ? (
        <View style={styles.board}>
          {level.map((char, index) => (
            <Animated.View style={positions[index].getLayout()}>
              <View style={[styles.square, {backgroundColor: 'black'}]}>
                <Text style={{fontSize: 24, color: 'white'}}>{char}</Text>
              </View>
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
