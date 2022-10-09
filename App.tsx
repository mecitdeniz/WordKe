import {TestIds, AppOpenAdProvider} from '@react-native-admob/admob';
import React, {useEffect, useState} from 'react';

import {
  TrackingStatus,
  getTrackingStatus,
  requestTrackingPermission,
} from 'react-native-tracking-transparency';

import Navigation from './src/navigation/Navigation';
import SplashScreen from './src/screens/Splash/SplashScreen';

enum TrackingStatusTypes {
  UNAVAILABLE = 'unavailable',
  DENIED = 'denied',
  AUTHORIZED = 'authorized',
  RESTRICTED = 'restricted',
  NOT_DETERMINED = 'not-determined',
  LOADING = '(loading)',
}

const App = () => {
  const [trackingStatus, setTrackingStatus] = useState<
    TrackingStatus | TrackingStatusTypes.LOADING
  >(TrackingStatusTypes.LOADING);

  const [splashDismissed, setSplashDismissed] = useState(false);

  const checkTrackingPermission = async () => {
    try {
      const status = await requestTrackingPermission();
      setTrackingStatus(status);
      console.log('Tracking:', status);
    } catch (e: any) {
      console.log('Error', e?.toString?.() ?? e);
    }
  };

  const onSplashDismissed = () => {
    setSplashDismissed(true);
  };

  useEffect(() => {
    getTrackingStatus()
      .then(status => {
        setTrackingStatus(status);
        console.log('Tracking:', status);
        if (status === TrackingStatusTypes.NOT_DETERMINED) {
          checkTrackingPermission();
        }
        if (
          trackingStatus === TrackingStatusTypes.AUTHORIZED ||
          trackingStatus === TrackingStatusTypes.UNAVAILABLE
        ) {
          // TODO: enable tracking features
        }
      })
      .catch(e => console.log('Error', e?.toString?.() ?? e));
  }, []);

  return (
    <AppOpenAdProvider
      unitId={TestIds.APP_OPEN}
      options={{
        showOnAppForeground: false,
        showOnColdStart: true,
        loadOnDismissed: splashDismissed,
      }}>
      {splashDismissed ? (
        <Navigation />
      ) : (
        <SplashScreen onSplashDismissed={onSplashDismissed} />
      )}
    </AppOpenAdProvider>
  );
};

export default App;
