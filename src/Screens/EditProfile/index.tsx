import { View, Text, Alert, TouchableOpacity, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import { hp, wp } from '../../Theme/utiles'
import { useNavigation } from '@react-navigation/native'
import Reuse_TextInput from '../../Components/ReuseTextInput'
import { style } from './style'
import PrimaryButton from '../../Components/PrimaryButton'
import { COLORS } from '../../Theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MainHeader from '../../Components/MainHeader'
import { MainStyle } from '../../Theme/AppStyles'

const EditProfile = () => {
    const navigation = useNavigation<any>()
    const [web, setWeb] = useState('www.janecooper.com')
    const [email, setEmail] = useState('janecooper@gmail.com')
    const [isFocused, setIsFocused] = useState(false)
    const [founder, setFounder] = useState(`Founder @janecooper \n janecooper@socialmedia.com`)
    const [isFounderFocused, setIsFounderFocused] = useState(false)
    const [isWebFocused, setIsWebFocused] = useState(false)
    const [surName, setSurName] = useState('janecooper')
    const [isSurFocused, setIsSurFocused] = useState(false) 
    const [userName, setUserName] = useState('@')
    const [isNameFocused, setIsNameFocused] = useState(false)


    const handleLogin = ()=>{
      //  if(email !== '123@gmail.com' || password !== '123456'){
        //  setIsErrorShow(true)
      //  }
      //  else{
        navigation.navigate('BottomTab')
      //  }
    }
  return (
        <View style={{
             flex :1,
             justifyContent : 'space-between',
             backgroundColor : COLORS.BG_COLOR
        }}>
        <View>
        <MainHeader
        onPressHeart={() => console.log('heart')}
        onPressNotification={() => console.log('notifications')}
        onPressMessage={() => console.log('message')}
        isSearch={false}
        isBackNav={true}
        onBackNavigation={() => navigation.goBack()}
        heading={'Profili Düzenle'}
      />
       <KeyboardAwareScrollView
        //  style={{ flex: 1 }}
         contentContainerStyle={{
           flexGrow: 1,
           justifyContent : 'space-between',
           alignItems: 'center',
         }}
         keyboardShouldPersistTaps="handled"
         showsVerticalScrollIndicator={false}
         extraHeight={Platform.OS === 'ios' ? 120 : 250} // positive value
         enableOnAndroid={true}
         enableAutomaticScroll={true}
       >
        <View style={{
            marginVertical : hp(4)
        }}>
            <Image
            source={{uri : 'https://randomuser.me/api/portraits/men/75.jpg'}}
            style={{
                width : wp(27),
                height : wp(27),
                borderRadius : wp(30)
            }}
            />
            <Text style={style.name}>Fotoğrafı Değiştir</Text>
        </View>
        <View style={[MainStyle.flex_between,{width : wp(90)}]}>
        <View >
        <Text style={style.label}>Ad Soyad</Text>
         <Reuse_TextInput
         value={surName}
         onChangeText={setSurName}
         isFocus={isSurFocused}
         onFocus={() => setIsSurFocused(true)}
         onBlur={() => setIsSurFocused(false)}
         CustomInputStyle={{
            width : wp(42)
         }}
        //  multiline={true}
         />
        </View>
        <View>
        <Text style={style.label}>Kullanıcı Adı</Text>
         <Reuse_TextInput
         value={userName}
         onChangeText={setUserName}
         isFocus={isNameFocused}
         onFocus={() =>setIsNameFocused(true)}
         onBlur={() => setIsNameFocused(false)}
         CustomInputStyle={{
            width : wp(42)
         }}
        //  multiline={true}
         />
        </View>
        </View>
        <View>
         
        <View>
        <Text style={style.label}>Biyografi</Text>
         <Reuse_TextInput
         value={founder}
         onChangeText={setFounder}
         isFocus={isFounderFocused}
         onFocus={() =>setIsFounderFocused(true)}
         onBlur={() => setIsFounderFocused(false)}
         multiline={true}
         />
        </View>
       
        <View>
        <Text style={style.label}>Web Sitesi</Text>
         <Reuse_TextInput
         value={web}
         onChangeText={setWeb}
         isFocus={isWebFocused}
         onFocus={() => setIsWebFocused(true)}
         onBlur={() => setIsWebFocused(false)}
         />
        </View>
        <View>
        <Text style={style.label}>E-Posta Adresi</Text>
         <Reuse_TextInput
         value={email}
         onChangeText={setEmail}
         isFocus={isFocused}
         onFocus={() => setIsFocused(true)}
         onBlur={() => setIsFocused(false)}
         />
        </View>
        <PrimaryButton
       title={'Değişiklikleri Kaydet'}
       onPress={()=> handleLogin()}
      //  isContinue={email?.length > 3 && password?.length > 3}
      isContinue={true}
       style={{
        width : wp(90),
        marginTop : hp(2)
       }}
       />
       
    
        </View>
       
        
       </KeyboardAwareScrollView>
        </View>
        </View>
  )
}
export default EditProfile