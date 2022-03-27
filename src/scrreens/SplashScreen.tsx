import {useAppOpenAd} from '@react-native-admob/admob';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface SplashScreenProps {
  onSplashDismissed: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({onSplashDismissed}) => {
  const {adLoaded, adDismissed, adLoadError} = useAppOpenAd();

  useEffect(() => {
    async function hide() {
      onSplashDismissed();
    }
    if (adLoaded && (adDismissed || adLoadError)) {
      hide();
    }
  }, [adLoaded, adDismissed, adLoadError, onSplashDismissed]);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
