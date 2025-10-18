import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import Colors from '../../../../assets/theme/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../../RootStackParamList';
import { styles } from './styles';
import { login, register } from '../../../api/auth';
import ModalComponent from '../../../components/ModalComponent';
import OTPTextView from 'react-native-otp-textinput';
import { useAuthStore } from '../../../store/authStore';

export default function OptVerifyScreen({
  navigation,
  route,
}: NativeStackScreenProps<AuthStackParamList, 'OptVerifyScreen'>) {
  const { username, password, mail } = route.params;
  const [otpCode, setOtpCode] = useState<string>();
  const [progress, setProgress] = useState(0.5);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);

  useEffect(() => {
    if (otpCode?.length! > 3) {
      setProgress(1);
    } else {
      setProgress(0.75);
    }
  }, [otpCode]);

  const handleVerifyCode = async () => {
    if (otpCode === '1234') {
      const response = await register(username!, password!, mail!, otpCode);
      if (response.success) {
        const setToken = useAuthStore.getState().setToken;
        setToken(response.data.token);
        setSuccessModal(true);
      } else {
        setErrorMessage(true);
      }
    } else {
      setErrorMessage(true);
    }
  };
  return (
    <SafeAreaView style={styles.flex}>
      <Progress.Bar
        progress={progress}
        width={null}
        color={Colors.Primary}
        borderRadius={0}
        height={4}
        unfilledColor="#E1D7F2"
        borderWidth={0}
      />
      <Text style={styles.title}>Enter the verification code</Text>
      <View style={{ justifyContent: 'center', flex: 1, marginBottom: 100 }}>
        <View style={styles.input}>
          <OTPTextView
            tintColor={Colors.Primary}
            offTintColor={'#C5C5C5'}
            textInputStyle={{ borderBottomWidth: 2 }}
            handleTextChange={code => setOtpCode(code)}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleVerifyCode}
        disabled={!otpCode || otpCode.length < 4}
        style={[
          styles.continueButton,
          (!otpCode || otpCode.length < 4) && { opacity: 0.5 },
        ]}
      >
        <Text style={[styles.continueText]}>CONTINUE</Text>
      </TouchableOpacity>
      <ModalComponent
        title="Invalid Code"
        description="Verification code is incorrect. Please try again."
        buttonText="TRY AGAIN"
        isModalVisible={errorMessage}
        setModalVisible={setErrorMessage}
      />
      <ModalComponent
        title="You have successfully registered 🎉"
        buttonText="CONTINUE"
        isModalVisible={successModal}
        setModalVisible={setSuccessModal}
        onpress={() => {
          setSuccessModal(false);
          navigation.navigate('LoginScreen');
        }}
      />
    </SafeAreaView>
  );
}
