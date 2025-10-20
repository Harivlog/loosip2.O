import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../Theme";
import { hp, rfs, wp } from "../../Theme/utiles";

export const style = StyleSheet.create({
    wrapper:{
      paddingHorizontal : wp(4),
      marginVertical : hp(2),
      paddingBottom : hp(25)

    },
    heading:{
        color  :COLORS.WHITE,
        fontSize : rfs(14),
        fontFamily  :TYPOGRAPHY.Font_MEDIUM
    },
    listContainer: {
        paddingVertical: hp(1),
        paddingBottom : hp(25)
      },
      itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1C1C28",
        marginVertical: hp(0.6),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(4),
        borderRadius: wp(2.5),
      },
      indexText: {
        color: "#FF4FB3",
        fontSize: rfs(16),
        fontWeight: "700",
        marginRight: wp(2),
      },
      textContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      hashtagText: {
        color: "#FFFFFF",
        fontSize: rfs(13),
        fontFamily  :TYPOGRAPHY.Font_MEDIUM
      },
      videoCount: {
        color: "#B0B0B8",
        fontSize: rfs(12),
        fontFamily : TYPOGRAPHY.Font_MEDIUM
      },
      container: {
        paddingTop: hp(1),
        paddingBottom : hp(2)
      },
      listContent: {
        // paddingHorizontal: wp(4),
      },
      searchText:{
        color : COLORS.WHITE,
        fontSize : rfs(12),
        fontFamily  :TYPOGRAPHY.Font_REGULAR,
        marginBottom : hp(1.7)
      }
})