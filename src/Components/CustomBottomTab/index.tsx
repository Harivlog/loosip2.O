import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS, TYPOGRAPHY } from "../../Theme";
import { ICONS } from "../../../Assets";
import { hp, wp } from "../../Theme/utiles";
import LinearGradient from "react-native-linear-gradient";

const Tab = createBottomTabNavigator();


export function CustomTabBar({ state, descriptors, navigation }: any) {
    return (
       <View style={{
        backgroundColor : COLORS.BG_COLOR
       }}>
         <LinearGradient 
          colors={["rgba(13,13,32,1)", "rgba(21,21,52,1)"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            
          }}
         >
         <View style={styles.tabContainer}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: COLORS.Dark4,
                width: wp(93),
                // alignSelf: 'center',
                borderRadius: hp(2),
                paddingVertical : hp(0.5),
                paddingHorizontal : wp(0.6),
                height : hp(8.5)

            }}>
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    // Middle button
                    if (route.name === "Create") {
                        return (
                            <TouchableOpacity
                                key={route.key}
                                style={styles.middleButton}
                                onPress={() => console.log("Center Button Pressed")}
                            >
                                <View style={{
                                    transform: [{ rotate: "-45deg" }],
                                }}>
                                    <ICONS.plus />
                                </View>
                            </TouchableOpacity>
                        );
                    }

                    return (
                        <TouchableOpacity
                            key={route.key}
                            onPress={() => navigation.navigate(route.name)}
                            style={[styles.tabButton, isFocused && styles.activeTab]}
                        >




                            {
                                route?.name === 'Keşfet' ? <ICONS.home /> :
                                    route.name === "Gündem" ? <ICONS.search /> :
                                        route.name === "VideoCall" ? <ICONS.video /> :
                                            <ICONS.profile fill={isFocused ? COLORS.WHITE : COLORS.GRAY} />
                            }


                            <Text style={[styles.label, isFocused && { color: "#fff" }]}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>

         </LinearGradient>
       </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, alignItems: "center", justifyContent: "center",backgroundColor : 'blue' },
    tabContainer: {
      
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',


    },
    tabButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: hp(1),
        paddingHorizontal: wp(3)
    },
    label: {
        fontSize: 12,
        color: "#aaa",
        marginTop: 3,
    },
    activeTab: {
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: 10,
    },
    middleButton: {
        // position: "absolute",
        // bottom: 0,
        alignSelf: "center",
        width: 67,
        height: 67,
        borderRadius: 17,
        backgroundColor: "#FF2EBE",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#FF2EBE",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        elevation: 10,
        transform: [{ rotate: "-45deg" }],

    },
    plus: {
        fontSize: 40,
        color: "#fff",
        fontFamily: TYPOGRAPHY.Font_MEDIUM,

        textAlign: 'center',
        padding: 0,
        margin: 0

    },
});