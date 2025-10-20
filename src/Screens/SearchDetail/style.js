import { StyleSheet } from "react-native";
import { hp, rfs, wp } from "../../Theme/utiles";
import { COLORS, TYPOGRAPHY } from "../../Theme";

export const styles = StyleSheet.create({
    wrapper:{
              paddingBottom : hp(10),
              flexGrow :1,
    },
    heading:{
           color  :COLORS.WHITE,
           fontSize : rfs(12),
           fontFamily  :TYPOGRAPHY.Font_MEDIUM,
           marginVertical : hp(1.6),
           marginLeft : wp(5)
       },
       floatingView:{
        position : 'absolute',
        bottom : hp(1),
        backgroundColor : COLORS.Dark5,
        width  :wp(90),
        borderRadius : hp(2),
        paddingVertical : hp(1.6),
        flexDirection  : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        alignSelf : 'center',
        paddingHorizontal : wp(4),
       },
       floatingText:{
        color  :COLORS.WHITE,
        fontSize : rfs(11),
        fontFamily  :TYPOGRAPHY.Font_MEDIUM,
       
       },
       btnText:{
        color  :COLORS.WHITE,
        fontSize : rfs(11),
        fontFamily  :TYPOGRAPHY.Font_MEDIUM,
        paddingRight : wp(2)
       },
       title:{
        color  :COLORS.GRAY,
        fontSize : rfs(12),
        fontFamily  :TYPOGRAPHY.Font_REGULAR,

       },
       centerWrapper:{
         flexGrow : 1,
         alignItems : 'center',
         justifyContent : 'center'
       },
       btn:{
         backgroundColor : COLORS.Pink,
         borderRadius : hp(2),
         flexDirection : 'row',
         paddingVertical : hp(1.5),
         paddingHorizontal:  wp(3.4),
         marginVertical : hp(3)
       }
})