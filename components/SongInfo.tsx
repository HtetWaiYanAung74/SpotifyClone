import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Track } from 'react-native-track-player';

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined
}>

const SongInfo = ({track}: SongInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>
          {track?.title}
        </Text>
        <Text style={styles.artist}>
          {track?.artist}  .  {track?.album}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    marginTop: 18
  },
  name: {
    marginBottom: 8,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800'
  },
  artist: {
    color: '#D9D9D9',
    textAlign: 'center'
  }
});

export default SongInfo;