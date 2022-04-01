import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text, {TextTypes} from './Text';

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text type={TextTypes.TITLE}>
        Word
        <Text type={TextTypes.TITLE} style={styles.text}>
          Ke
        </Text>
      </Text>
      <Text type={TextTypes.SUBTITLE} style={styles.text}>
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
  text: {
    color: '#538d4e',
  },
});

export default Logo;
