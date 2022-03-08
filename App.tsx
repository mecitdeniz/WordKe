import {TestIds, AppOpenAdProvider} from '@react-native-admob/admob';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TrackingStatus,
  getTrackingStatus,
  requestTrackingPermission,
} from 'react-native-tracking-transparency';

import GameScreen from './src/scrreens/GameSceen';
import HomeScreen from './src/scrreens/HomeScreeen';
import WinScreen from './src/scrreens/WinScreeen';
import SplashScreen from './src/scrreens/SplashScreen';
import GameProvider from './src/GameProvider';

export type RootStackParams = {
  Home: any;
  Game: any;
  Win: {goal: string[][]};
};

const Stack = createNativeStackNavigator<RootStackParams>();

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

  // React.useEffect(() => {
  //   getTrackingStatus()
  //     .then(status => {
  //       setTrackingStatus(status);
  //       console.log('Check:', status);
  //       if (status === 'not-determined') {
  //         console.log('Request');
  //         request();
  //       }
  //       if (
  //         trackingStatus === 'authorized' ||
  //         trackingStatus === 'unavailable'
  //       ) {
  //         // TODO: enable tracking features
  //       }
  //     })
  //     .catch(e => console.log('Error', e?.toString?.() ?? e));
  // }, []);

  // return (
  //   <AppOpenAdProvider
  //     unitId={TestIds.APP_OPEN}
  //     options={{showOnColdStart: true, loadOnDismissed: splashDismissed}}>
  //     <SafeAreaView
  //       style={{
  //         flex: 1,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       <GameProvider>
  //         {splashDismissed ? (
  //           <GameScreen />
  //         ) : (
  //           <SplashScreen onSplashDismissed={() => setSplashDismissed(true)} />
  //         )}
  //       </GameProvider>
  //     </SafeAreaView>
  //   </AppOpenAdProvider>
  // );
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Win"
            component={WinScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;
