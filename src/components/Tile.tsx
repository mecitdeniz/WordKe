import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TileProps {
  char: string;
}

const Tile: React.FC<TileProps> = ({char}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{char}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Tile;
