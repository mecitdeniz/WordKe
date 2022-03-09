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
    params: {goal, count},
  } = useRoute<WinScreeenRoutetype>();

  const handlePressPlay = () => {
    navigation.replace('Game');
  };

  const renderRows = (rowIndex: number) => {
    return (
      <View style={styles.row}>
        {goal[rowIndex].map((char, index) => (
          <View key={`tile_${rowIndex}_${index}`}>
            <Tile char={char} size="small" key={'' + index} />
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tebrikler! Doğru bir sıralama buldun ⭐⭐⭐
      </Text>
      <View style={styles.board}>
        <View>
          {renderRows(0)}
          {renderRows(1)}
          {renderRows(2)}
        </View>
        <View>
          <Text style={styles.count}>
            Hamle Sayısı :{' '}
            <Text style={{fontWeight: 'bold', fontSize: 22}}>{count}</Text>
          </Text>
          <TouchableOpacity style={styles.btnShare}>
            <Text style={[styles.text, {color: '#000000'}]}>Paylaş</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlePressPlay}
            style={styles.btnPlayAgain}>
            <Text style={styles.text}>Yeni Oyun</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#A9A9A9',
    width: '100%',
    height: 300,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnShare: {
    backgroundColor: '#FFFFFF',
    height: 45,
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnPlayAgain: {
    backgroundColor: '#000000',
    height: 45,
    width: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
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
    fontSize: 16,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 300,
  },
  count: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
  },
});

export default WinScreen;
