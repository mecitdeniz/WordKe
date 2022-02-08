import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  TrackingStatus,
  getTrackingStatus,
  requestTrackingPermission,
} from 'react-native-tracking-transparency';

import GameScreen from './src/scrreens/GameSceen';

const App = () => {
  const [trackingStatus, setTrackingStatus] = React.useState<
    TrackingStatus | '(loading)'
  >('(loading)');

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
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <GameScreen />
    </SafeAreaView>
  );
};

export default App;
