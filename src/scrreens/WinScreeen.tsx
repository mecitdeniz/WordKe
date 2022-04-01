import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import Tile from '../components/Tile';
import Logo from '../components/Logo';
import Text, {TextTypes} from '../components/Text';

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
            <Tile char={char} type={TextTypes.SUBTITLE} key={'' + index} success={true} />
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0000" hidden />

      <Logo />

      <Text type={TextTypes.DEFAULT} style={styles.winText}>
        Tebrikler! Sıralamayı buldun ⭐⭐⭐
      </Text>

      <View style={styles.board}>
        
        <View>
          {renderRows(0)}
          {renderRows(1)}
          {renderRows(2)}
        </View>

        <View style={{marginTop: 60}}>
          
          <Text type={TextTypes.SUBTITLE} style={{marginLeft:10}}>
            Hamle Sayısı :{' '}
            <Text type={TextTypes.DEFAULT} style={{color: '#538d4e'}}>
              {count}
            </Text>
          </Text>

          <TouchableOpacity
            onPress={handlePressPlay}
            style={styles.btnPlayAgain}>
            <Text type={TextTypes.SUBTITLE}>Yeni Oyun</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 35,
    backgroundColor: '#121213',
  },
  board: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#3a3a3c',
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
  btnPlayAgain: {
    backgroundColor: '#121213',
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
  winText: {
    color: '#FFFF',
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 30,
    maxWidth: 300,
  },
  row: {
    flexDirection: 'row',
  },
});

export default WinScreen;
