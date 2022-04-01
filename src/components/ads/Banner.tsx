import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from '@react-native-admob/admob';

const Banner: React.FC = () => {
  return (
    <View style={styles.container}>
      <BannerAd
        size={BannerAdSize.BANNER}
        unitId={TestIds.BANNER}
        onAdLoaded={() => console.log('Banner Ad loaded!')}
        onAdFailedToLoad={error => console.log('Fail:', error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 30,
    height: 45,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
});

export default Banner;
