import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TileProps {
  char: string;
  size: 'small' | 'large';
  success: boolean;
}

enum SIZES {
  SMALL = 45,
  LARGE = 60,
}

enum FONTSIZES {
  SMALL = 15,
  LARGE = 30,
}

const Tile: React.FC<TileProps> = ({char, size, success}) => {
  const calculateSize = () =>
    size && size === 'small' ? SIZES.SMALL : SIZES.LARGE;
  const calculateFontSize = () =>
    size && size === 'small' ? FONTSIZES.SMALL : FONTSIZES.LARGE;
  const backgroundColor = success === false ? '#3a3a3c' : '#538d4e';

  return (
    <View
      style={[
        styles.container,
        {
          width: calculateSize(),
          height: calculateSize(),
          backgroundColor
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
    color: '#FFFF',
    fontWeight: 'bold',
    fontFamily: 'SigmarOne-Regular',
  },
});

export default Tile;
