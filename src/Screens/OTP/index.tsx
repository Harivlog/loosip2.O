import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import AuthHeader from '../../Components/AuthHeader';
import { hp, wp } from '../../Theme/utiles';
import { useNavigation } from '@react-navigation/native';
import { style } from './style';
import PrimaryButton from '../../Components/PrimaryButton';
import ErrorToast from '../../Components/Errortoast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ICONS } from '../../../Assets';
import { MainStyle } from '../../Theme/AppStyles';
import OTPTextView from 'react-native-otp-textinput';
import { COLORS } from '../../Theme';

const OTP = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [getOtpInput, setGetOtpInput] = useState<any>();
  const [timer, setTimer] = useState(60); // 60 seconds countdown
  const [canResend, setCanResend] = useState(false);
  const [errorText, setErrorText] = useState('')
  const handleForgetPass = () => {
    // navigation.navigate('OTP');
    // const otpText = getOtpInput?.state?.otpText.join('');
    // if(otpText != 1234){
    //     console.log(otpText)
    //   setIsErrorShow(true)
    // }
    // else{
        navigation.navigate('ResetPassword')
    // }
    

  };

  // 🕒 Timer Logic
  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    if (!canResend) return;
    // 🔥 Call resend OTP API here if you have one
    setTimer(60);
    setCanResend(false);
  };

  return (
    <BackgroundWrapper>
      <View
        style={{
          flex: 1,
          marginTop: hp(5.2),
          justifyContent: 'space-between',
        }}
      >
        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          extraHeight={Platform.OS === 'ios' ? 120 : 250}
          enableOnAndroid={true}
          enableAutomaticScroll={true}
        >
          <View>
            <AuthHeader
              icon={true}
              heading="E-postanı Kontrol Et"
              title="kullanici@eposta.com adresine şifre sıfırlama talimatlarını gönderdik. Gelen kutunu kontrol et"
              navigation={() => navigation.goBack()}
            />

            <OTPTextView
              inputCount={4}
              tintColor={isErrorShow ? COLORS.RED : COLORS.PRIMARY}
              offTintColor={isErrorShow ? COLORS.RED : COLORS.GRAY}
              ref={(e: any) => setGetOtpInput(e)}
              containerStyle={{
                width: wp(92),
                marginTop: hp(6),
              }}
              textInputStyle={[style.otpInput,{color : isErrorShow ? COLORS.RED : COLORS.GRAY}]}
              handleTextChange={() => {}}
            />
            <View
              style={[MainStyle.flex_between,{width : wp(86,),alignSelf : 'center',marginVertical : hp(2)}]}
            >
                <View></View>
              {canResend &&  (
                <TouchableOpacity onPress={handleResend}>
                  <Text
                    style={{
                      color: COLORS.GRAY,
                      fontWeight: '600',
                      fontSize: 14,
                    }}
                  >
                    Tekrar Gönder
                  </Text>
                </TouchableOpacity>
              )}
              <Text style={{
                 color: COLORS.GRAY,
                 fontSize: 14,
              }}>{`00:${timer < 10 ? `0${timer}` : timer}`}</Text>
            </View>
            <ErrorToast
              message="Girdiğiniz kod yanlıştır. Lütfen tekrar deneyiniz."
              visible={isErrorShow}
              onClose={() => setIsErrorShow(false)}
            />
            <PrimaryButton
              title={'Şifreni Değiştir'}
              onPress={() => handleForgetPass()}
              // isContinue={getOtpInput?.state?.otpText.join('')?.length === 4}
              isContinue={true}
              style={{
                width: wp(90),
                marginTop: hp(3),
              }}
            />

           
          </View>

          <TouchableOpacity
            style={[MainStyle.flex_center, { marginVertical: hp(4) }]}
          >
            <ICONS.arrow />
            <Text style={style.footerText}>Giriş Ekranına Dön</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </BackgroundWrapper>
  );
};

export default OTP;
