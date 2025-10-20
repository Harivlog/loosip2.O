import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { hp, rfs, wp } from "../../Theme/utiles";
import { ICONS } from "../../../Assets";
import Reuse_TextInput from "../ReuseTextInput";
import { COLORS, TYPOGRAPHY } from "../../Theme";

const MainHeader = ({
  onPressHeart,
  onPressNotification,
  onPressMessage,
  isSearch,
  query,
  setQuery,
  setIsSearchFocused,
  isSearchFocused,
  isBackNav,
  onBackNavigation,
  heading,

}: {
  onPressHeart?: () => void;
  onPressNotification?: () => void;
  onPressMessage?: () => void;
  isSearch?: boolean;
  query?: string;
  setQuery?: any;
  setIsSearchFocused?: any;
  isSearchFocused ?: boolean;
  isBackNav : boolean,
  onBackNavigation : any,
  heading?: string

}) => {

  return (
    <LinearGradient
      colors={["rgba(13,13,32,1)", "rgba(21,21,52,1)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent : 'space-between',
          width : wp(90)
        }}
      >
        {/* Left logo */}
        {
          isBackNav ? <View style={{
            flexDirection : 'row',
            alignItems : 'center'
          }}>
            <ICONS.backArrow/>
            <Text style={styles.heading}>{heading}</Text>
          </View> : 
        <ICONS.logo width={rfs(72)} height={rfs(24)} />
        }

        {/* Center (spacer) */}
        {/* <View style={{ flex: 1,backgroundColor:'red' }} /> */}

        {/* Heart Count */}
        <View style={{
           flexDirection : 'row',
            alignItems : 'center'
        }}>
        <TouchableOpacity onPress={onPressHeart} style={styles.likesBox}>
          <Text style={styles.likesText}>5590</Text>
          <ICONS.heart />
        </TouchableOpacity>

        {/* Notification */}
        <TouchableOpacity onPress={onPressNotification} style={styles.iconWrapper}>
          <ICONS.notification />
        </TouchableOpacity>

        {/* Message */}
        <TouchableOpacity onPress={onPressMessage} style={styles.iconWrapper}>
          <ICONS.message />
        </TouchableOpacity>
        </View>
      </View>
      <View>
        {
          isSearch &&
        <Reuse_TextInput
          value={query}
          onChangeText={setQuery}
          isFocus={isSearchFocused}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          CustomInputStyle={{
            marginBottom: 0,
            marginTop: hp(1.5),
            height: 48
          }}
          placeholder={'Başlık veya kullanıcı ara'}
          addLeft={<ICONS.search2 />}
          placeholderTextColor={COLORS.GRAY}
        />
        }
      </View>
    </LinearGradient>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {

    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingTop: hp(6),
    paddingBottom: hp(2),
    borderBottomLeftRadius: hp(4),
    borderBottomRightRadius: hp(4),
    

  },
  likesBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: wp(3),
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.8),
  },
  likesText: {
    color: "#FF4D9E",
    fontSize: rfs(13),
    fontWeight: "700",
    marginRight: wp(1),
  },
  iconWrapper: {
    marginLeft: wp(3),
  },
  heading:{
    color: COLORS.WHITE,
    fontSize: rfs(14),
    fontFamily : TYPOGRAPHY.Font_MEDIUM,
    paddingLeft : wp(2)
  }
});
