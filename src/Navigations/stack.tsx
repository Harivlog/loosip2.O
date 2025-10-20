import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import { COLORS } from '../Theme';
import OnBoarding from '../Screens/OnBoarding';
import Welcome from '../Screens/Welcome';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import OTP from '../Screens/OTP';
import ResetPassword from '../Screens/ResetPassword';
import ForgetPassword from '../Screens/ForgetPassword';
import SuccessMessage from '../Screens/SucessMessage';
import ProfileCompletion from '../Screens/ProfileComplition';
import BottomTab from './BottomTab';

const stack = createNativeStackNavigator();

const Stack = () => {

  return (
    <stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
      }}>
      {/* <stack.Screen name="Splash" component={Splash} />
      <stack.Screen name="OnBoarding" component={OnBoarding} />
      <stack.Screen name="Welcome" component={Welcome} />
      <stack.Screen name="Signup" component={SignUp} />
      <stack.Screen name="Login" component={Login} />

      <stack.Screen name="OTP" component={OTP} />
      <stack.Screen name="ResetPassword" component={ResetPassword} />
      <stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <stack.Screen name="SuccessMessage" component={SuccessMessage} />
      <stack.Screen name="ProfileCompletion" component={ProfileCompletion} /> */}
      <stack.Screen name='BottomTab' component={BottomTab}/>
      






    </stack.Navigator>
  );
};

export default Stack;
