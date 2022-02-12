import {TestIds, AppOpenAdProvider} from '@react-native-admob/admob';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  TrackingStatus,
  getTrackingStatus,
  requestTrackingPermission,
} from 'react-native-tracking-transparency';
import GameProvider from './src/GameProvider';

import GameScreen from './src/scrreens/GameSceen';
import SplashScreen from './src/scrreens/SplashScreen';

const App = () => {
  const [trackingStatus, setTrackingStatus] = useState<
    TrackingStatus | '(loading)'
  >('(loading)');

  const [splashDismissed, setSplashDismissed] = useState(false);

  const request = async () => {
    try {
      const status = await requestTrackingPermission();
      if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
        // TODO: enable tracking features
      }
      setTrackingStatus(status);
      console.log('Request:', status);
    } catch (e: any) {
      console.log('Error', e?.toString?.() ?? e);
    }
  };

  React.useEffect(() => {
    getTrackingStatus()
      .then(status => {
        setTrackingStatus(status);
        console.log('Check:', status);
        if (status === 'not-determined') {
          console.log('Request');
          request();
        }
        if (
          trackingStatus === 'authorized' ||
          trackingStatus === 'unavailable'
        ) {
          // TODO: enable tracking features
        }
      })
      .catch(e => console.log('Error', e?.toString?.() ?? e));
  }, []);

  return (
    <AppOpenAdProvider
      unitId={TestIds.APP_OPEN}
      options={{showOnColdStart: true, loadOnDismissed: splashDismissed}}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <GameProvider>
          {splashDismissed ? (
            <GameScreen />
          ) : (
            <SplashScreen onSplashDismissed={() => setSplashDismissed(true)} />
          )}
        </GameProvider>
      </SafeAreaView>
    </AppOpenAdProvider>
  );
};

export default App;
