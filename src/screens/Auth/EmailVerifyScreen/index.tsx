import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import * as Progress from 'react-native-progress';
import Colors from '../../../../assets/theme/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../../RootStackParamList';
import {
  checkEmailAvailability,
  checkUsernameAvailability,
} from '../../../api/auth';
import ModalComponent from '../../../components/ModalComponent';

export default function EmailVerifyScreen({
  navigation,
  route,
}: NativeStackScreenProps<AuthStackParamList, 'EmailVerifyScreen'>) {
  const { username, password } = route.params;
  const [email, setEmail] = useState<string>();
  const [progress, setProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  useEffect(() => {
    if (email?.length! > 1) {
      setProgress(0.75);
    } else {
      setProgress(0.5);
    }
  }, [email]);

  const handleContinue = async () => {
    try {
      console.log('Checking email availability for:', email);
      const response = await checkEmailAvailability(email!);
      if (response.success) {
        navigation.navigate('OptVerifyScreen', {
          username: username,
          password: password,
          mail: email,
        });
        console.log('Email is available:', email);
      } else {
        setErrorMessage(true);
      }
    } catch (error) {
      console.error('email check failed:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
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
        <Text style={styles.title}>
          We'll send you a confirmation code to verify your account.
        </Text>
        <View style={{ justifyContent: 'center', flex: 1, marginBottom: 100 }}>
          <View style={styles.textInput}>
            <View style={styles.input}>
              <TextInput
                placeholder="E-mail address"
                placeholderTextColor={'#C5C5C5'}
                style={styles.inputText}
                value={email}
                autoCapitalize="none"
                onChangeText={text => setEmail(text.toLowerCase())}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleContinue}
          disabled={!email || email.length < 1}
          style={[
            styles.continueButton,
            (!email || email.length < 1) && { opacity: 0.5 },
          ]}
        >
          <Text style={[styles.continueText]}>CONTINUE</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <ModalComponent
        title="Invalid E-mail Address"
        description="E-mail address is already used or contains invalid characters. Please try again."
        buttonText="TRY AGAIN"
        isModalVisible={errorMessage}
        setModalVisible={setErrorMessage}
      />
    </KeyboardAvoidingView>
  );
}
