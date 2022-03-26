import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';
import Logo from '../components/Logo';

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const handlePressPlay = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
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
