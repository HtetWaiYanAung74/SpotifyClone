import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
import TrackPlayer, {
  Event, Track, useTrackPlayerEvents
} from 'react-native-track-player';
import ControlCenter from '../components/ControlCenter';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import { playListData } from '../utils/constants';

const {width} = Dimensions.get('window');

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>();

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
      switch (event.type) {
        case Event.PlaybackTrackChanged:
          const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
          setTrack(playingTrack);
          break;
      }
    })

    const renderArtWork = () => {
      return(
        <View style={styles.listArtWrapper}>
          <View style={styles.albumContainer}>
            {track?.artwork && (
              <Image
                source={{uri: track?.artwork?.toString()}}
                style={styles.albumArtImg}
              />
            )}
          </View>
        </View>
      );
    }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001D23',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listArtWrapper: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  albumContainer: {
    width: 300,
    height: 300
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4
  }
});  

export default MusicPlayer;