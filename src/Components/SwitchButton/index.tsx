import React, { useEffect, useRef } from "react";
import { TouchableOpacity, Animated, View, StyleSheet } from "react-native";
import { hp, rfs, wp } from "../../Theme/utiles";

const SwitchButton = ({
  value = false,
  onToggle,
  activeColor = "#34C759",
  inactiveColor = "#E5E5EA",
  circleColor = "#fff",
  width = wp(12),
  height = hp(3),
  label,
  labelColor = "#000",
  style,
}) => {
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: value ? 1 : 0,
      useNativeDriver: false,
      friction: 6,
      tension: 100,
    }).start();
  }, [value]);

  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [wp(1), width - hp(3) - wp(1)],
  });

  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveColor, activeColor],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
      style={[styles.container, style]}
    >
      <Animated.View
        style={[
          styles.track,
          {
            width,
            height,
            borderRadius: height / 2,
            backgroundColor: bgColor,
            paddingHorizontal : wp(1)
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              width: height - wp(0.5),
              height: height - wp(0.5),
              borderRadius: (height - wp(0.5)) / 2,
              transform: [{ translateX }],
              backgroundColor: circleColor,
            },
          ]}
        />
      </Animated.View>

     
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  track: {
    justifyContent: "center",
    padding: wp(1),
  },
  thumb: {
    position: "absolute",
    top: wp(0.25),
  },
});

export default SwitchButton;
