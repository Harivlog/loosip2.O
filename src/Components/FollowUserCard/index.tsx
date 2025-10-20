import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hp, rfs, wp } from '../../Theme/utiles'
import { COLORS, TYPOGRAPHY } from '../../Theme'

const FollowUserCard = (item: any) => {
    console.log(item?.item, 'line 7')
    const items = item?.item
    return (
        <View style={styles.card}>
            <View>
                {/* Category */}
                <Text style={styles.categoryText}>
                    {items.type === "account" ? "Hesaplar" : "Başlıklar"}
                </Text>

                {/* Account */}
                {items.type === "account" ? (
                    <View style={styles.row}>
                        <View style={styles.userSection}>
                            <Image source={{ uri: items.image }} style={styles.avatar} />
                            <View style={{ marginLeft: wp(3) }}>
                                <Text style={styles.username}>{items.name}</Text>
                                <Text style={styles.handle}>@{items.username}</Text>
                            </View>
                        </View>

                    </View>
                ) : (
                    // Hashtag
                    <View style={styles.row}>
                        <Text style={styles.hashtag}>{items.title}</Text>

                    </View>
                )}
            </View>
            {!items.isFollowing && (
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followText}>Takip Et</Text>
                </TouchableOpacity>
            )}
            {
                items?.type !== 'account' && <Text style={styles.videoCount}>{items.videoCount} video</Text>
            }
        </View>
    )
}

export default FollowUserCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1C1C28",
        borderRadius: wp(3),
        marginVertical: hp(0.8),
        paddingVertical: hp(1.8),
        paddingHorizontal: wp(4),
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryText: {
        color: "#FF4FB3",
        fontSize: rfs(12),
        // marginBottom: hp(0.6),
        fontFamily: TYPOGRAPHY.Font_MEDIUM
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    userSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: wp(10),
        height: wp(10),
        borderRadius: wp(5),
    },
    username: {
        color: COLORS.WHITE,
        fontSize: rfs(12),
        fontFamily: TYPOGRAPHY.Font_BOLD


    },
    handle: {
        color: COLORS.WHITE,
        fontSize: rfs(13),
        fontFamily: TYPOGRAPHY.Font_MEDIUM
    },
    followButton: {
        backgroundColor: COLORS.Pink,
        paddingHorizontal: wp(4),
        paddingVertical: hp(0.8),
        borderRadius: wp(4),
    },
    followText: {
        color: "#FFFFFF",
        fontSize: rfs(12),
        fontWeight: "600",
    },
    hashtag: {
        color: "#FFFFFF",
        fontSize: rfs(14),
        fontFamily: TYPOGRAPHY.Font_MEDIUM
    },
    videoCount: {
        color: COLORS.GRAY,
        fontSize: rfs(12),
        fontFamily: TYPOGRAPHY.Font_MEDIUM
    },
})


