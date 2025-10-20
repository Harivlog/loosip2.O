import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MainHeader from '../../Components/MainHeader'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'
import { COLORS } from '../../Theme'
import { hp, wp } from '../../Theme/utiles'
import { ICONS } from '../../../Assets'
import { MainStyle } from '../../Theme/AppStyles'
import PrimaryButton from '../../Components/PrimaryButton'
import SwitchButton from '../../Components/SwitchButton'

const Profile = () => {
  const navigation = useNavigation<any>()
  const [notifications, setNotifications] = useState(false)

  return (
    <View style={{
      backgroundColor: COLORS.BG_COLOR,
      flex: 1,
    }}>
      <MainHeader
        onPressHeart={() => console.log('heart')}
        onPressNotification={() => console.log('notifications')}
        onPressMessage={() => console.log('message')}
        isSearch={false}
        isBackNav={true}
        onBackNavigation={() => navigation.goBack()}
        heading={'Ayarlar'}
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: wp(5),
          paddingVertical: hp(2),
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.screenHeading}>Profil Ayarları</Text>
        <TouchableOpacity 
        onPress={()=>{navigation.navigate('EditProfile')}}
        style={styles.screenBtn}>
          <View style={MainStyle.flex_center}>
            <ICONS.profile fill={COLORS.WHITE} width={wp(5.5)} height={wp(5.5)} />
            <Text style={styles.btnText}>Profili Düzenle</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenBtn}>
          <View style={MainStyle.flex_center}>
            <ICONS.lock width={wp(5.5)} height={wp(5.5)} />
            <Text style={[styles.btnText, { paddingLeft: wp(3) }]}>Şifre Değiştir</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenBtn}>
          <View style={MainStyle.flex_center}>
            <Text style={[styles.btnText, { paddingLeft: wp(0) }]}>Hesabı Dondur</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.screenBtn, { backgroundColor: COLORS.red1, justifyContent: 'center' }]}>

          <Text style={[styles.btnText, { paddingLeft: wp(0), color: COLORS.RED }]}>Hesabı Dondur</Text>

        </TouchableOpacity>
        <Text style={[styles.screenHeading]}>Gizlilik</Text>
        <View style={[MainStyle.flex_between, { borderBottomWidth: hp(0.1), borderColor: COLORS.GRAY1,  }]}>
          <View style={{
            marginVertical: hp(2)
          }}>
            <Text style={styles.privateText}>Özel Hesap</Text>
            <Text style={styles.privateTitle}>Sadece seni takip eden kullanıcılar videolarını görebilir.</Text>
          </View>
          <SwitchButton
            label="Push Notifications"
            value={notifications}
            onToggle={() => setNotifications(!notifications)}
            activeColor={COLORS.green}
            inactiveColor="#D1D1D6"
            style={{ marginBottom: hp(2) }}
          />
        </View>
        <TouchableOpacity style={MainStyle.flex_between}>
          <View style={{
            marginVertical: hp(2)
          }}>
            <Text style={styles.privateText}>Engellenen Hesaplar</Text>
            <Text style={styles.privateTitle}>Henüz kimseyi engellemedin.</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>

        <Text style={[styles.screenHeading]}>Bildirimler</Text>
        <View style={[MainStyle.flex_between, { borderBottomWidth: hp(0.1), borderColor: COLORS.GRAY1,  }]}>
          <View style={{
            marginVertical: hp(2)
          }}>
            <Text style={styles.privateText}>Anlık Bildirimler</Text>
            
          </View>
          <SwitchButton
            label="Push Notifications"
            value={notifications}
            onToggle={() => setNotifications(!notifications)}
            activeColor={COLORS.green}
            inactiveColor="#D1D1D6"
            style={{ marginBottom: hp(2) }}
          />
        </View>
        <TouchableOpacity style={MainStyle.flex_between}>
          <View style={{
            marginVertical: hp(2)
          }}>
            <Text style={styles.privateText}>Detaylı Bildirim Ayarları</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>
        <Text style={styles.screenHeading}>Yardım</Text>
        <TouchableOpacity style={styles.screenBtn}>
          <View style={MainStyle.flex_center}>
            <Text style={[styles.btnText, { paddingLeft: wp(0) }]}>Yardım Merkezi</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenBtn}>
          <View style={MainStyle.flex_center}>
            <Text style={[styles.btnText, { paddingLeft: wp(0) }]}>Bize Ulaşın</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>

        <Text style={[styles.screenHeading,{marginTop : hp(3)}]}>Hakkında</Text>
        
        <TouchableOpacity style={[MainStyle.flex_between,{ borderBottomWidth: hp(0.1), borderColor: COLORS.GRAY1,  }]}>
          <View style={{
            marginVertical: hp(2)
          }}>
            <Text style={styles.privateText}>Gizlilik Politikası</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>
        <TouchableOpacity style={MainStyle.flex_between}>
          <View style={{
            marginVertical: hp(2)
          }}>
            <Text style={styles.privateText}>Kullanım Koşulları</Text>
          </View>
          <ICONS.rightArrow />
        </TouchableOpacity>
        <Text style={styles.screenHeading}>Sürüm</Text>
        <View style={[styles.screenBtn, { paddingVertical: hp(1.5), marginVertical: hp(2) }]}>
          <View style={MainStyle.flex_center}>
            <Text style={[styles.btnText, { paddingLeft: wp(0), color: COLORS.GRAY3 }]}>v1.0.0</Text>
          </View>
        </View>
        <PrimaryButton
          title={'Çıkış Yap'}
          isContinue={true}
          onPress={() => { }}
          style={{
            backgroundColor: COLORS.RED,
            marginVertical: hp(1)
          }}

        />
      </ScrollView>
    </View>
  )
}

export default Profile