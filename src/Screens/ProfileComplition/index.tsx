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
import ErrorToast from '../../Components/Errortoast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ProfileCompletion = () => {
  const navigation = useNavigation<any>()
  const [email, setEmail] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isEndNameFocused, setIsEndNameFocused] = useState(false)

  const [password, setPassword] = useState('');
  const [isPassVisible, setPassVisible] = useState(true);
  const [isErrorShow, setIsErrorShow] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEndName, setUserEndName] = useState('')

  const [userFieldFocused, setUserFieldFocused] = useState(false)
  const [isMatchedName, setIsMatchedName] = useState(false)


  const handleLogin = () => {
   navigation.navigate('Login')
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
                heading='Profili Tamamla'
                backArrow={true}
                navigation={() => navigation.goBack()}
              />
            
              <View>
                <Text style={style.label}>Ad</Text>
                <Reuse_TextInput
                  value={userName}
                  onChangeText={(text:string)=> {setUserName(text)
                  }}
                  isFocus={userFieldFocused}
                  onFocus={() => setUserFieldFocused(true)}
                  onBlur={() => setUserFieldFocused(false)}
                  addRight={isMatchedName ? <ICONS.tick/> : isErrorShow && <ICONS.crossCircle/>}
                />
              </View>
              <View>
                <Text style={style.label}>Soyad</Text>
                <Reuse_TextInput
                  value={userEndName}
                  onChangeText={(text:string)=> {setUserEndName(text)
                  }}
                  isFocus={isEndNameFocused}
                  onFocus={() => setIsEndNameFocused(true)}
                  onBlur={() => setIsEndNameFocused(false)}
                  addRight={isMatchedName ? <ICONS.tick/> : isErrorShow && <ICONS.crossCircle/>}
                />
              </View>
              <ErrorToast
                message="Bu kullanıcı adı alınmış."
                visible={isErrorShow}
                onClose={() => setIsErrorShow(false)}
              />
              <PrimaryButton
                title={'Tamamla'}
                onPress={() => handleLogin()}
                // isContinue={userEndName?.length > 3 && userName?.length > 3}
                isContinue={true}
                style={{
                  width: wp(90),
                  marginTop: hp(2)
                }}
              />
              <TouchableOpacity style={{
                alignSelf : 'center',
                marginTop : hp(2)
              }}
              onPress={()=> navigation.navigate('Login')}
              >
                <Text style={style.linkText}>Şimdilik Atla</Text>
              </TouchableOpacity>
             


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

export default ProfileCompletion