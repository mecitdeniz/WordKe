import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import Tile from '../components/Tile';

type WinScreeenRoutetype = RouteProp<RootStackParams, 'Win'>;
const WinScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {
    params: {goal},
  } = useRoute<WinScreeenRoutetype>();

  const handlePressPlay = () => {
    navigation.navigate('Game');
  };

  const renderRows = (rowIndex: number) => {
    return (
      <View style={styles.row}>
        {goal[rowIndex].map((char, index) => (
          <View key={`tile_${rowIndex}_${index}`}>
            <Tile char={char} key={'' + index} />
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Win</Text>
      <View style={styles.board}>
        {renderRows(0)}
        {renderRows(1)}
        {renderRows(2)}
      </View>
      <TouchableOpacity onPress={handlePressPlay} style={styles.btn}>
        <Text style={styles.text}>New Game</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 35,
  },
  board: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  btn: {
    backgroundColor: '#000000',
    height: 80,
    width: 220,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  btnSmall: {
    backgroundColor: '#000000',
    height: 80,
    width: 105,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: '#000000',
    fontSize: 36,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
});

export default WinScreen;
