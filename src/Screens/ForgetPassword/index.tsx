import { View, Text, Alert, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import BackgroundWrapper from '../../Components/BackgroundWrapper'
import AuthHeader from '../../Components/AuthHeader'
import { hp, wp } from '../../Theme/utiles'
import { useNavigation } from '@react-navigation/native'
import Reuse_TextInput from '../../Components/ReuseTextInput'
import { style } from './style'
import PrimaryButton from '../../Components/PrimaryButton'
import ErrorToast from '../../Components/Errortoast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ICONS } from '../../../Assets'
import { MainStyle } from '../../Theme/AppStyles'

const ForgetPassword = () => {
    const navigation = useNavigation<any>()
    const [email, setEmail] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isErrorShow, setIsErrorShow] = useState(false)

    const handleForgetPass = ()=>{
      navigation.navigate('OTP')
    }
  return (
    <BackgroundWrapper>
        <View style={{
             flex :1,
             marginTop : hp(5.2),
             justifyContent : 'space-between',
        }}>
        <View>
      
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
        <View>
          <AuthHeader
       icon={true}
       heading='Şifreni Sıfırla'
       title='Hesabına kayıtlı e-posta adresini gir. Şifreni sıfırlaman için sana bir bağlantı göndereceğiz '
    //    backArrow={}
       navigation={()=> navigation.goBack()}
       />
        <View>
        <Text style={style.label}>Email</Text>
         <Reuse_TextInput
         value={email}
         onChangeText={setEmail}
         isFocus={isFocused}
         onFocus={() => setIsFocused(true)}
         onBlur={() => setIsFocused(false)}
         />
        </View>
       
        <PrimaryButton
       title={'Sıfırlama Bağlantısı Gönder '}
       onPress={()=> handleForgetPass()}
      //  isContinue={email?.length > 3}
      isContinue={true}
       style={{
        width : wp(90),
        marginTop : hp(2)
       }}
       />
         <ErrorToast
        message="E-posta veya şifre hatalı. Lütfen kontrol edip tekrar deneyin"
        visible={isErrorShow}
        onClose={() => setIsErrorShow(false)}
      />
     
    
        </View>
       <TouchableOpacity style={[MainStyle.flex_center,{marginVertical : hp(4)}]}>
        <ICONS.arrow/>
        <Text style={style.footerText}>Giriş Ekranına Dön</Text>
       </TouchableOpacity>
        
       </KeyboardAwareScrollView>
        </View>
        </View>
    </BackgroundWrapper>
  )
}

export default ForgetPassword