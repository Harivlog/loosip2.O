import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, TYPOGRAPHY } from '../../Theme'
import MainHeader from '../../Components/MainHeader'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { videos } from '../../Data/hashTags'
import VideoCard from '../../Components/VideoCard'
import SecondaryVideoCard from '../../Components/VideoCard/SecondaryVideoCard'
import { hp, rfs, wp } from '../../Theme/utiles'
import { ICONS } from '../../../Assets'
import { MainStyle } from '../../Theme/AppStyles'

const SearchDetail = () => {
    const navigation = useNavigation<any>()
    return (
        <View
            style={
                {
                    flex: 1,
                    backgroundColor: COLORS.BG_COLOR
                }
            }
        >
            <MainHeader
                onPressHeart={() => console.log('heart')}
                onPressNotification={() => console.log('notifications')}
                onPressMessage={() => console.log('message')}
                isSearch={false}
                isBackNav={true}
                onBackNavigation={() => navigation.goBack()}
                heading='#GününModu'
            />
            <View style={styles.centerWrapper}>
               <ICONS.videoRecorder/>
               <Text style={[styles.heading,{fontSize : rfs(16),marginTop : hp(4)}]}>Henüz bu başlıkta video paylaşılmadı.</Text>
               <Text style={styles.title}>İlk sen ol ve #GününModu’nu başlat!</Text>
               <TouchableOpacity style={styles.btn}>
                <Text style={[styles.btnText,{fontFamily  :TYPOGRAPHY.Font_BOLD}]}>#GününModu için Video Çek</Text>
                <ICONS.videoRecord/>
               </TouchableOpacity>
            </View>
            {/* <View style={styles.wrapper}>
                <Text style={styles.heading}>12.4K Video · 4.3M Görüntülenme</Text>
                <FlatList
                    data={videos}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom : hp(19),
                        flexGrow :1
                    }}
                    
                    renderItem={({ item }) => <SecondaryVideoCard
                        leftView={false}
                        item={item} />}
                    keyExtractor={(_, i) => i.toString()}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                // showsHorizontalScrollIndicator={false}
                />
            </View>
                <View style={styles.floatingView}>
                    <Text style={styles.floatingText}>#GününModu’nu 10 saniyede anlat</Text>
                    <TouchableOpacity style={[MainStyle.flex_center,{
                        backgroundColor  : COLORS.Pink,
                        paddingHorizontal : wp(2),
                        paddingVertical : hp(1),
                        borderRadius: hp(1)
                    }]}>
                    <Text style={styles.btnText}>katil</Text>
                    <ICONS.videoRecord/>
                    </TouchableOpacity>
                </View> */}
        </View>
    )
}

export default SearchDetail