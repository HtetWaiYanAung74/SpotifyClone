import Slider from '@react-native-community/slider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useProgress } from 'react-native-track-player';

const SongSlider = () => {

  const { duration, position } = useProgress();

  return (
    <View>
      <Slider
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbTintColor='#FFF'
        maximumTrackTintColor='#FFF'
        style={styles.sliderContainer}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {new Date(position * 1000).toISOString().substring(15, 19)}
        </Text>
        <Text style={styles.time}>
          {new Date((duration - position) * 1000).toISOString().substring(15, 19)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    width: 350,
    height: 40,
    flexDirection: 'row',
    marginTop: 25
  },
  timeContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    color: '#FFF'
  }
});

export default SongSlider;