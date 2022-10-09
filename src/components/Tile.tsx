import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text, {TextTypes} from './Text';

interface TileProps {
  char: string;
  type: TextTypes;
  success: boolean;
  correct?: boolean;
}

enum SIZES {
  SMALL = 45,
  LARGE = 60,
}

const Tile: React.FC<TileProps> = ({char, type, success, correct = false}) => {
  let style = {
    width: SIZES.LARGE,
    height: SIZES.LARGE,
    backgroundColor: '#3a3a3c',
  };

  if (success) {
    style = {
      width: SIZES.SMALL,
      height: SIZES.SMALL,
      backgroundColor: '#538d4e',
    };
  }

  if (correct) {
    style = {
      width: SIZES.LARGE,
      height: SIZES.LARGE,
      backgroundColor: '#b59f3b',
    };
  }

  return (
    <View style={[styles.container, style]}>
      <Text type={type}>{char}</Text>
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
});

export default Tile;
