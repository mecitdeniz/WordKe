import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParams} from '../../App';

import Logo from '../components/Logo';
import Banner from '../components/ads/Banner';

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handlePressPlay = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0000" hidden />

      <Logo />

      <TouchableOpacity onPress={handlePressPlay} style={styles.btn}>
        <Text style={styles.text}>Oyna</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity style={styles.btnSmall}>
          <Text style={styles.text}>Temalar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSmall}>
          <Text style={styles.text}>Ayarlar</Text>
        </TouchableOpacity>
      </View>

      <Banner />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#121213',
  },
  btn: {
    backgroundColor: '#3a3a3c',
    height: 80,
    width: 220,
    borderRadius: 15,
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
    marginTop: 30,
  },
  btnSmall: {
    backgroundColor: '#3a3a3c',
    height: 80,
    width: 105,
    borderRadius: 15,
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
    fontFamily: 'Fredoka One',
  },
  title: {
    color: '#FFFF',
    fontSize: 36,
    fontFamily: 'Fredoka One',
  },
  row: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
