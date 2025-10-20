import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { hp, rfs, wp } from "../../Theme/utiles";
import { TYPOGRAPHY } from "../../Theme";
import { ICONS } from "../../../Assets";
 // replace with your play icon import

const VideoCard = ({ item, onPress,leftView }:any) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.8}
      onPress={() => onPress && onPress(item)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={[styles.overlay,!leftView ? { right : wp(2) } : { left : wp(2) } ]}>
        
        <View style={styles.playContainer}>
          <ICONS.play width={wp(4)} height={wp(4)}/>
          <Text style={styles.viewCount}>{item.views}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp(43),
    height: hp(23),
    borderRadius: wp(3),
    overflow: "hidden",
    backgroundColor: "#1C1C28",
    marginRight: wp(4),
    marginBottom: hp(2),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wp(3),
  },
  overlay: {
    position: "absolute",
    bottom: hp(1.5),
    // left: wp(2),
  },
  playContainer: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "rgba(255, 255, 255, 0.08)",
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(2),
  },
  playIcon: {
    width: wp(4.5),
    height: wp(4.5),
    marginRight: wp(2),
    tintColor: "#FFFFFF",
  },
  viewCount: {
    color: "#FFFFFF",
    fontSize: rfs(12), // uses rfs as pixel-based
    fontFamily : TYPOGRAPHY.Font_MEDIUM,
    paddingLeft : wp(1)

  },
});

export default VideoCard;
