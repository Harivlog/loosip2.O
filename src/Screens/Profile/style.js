import { StyleSheet } from "react-native";
import { COLORS, TYPOGRAPHY } from "../../Theme";
import { hp, rfs, wp } from "../../Theme/utiles";

export const styles = StyleSheet.create({
    screenHeading:{
        color : COLORS.GRAY2,
        fontSize : rfs(12),
        fontFamily : TYPOGRAPHY.Font_BOLD
    },
    screenBtn:{
        backgroundColor : COLORS.Dark6,
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : wp(5),
        paddingVertical  :hp(2),
        borderRadius : hp(2),
        marginVertical : hp(1)
    },
    btnText:{
        color : COLORS.WHITE,
        fontSize : rfs(13),
        fontFamily : TYPOGRAPHY.Font_MEDIUM,
        paddingLeft : wp(2)
    },
    privateText:{
        color : COLORS.WHITE,
        fontSize : rfs(14),
        fontFamily : TYPOGRAPHY.Font_MEDIUM,
    },
    privateTitle:{
        color : COLORS.GRAY4,
        fontSize : rfs(12),
        fontFamily : TYPOGRAPHY.Font_REGULAR,
        maxWidth : wp(75),
        paddingTop : hp(0.5)
    }
})