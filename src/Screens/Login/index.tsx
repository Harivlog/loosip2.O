import { View, Text, Alert, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import BackgroundWrapper from '../../Components/BackgroundWrapper'
import AuthHeader from '../../Components/AuthHeader'
import { hp, wp } from '../../Theme/utiles'
import { useNavigation } from '@react-navigation/native'
import Reuse_TextInput from '../../Components/ReuseTextInput'
import { style } from './style'
import { ICONS } from '../../../Assets'
import PrimaryButton from '../../Components/PrimaryButton'
import { COLORS } from '../../Theme'
import AuthTextFooter from '../../Components/AuthFooter'
import RadioButton from '../../Components/RadioButton'
import { MainStyle } from '../../Theme/AppStyles'
import ErrorToast from '../../Components/Errortoast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = () => {
    const navigation = useNavigation<any>()
    const [email, setEmail] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const [isPassFocused, setIsPassFocused] = useState(false)

    const [password, setPassword] = useState('');
    const [isPassVisible, setPassVisible] = useState(true);
    const [rememberMe, setRememberMe] = useState(false)
    const [isErrorShow, setIsErrorShow] = useState(false)

    const handleLogin = ()=>{
      //  if(email !== '123@gmail.com' || password !== '123456'){
        //  setIsErrorShow(true)
      //  }
      //  else{
        navigation.navigate('BottomTab')
      //  }
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
       heading='E-Mail ile Giriş Yapın'
       backArrow={true}
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
        <View>
        <Text style={style.label}>Parola</Text>

        <Reuse_TextInput
              onChangeText={setPassword}
              secureTextEntry={isPassVisible}
              value={password}
              addRight={!isPassVisible ? <ICONS.show /> : <ICONS.hide />  }
              onPress={() => setPassVisible(!isPassVisible)}
              isFocus={isPassFocused}
              onBlur={() => setIsPassFocused(false)}
              onFocus={() => setIsPassFocused(true)}
            />
        </View>
        <PrimaryButton
       title={'Giriş Yap'}
       onPress={()=> handleLogin()}
      //  isContinue={email?.length > 3 && password?.length > 3}
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
      <View style={[MainStyle.flex_between,{marginVertical : hp(1.6)}]}>
      <RadioButton
       selected={rememberMe}
       onPress={()=> setRememberMe(!rememberMe)}
       label='Beni Hatırla'
       />
       <TouchableOpacity 
       onPress={()=> navigation.navigate('ForgetPassword')}
       >
        <Text style={style.linkText}>Şifremi Unuttum</Text>
       </TouchableOpacity>
      </View>
    
        </View>
        <AuthTextFooter
          title={'Hesabın yok mu?'}
          screenName={'Kayıt Ol'}
          navigation={() => {
           navigation.navigate('Signup')
          }}
        />
        
       </KeyboardAwareScrollView>
        </View>
        </View>
    </BackgroundWrapper>
  )
}

export default Login