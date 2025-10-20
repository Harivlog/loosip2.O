import { View, Text, Platform, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import AuthHeader from '../../Components/AuthHeader';
import { hp, wp } from '../../Theme/utiles';
import { useNavigation } from '@react-navigation/native';
import Reuse_TextInput from '../../Components/ReuseTextInput';
import { style } from './style';
import { ICONS } from '../../../Assets';
import PrimaryButton from '../../Components/PrimaryButton';
import * as Progress from 'react-native-progress';
import ErrorToast from '../../Components/Errortoast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MainStyle } from '../../Theme/AppStyles';

const ResetPassword = () => {
  const navigation = useNavigation<any>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPassVisible, setPassVisible] = useState(true);
  const [isConfirmPassVisible, setConfirmPassVisible] = useState(true);
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [isConfirmPassFocus, setConfirmPassFocus] = useState(false);
  const [isPassFocus, setIsPassFocus] = useState(false);

  const [progress, setProgress] = useState(0);
  const [progressColor, setProgressColor] = useState('#E74C3C');
  const [conditions, setConditions] = useState({
    length: false,
    number: false,
    symbol: false,
  });

  // 🔍 Password rule validation
  useEffect(() => {
    const hasLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!'^+%&/()=?]/.test(password);

    setConditions({ length: hasLength, number: hasNumber, symbol: hasSymbol });

    const matched = [hasLength, hasNumber, hasSymbol].filter(Boolean).length;
    setProgress(matched / 3);

    if (matched === 1) setProgressColor('#E74C3C');
    else if (matched === 2) setProgressColor('#F1C40F');
    else if (matched === 3) setProgressColor('#2ECC71');
    else setProgressColor('#E74C3C');
  }, [password]);

  const handleSave = () => {
    // if (password !== confirmPassword) {
    //   setIsErrorShow(true);
    //   return;
    // }
    navigation.navigate('SuccessMessage')

    // Continue logic (API or next screen)
  };

  return (
    <BackgroundWrapper>
      <View style={{ flex: 1, marginTop: hp(5.2), justifyContent: 'space-between' }}>
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
              heading="Yeni Şifre Oluştur"
              title="En az 8 karakter kullanın. Evcil hayvanınızın adı gibi çok bariz bir kelimeyi şifre olarak kullanmayın."
              navigation={() => navigation.goBack()}
            />

            {/* PASSWORD INPUT */}
            <Text style={style.label}>Yeni Parola</Text>
            <Reuse_TextInput
              onChangeText={setPassword}
              secureTextEntry={isPassVisible}
              value={password}
              // addRight={!isPassVisible ? <ICONS.hide /> : <ICONS.show />}
                            addRight={!isPassVisible ? <ICONS.show /> : <ICONS.hide />  }
              
              onPress={() => setPassVisible(!isPassVisible)}
              onFocus={() => setIsPassFocus(true)}
              onBlur={() => setIsPassFocus(false)}
              isFocus={isPassFocus}
            />

            {/* CONFIRM PASSWORD INPUT */}
            <Text style={style.label}>Parolayı Tekrarla</Text>
            <Reuse_TextInput
              onChangeText={setConfirmPassword}
              secureTextEntry={isConfirmPassVisible}
              value={confirmPassword}
              // addRight={!isConfirmPassVisible ? <ICONS.hide /> : <ICONS.show />}
                            addRight={!isPassVisible ? <ICONS.show /> : <ICONS.hide />  }
              
              onPress={() => setConfirmPassVisible(!isConfirmPassVisible)}
              onFocus={() => setConfirmPassFocus(true)}
              onBlur={() => setConfirmPassFocus(false)}
              isFocus={isConfirmPassFocus}
            />

            {/* PROGRESS BAR */}
            <View style={style.progressBarWrapper}>
              <Progress.Bar
                progress={progress}
                width={wp(90)}
                height={9}
                color={progressColor}
                unfilledColor="#2b2b3c"
                borderWidth={0}
                borderRadius={20}
                animated
              />
            </View>

            {/* PASSWORD CONDITIONS */}
            <View style={{ marginTop: hp(1.5) }}>
              <ConditionItem
                label="Minimum 8 karakter"
                active={conditions.length}
              />
              <ConditionItem
                label="En az bir adet rakam"
                active={conditions.number}
              />
              <ConditionItem
                label="En az bir adet sembol (!’^+%&/()=?)"
                active={conditions.symbol}
              />
            </View>

            {/* SAVE BUTTON */}
            <PrimaryButton
              title={'Parolayı Kaydet'}
              onPress={handleSave}
              // isContinue={password?.length > 3}
              isContinue={true}
              style={{ width: wp(90), marginTop: hp(3) }}
            />

            {/* ERROR TOAST */}
            <ErrorToast
              message="Parolalar eşleşmiyor. Lütfen tekrar deneyin."
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
    </BackgroundWrapper>
  );
};

// ✅ Small reusable condition item component
const ConditionItem = ({ label, active }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
      <View
        style={{
          width: 18,
          height: 18,
          borderRadius: 9,
          borderWidth: 2,
          borderColor: active ? '#2ECC71' : '#ccc',
          backgroundColor: active ? '#2ECC71' : 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 8,
        }}
      >
        {active && <Text style={{ color: '#fff', fontSize: 12 }}>✓</Text>}
      </View>
      <Text
        style={{
          color: active ? '#fff' : '#bbb',
          fontSize: 15,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default ResetPassword;
