import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Word<Text style={{color: '#538d4e'}}>Ke</Text>
      </Text>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#538d4e'}}>
        Türkçe
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFF',
    fontSize: 36,
    fontFamily: 'Fredoka One',
    marginTop: 30,
  },
  lang: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontFamily: 'Fredoka One',
  },
});

export default Logo;
