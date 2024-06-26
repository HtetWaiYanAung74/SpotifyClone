import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {

  const playBackState = usePlaybackState();

  // previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  }

  // next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  }

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon name='skip-previous' size={40} style={styles.icon} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)} style={styles.playButton}>
        <Icon
          name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
          size={40} style={styles.icon}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name='skip-next' size={40} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 56
  },
  icon: {
    color: '#FFFFFF'
  },
  playButton: {
    marginHorizontal: 48
  }
});

export default ControlCenter;