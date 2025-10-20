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
import AuthTextFooter from '../../Components/AuthFooter'
import RadioButton from '../../Components/RadioButton'
import { MainStyle } from '../../Theme/AppStyles'
import ErrorToast from '../../Components/Errortoast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = () => {
  const navigation = useNavigation<any>()
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isPassFocused, setIsPassFocused] = useState(false)

  const [password, setPassword] = useState('');
  const [isPassVisible, setPassVisible] = useState(true);
  const [rememberMe, setRememberMe] = useState(false)
  const [isErrorShow, setIsErrorShow] = useState(false)
  const [userName, setUserName] = useState('')
  const [userFieldFocused, setUserFieldFocused] = useState(false)
  const [isMatchedName, setIsMatchedName] = useState(false)


  const handleLogin = () => {
   navigation.navigate('ProfileCompletion')
    
  }
  return (
    <BackgroundWrapper>
      <View style={{
        flex: 1,
        marginTop: hp(5.2),
        justifyContent: 'space-between',
      }}>
        <View>

          <KeyboardAwareScrollView
            //  style={{ flex: 1 }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between',
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
                heading='Hesap Oluştur'
                backArrow={true}
                navigation={() => navigation.goBack()}
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
                  // addRight={!isPassVisible ? <ICONS.hide /> : <ICONS.show />}
                                addRight={!isPassVisible ? <ICONS.show /> : <ICONS.hide />  }
                  
                  onPress={() => setPassVisible(!isPassVisible)}
                  isFocus={isPassFocused}
                  onBlur={() => setIsPassFocused(false)}
                  onFocus={() => setIsPassFocused(true)}
                />
              </View>
              <View>
                <Text style={style.label}>Kullanıcı Adı</Text>
                <Reuse_TextInput
                  value={userName}
                  onChangeText={(text:string)=> {setUserName(text)
                    if(text === 'Arslan'){
                      setIsMatchedName(true)
                      setIsErrorShow(false)
                    }
                    else{
                      setIsMatchedName(false)
                    }
                  }}
                  isFocus={userFieldFocused}
                  onFocus={() => setUserFieldFocused(true)}
                  onBlur={() => setUserFieldFocused(false)}
                  addRight={isMatchedName ? <ICONS.tick/> : isErrorShow && <ICONS.crossCircle/>}
                />
              </View>
              <ErrorToast
                message="Bu kullanıcı adı alınmış."
                visible={isErrorShow}
                
                onClose={() => setIsErrorShow(false)}
              />
              <PrimaryButton
                title={'Giriş Yap'}
                onPress={() => handleLogin()}
                // isContinue={email?.length > 3 && password?.length > 3 && isMatchedName}
                isContinue={true}
                style={{
                  width: wp(90),
                  marginTop: hp(2)
                }}
              />
             


            </View>
            <AuthTextFooter
              title={'Hesabın var mı?'}
              screenName={'Giriş Yap'}
              navigation={() => {
                navigation.navigate('Login')
              }}
            />

          </KeyboardAwareScrollView>
        </View>
      </View>
    </BackgroundWrapper>
  )
}

export default SignUp