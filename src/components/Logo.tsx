import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text, {TextTypes} from './Text';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text type={TextTypes.TITLE}>
        Word<Text type={TextTypes.TITLE} style={{color: '#538d4e'}}>Ke</Text>
      </Text>
      <Text type={TextTypes.SUBTITLE}>Türkçe</Text>
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
    fontFamily: 'SigmarOne-Regular',
    marginTop: 30,
  },
  lang: {
    fontSize: 16,
    color: '#538d4e',
    fontWeight: 'bold',
    fontFamily: 'SigmarOne-Regular',
  },
});

export default Logo;
