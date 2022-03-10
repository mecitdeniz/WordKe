import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TileProps {
  char: string;
  size: 'small' | 'large';
}

enum SIZES {
  SMALL = 45,
  LARGE = 60,
}

enum FONTSIZES {
  SMALL = 15,
  LARGE = 30,
}

const Tile: React.FC<TileProps> = ({char, size}) => {
  const calculateSize = () =>
    size && size === 'small' ? SIZES.SMALL : SIZES.LARGE;
  const calculateFontSize = () =>
    size && size === 'small' ? FONTSIZES.SMALL : FONTSIZES.LARGE;
  return (
    <View
      style={[
        styles.container,
        {
          width: calculateSize(),
          height: calculateSize(),
        },
      ]}>
      <Text style={[styles.text, {fontSize: calculateFontSize()}]}>{char}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Fredoka One',
  },
});

export default Tile;
