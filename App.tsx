import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { addTrack, setupPlayer } from './services/playerService';
import MusicPlayer from './scenes/MusicPlayer';

function App(): JSX.Element {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  useEffect(() => {
    setup();
  }, []);

  async function setup () {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTrack();
    }
    setIsPaylerReady(isSetup);
  }
  
  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.loadingCtn}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  loadingCtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;