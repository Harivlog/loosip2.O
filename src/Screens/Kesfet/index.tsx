import { View, Text, FlatList, StyleSheet, TouchableOpacity, Pressable, Animated, Image, Share } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MainHeader from '../../Components/MainHeader';
import { hp, rfs, wp } from '../../Theme/utiles';
import Video from 'react-native-video';
import { ICONS } from '../../../Assets';
import { COLORS, TYPOGRAPHY } from '../../Theme';
import ProgressBar from 'react-native-progress-bar-horizontal';

const Kesfet = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 80 });

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check this video on Loosip`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const DATA = [
    {
      id: '1',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      likes: 12500,
      comments: 255,
      description:
        'It is a long established fact that a reader',
      hastag: ['#GününSorusu'],
      tag: ['@kullanıcıadi']
    },
    {
      id: '2',
      video: 'https://www.w3schools.com/html/movie.mp4',
      likes: 8700,
      comments: 123,
      description:
        'Just keep moving forward lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      hastag: ['#GününSorusu'],
      tag: ['@kullanıcıadi'],
    },
  ];

  const renderItem = ({ item, index }: any) => (
    <VideoCard
      videoUrl={item.video}
      caption={item.caption}
      likes={item.likes}
      hastag={item.hastag}
      description={item?.description}
      tag={item?.tag}
      isActive={index === currentIndex}
      comments={item?.comments}
      onShare={() => onShare()}
    />
  );

  return (
    <View style={styles.screen}>
      <MainHeader
        onPressHeart={() => console.log('heart')}
        onPressNotification={() => console.log('notifications')}
        onPressMessage={() => console.log('message')}
        isSearch={false}
      />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}

      />
      
    </View>
  );
};

export default Kesfet;

// ===========================================================
// Video Card Component
// ===========================================================

function VideoCard({ videoUrl, caption, likes, comments, isActive, description, hastag, tag, onShare }: any) {
  const [paused, setPaused] = useState(true);
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [toggleDes, setToggleDes] = useState(false)
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0); // from 0 → 1
  const [duration, setDuration] = useState(0); // total video length
  const playerRef = useRef<any>(null);
  const progressBarWidth = useRef(0);


  useEffect(() => {
    setPaused(!isActive);
  }, [isActive]);



  const togglePlayPause = () => {
    setPaused((prev) => {
      const newState = !prev;

      // Animate the icon opacity
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }).start();
        }, 400);
      });

      return newState;
    });
  };

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikeCount((prev: number) => (newLiked ? prev + 1 : prev - 1));

    // Bounce animation
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1.1,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.card}>


      <Video
        ref={playerRef}
        source={{ uri: videoUrl }}
        style={styles.video}
        resizeMode="cover"
        repeat
        paused={paused}
        volume={volume}
        onLoad={({ duration }) => setDuration(duration)}
        onProgress={({ currentTime }) => {
          if (duration > 0) {
            setProgress(currentTime / duration);
          }
        }}
      />

      <Pressable style={StyleSheet.absoluteFill} onPress={togglePlayPause} />

      {/* Animated play/pause icon */}
      <Animated.View style={[styles.centerIconContainer, { opacity: fadeAnim }]}>
        {paused ? (
          <ICONS.play fill="white" width={wp('12%')} height={wp('12%')} />
        ) : (
          <ICONS.Pause fill="white" width={wp('12%')} height={wp('12%')} />
        )}
      </Animated.View>

      <View style={styles.overlay} pointerEvents="box-none">
        <View style={styles.bottomText}>
          <Text numberOfLines={1} style={[styles.caption, { fontSize: rfs(19), fontFamily: TYPOGRAPHY.Font_BOLD, color: COLORS.Pink }]}>
            {hastag}
          </Text>
          <Text numberOfLines={2} style={[styles.caption, { fontSize: rfs(17), marginTop: hp(1), fontFamily: TYPOGRAPHY.Font_REGULAR, color: COLORS.WHITE }]}>
            {tag}
          </Text>
          <Text numberOfLines={toggleDes ? 20 : 2}
            onPress={() => setToggleDes(!toggleDes)}
            style={styles.caption}>
            {description}
          </Text>
          <View style={styles.volumeContainer}>


            <View style={styles.progressContainer}>
              <TouchableOpacity
                style={{ flex: 1 }}
                activeOpacity={1}
                onPress={(e) => {
                  const touchX = e.nativeEvent.locationX;
                  const seekRatio = touchX / progressBarWidth.current;
                  const seekTime = seekRatio * duration;
                  playerRef.current?.seek(seekTime);
                  setProgress(seekRatio);
                }}
              >
                <ProgressBar
                  progress={progress}
                  fillColor={COLORS.Pink}
                  unfilledColor="#ddd"
                  borderWidth={0}
                  height={hp('0.8%')}
                  borderRadius={hp('1%')}
                // animationType="spring"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setVolume(volume === 0 ? 1 : 0)}
              style={styles.speakerIcon}
            >
              {volume !== 0 ? (
                <ICONS.VolumeHigh width={wp('6%')} height={wp('6%')} fill="white" />
              ) : (
                <ICONS.VolumeOff width={wp('6%')} height={wp('6%')} fill="white" />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => console.log('Comments clicked')} style={styles.actionItem}>
            <View>
              <Image style={{
                width: wp(10),
                height: wp(10),
                borderRadius: hp(10)
              }} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
              <View style={styles.plus}>
                <ICONS.plus1 width={wp('4%')} height={wp('4%')} />

              </View>
            </View>
            <Text style={styles.text}>{comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleLike} style={styles.actionItem}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              {liked ? (
                <ICONS.heart fill="red" width={wp('7%')} height={wp('7%')} />
              ) : (
                <ICONS.heartLite fill="white" width={wp('7%')} height={wp('7%')} />
              )}
            </Animated.View>
            <Text style={styles.text}>{likeCount}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Comments clicked')} style={styles.actionItem}>
            <ICONS.message width={wp('6%')} height={wp('6%')} />
            <Text style={styles.text}>{comments}</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={onShare} style={styles.actionItem}>
            <ICONS.send width={wp('7%')} height={wp('7%')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Profile clicked')} style={[styles.actionItem, {
            alignItems: 'center',
            justifyContent: 'center'
          }]}>
            <ICONS.disk />
            <Image style={{
              width: wp(6),
              height: wp(6),
              borderRadius: hp(10),
              position: 'absolute',
            }} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ===========================================================
// Styles
// ===========================================================

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#000',
  },
  card: {
    height: hp('80%'),
    width: wp('100%'),
    backgroundColor: 'black',
  },
  video: {
    height: hp('80%'),
    width: wp('100%'),
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
  },
  bottomText: {
    position: 'absolute',
    bottom: hp('3%'),
    left: wp('4%'),
    right: wp('26%'),
  },
  caption: {
    color: '#fff',
    fontSize: rfs(14),
    lineHeight: rfs(18),
  },
  actions: {
    position: 'absolute',
    right: wp('5%'),
    bottom: hp('6%'),
    alignItems: 'center',
  },
  actionItem: {
    alignItems: 'center',
    marginBottom: hp('2.2%'),
  },
  text: {
    color: 'white',
    fontSize: rfs(12),
    marginTop: hp('0.6%'),
  },
  centerIconContainer: {
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  volumeContainer: {
    // position: 'absolute',

    // bottom: hp('1.5%'),
    // left: wp('5%'),
    // right: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  speakerIcon: {
    marginLeft: wp('3%'),

  },
  progressWrapper: {
    flex: 1,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
