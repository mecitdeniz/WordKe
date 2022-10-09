import {useAppOpenAd} from '@react-native-admob/admob';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../../components/Logo';

interface SplashScreenProps {
  onSplashDismissed: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({onSplashDismissed}) => {
  const {adLoaded, adDismissed, adLoadError} = useAppOpenAd();

  useEffect(() => {
    if (adLoaded && (adDismissed || adLoadError)) {
      onSplashDismissed();
    }
  }, [adLoaded, adDismissed, adLoadError, onSplashDismissed]);

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
