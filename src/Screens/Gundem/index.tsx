import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Theme'
import MainHeader from '../../Components/MainHeader'
import { style } from './style'
import { hashtags, trendingItems, videos } from '../../Data/hashTags'
import FollowUserCard from '../../Components/FollowUserCard'
import CategoryTab from '../../Components/CategoryTab'
import VideoCard from '../../Components/VideoCard'
import { hp, wp } from '../../Theme/utiles'
import { useNavigation } from '@react-navigation/native'

const Gundem = () => {
  const [query, setQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [selectTab, setSelectTab] = useState('En Popüler')
  const navigation = useNavigation<any>()

  // console.log(query,isSearchFocused,'line 12')
  const categories = [
    { label: "En Popüler" },
    { label: "Hesaplar" },
    { label: "Başlıklar" },
    { label: "Videolar" },
  ];

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
    onPress={()=> navigation.navigate('SearchDetail')}
    style={style.itemContainer}>
      <Text style={style.indexText}>{index + 1}.</Text>
      <View style={style.textContainer}>
        <Text style={style.hashtagText}>{item.title?.length > 16 ? item?.title?.slice(0, 16) + '...' : item?.title}</Text>
        <Text style={style.videoCount}>{item.videoCount} video</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.BG_COLOR
    }}>
      <MainHeader
        onPressHeart={() => console.log('heart')}
        onPressNotification={() => console.log('notifications')}
        onPressMessage={() => console.log('message')}
        query={query}
        setQuery={(value: any) => setQuery(value)}
        isSearch={true}
        setIsSearchFocused={setIsSearchFocused}
        isSearchFocused={isSearchFocused}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}

        style={style.wrapper}>
          {
            query?.length > 1 &&
           <View style={style.container}>
              <FlatList
                horizontal
                data={categories}
                renderItem={({ item }: any) => <CategoryTab item={item}
                  selectTab={selectTab}
                  handleSelect={() => { setSelectTab(item?.label) }} />}
                keyExtractor={(item, i) => i.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={style.listContent}
              />
            </View>
          }
        {
          query?.length > 1 ?
            selectTab === 'Hesaplar' ? 
            <View>
               <Text style={style.heading}>
              Hesaplar
            </Text>
            {
              trendingItems?.map((item) => (
                <FollowUserCard item={item} />
              ))
            }
            </View>
            :
              selectTab === 'Başlıklar' ? 
              <View>
              <Text style={style.heading}>
              Başlıklar
           </Text>
           {
             trendingItems?.map((item) => (
               <FollowUserCard item={item} />
             ))
           }
           </View> : 
            selectTab === 'Videolar' ? 
            <View>
           
         <View>
                <Text style={[style.heading, { paddingBottom: hp(2) }]}>
                Videolar
                </Text>
                <FlatList
                  data={videos}
                  renderItem={({ item }) => <VideoCard
                  leftView={false}
                  item={item} />}
                  keyExtractor={(_, i) => i.toString()}
                  numColumns={2}
                  // horizontal
                  columnWrapperStyle={{ justifyContent: "space-between" }}
                  // showsHorizontalScrollIndicator={false}
                />
              </View>
         </View> :
            <>
           
            <View>
              <Text style={style.searchText}>‘’{query}’’ için arama sonuçları</Text>
            </View>
            <Text style={style.heading}>
              Hesaplar
            </Text>
            {
              trendingItems?.slice(0, 2)?.map((item) => (
                <FollowUserCard item={item} />
              ))
            }
            {
              <View>
                <Text style={[style.heading, { paddingBottom: hp(2) }]}>
                  Hesaplar
                </Text>
                <FlatList
                  data={videos}
                  renderItem={({ item }) => <VideoCard 
                  leftView={true}
                  item={item} />}
                  keyExtractor={(_, i) => i.toString()}
                  // numColumns={2}
                  horizontal
                  // columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: wp(3) }}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            }
            <Text style={style.heading}>
              Başlıklar
            </Text>
            {
              trendingItems?.slice(2, 3)?.map((item) => (
                <FollowUserCard item={item} />
              ))
            }


          </> 
            
            :
            !isSearchFocused ?
              <>
                <Text style={style.heading}>
                  Gündemdeki Başlıklar
                </Text>
                <FlatList
                  data={hashtags}
                  renderItem={renderItem}
                  keyExtractor={(_, i) => i.toString()}
                  contentContainerStyle={style.listContainer}
                  showsVerticalScrollIndicator={false}
                />
              </> :
              <>
                <Text style={style.heading}>
                  Öneriler
                </Text>
                <FlatList
                  data={trendingItems}
                  renderItem={({ item }: any) => <FollowUserCard item={item} />}
                  keyExtractor={(_, i) => i.toString()}
                  contentContainerStyle={style.listContainer}
                  showsVerticalScrollIndicator={false}
                />
              </>
        }


      </ScrollView>
    </View>
  )
}

export default Gundem