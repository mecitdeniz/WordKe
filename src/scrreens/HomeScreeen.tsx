import React, {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import GameContext from '../GameContext';

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const {count, increment} = useContext(GameContext);
  const handlePressPlay = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WordKe {count}</Text>
      <TouchableOpacity onPress={handlePressPlay} style={styles.btn}>
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnSmall} onPress={increment}>
          <Text style={styles.text}>Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSmall}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 45}}>
        {/* <BannerAd
          size={BannerAdSize.BANNER}
          unitId={TestIds.BANNER}
          onAdLoaded={() => console.log('Banner Ad loaded!')}
          onAdFailedToLoad={error => console.log('Fail:', error)}
        /> */}
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

export default HomeScreen;
