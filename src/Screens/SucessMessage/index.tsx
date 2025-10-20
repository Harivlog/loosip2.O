import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BackgroundWrapper from '../../Components/BackgroundWrapper'
import AuthHeader from '../../Components/AuthHeader'
import { hp, wp } from '../../Theme/utiles'
import { useNavigation } from '@react-navigation/native'
import { style } from './style'
import { ICONS } from '../../../Assets'
import PrimaryButton from '../../Components/PrimaryButton'
import { MainStyle } from '../../Theme/AppStyles'


const SuccessMessage = () => {
    const navigation = useNavigation<any>()

    const handleLogin = ()=>{
      navigation.navigate('Login')
    }
  return (
    <BackgroundWrapper>
        <View style={{
             flex :1,
             marginTop : hp(5.2),
             justifyContent : 'space-between',
             alignItems : 'center'
        }}>
        
      
         <ICONS.logo width={wp(24)} height={hp(9)}/>
        <View style={{alignItems : 'center'}}>
            <View style={{
                marginBottom : hp(2)
            }}>
            <ICONS.check />
            </View>
          <AuthHeader
       icon={false}
       heading='Mükemmel!'
       title='Şifren başarıyla güncellendi! Artık yeni şifrenle giriş yapabilirsin '
       backArrow={false}
       navigation={()=> navigation.goBack()}
       />
       
       
        <PrimaryButton
       title={'Giriş Yap'}
       onPress={()=> handleLogin()}
       isContinue={true}
       style={{
        width : wp(90),
        marginTop : hp(2)
       }}
       />
        
     
        </View>
         <TouchableOpacity style={[MainStyle.flex_center,{marginVertical : hp(4)}]}>
                       <ICONS.arrow/>
                       <Text style={style.footerText}>Giriş Ekranına Dön</Text>
                      </TouchableOpacity>
        
    
        </View>
    </BackgroundWrapper>
  )
}

export default SuccessMessage