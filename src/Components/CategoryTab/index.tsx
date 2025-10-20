import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TYPOGRAPHY } from '../../Theme';
import { hp, rfs, wp } from '../../Theme/utiles';

const CategoryTab = ({handleSelect,item,setSelectTab,selectTab}:any) => {
    // const isActive = selected === index;
    
  return (
    <TouchableOpacity
        onPress={handleSelect}
        style={[
          styles.tabButton,
          selectTab === item.label && styles.activeButton,
        ]}
      >
        <Text style={[styles.tabText, selectTab && styles.activeText]}>
          {item.label}
        </Text>
      </TouchableOpacity>
  )
}

export default CategoryTab

const styles = StyleSheet.create({
    listContent: {
        paddingHorizontal: wp(4),
      },
      tabButton: {
        paddingVertical: hp(1),
        paddingHorizontal: wp(5),
        marginRight: wp(3),
        borderRadius: wp(6),
        backgroundColor: "transparent",
      },
      activeButton: {
        backgroundColor: "#7A3CF3", // purple active background
      },
      tabText: {
        color: "#FFFFFF",
        fontSize: rfs(12),
        fontFamily: TYPOGRAPHY.Font_MEDIUM,
      },
      activeText: {
        color: "#FFFFFF",
      },
})