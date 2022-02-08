import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  level: string;
}

const LevelBar: React.FC<Props> = ({level}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Level {level}</Text>
      <View style={styles.line} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 60,
    height: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    marginHorizontal: 10,
  },
});

export default LevelBar;
