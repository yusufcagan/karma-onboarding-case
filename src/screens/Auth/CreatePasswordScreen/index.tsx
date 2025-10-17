import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import Colors from '../../../../assets/theme/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../../RootStackParamList';
import { styles } from './styles';
import { login } from '../../../api/auth';
import ModalComponent from '../../../components/ModalComponent';

export default function CreatePasswordScreen({
  navigation,
  route,
}: NativeStackScreenProps<AuthStackParamList, 'CreatePasswordScreen'>) {
  const { username } = route.params;
  const [password, setPassword] = useState<string>();
  const [progress, setProgress] = useState(0.25);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  useEffect(() => {
    if (password?.length! > 0) {
      setProgress(0.5);
    } else {
      setProgress(0.25);
    }
  }, [password]);

  const handleCheckPassword = () => {
    if (password && password.length >= 6) {
      navigation.navigate('EmailVerifyScreen', {
        username: username,
        password: password,
      });
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
      <Text style={styles.title}>Enter your password</Text>
      <View style={{ justifyContent: 'center', flex: 1, marginBottom: 100 }}>
        <View style={styles.textInput}>
          <View style={styles.input}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={'#C5C5C5'}
              style={styles.inputText}
              value={password}
              autoCapitalize="none"
              onChangeText={text => setPassword(text.toLowerCase())}
              secureTextEntry={true}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleCheckPassword}
        disabled={!password || password.length < 1}
        style={[
          styles.continueButton,
          (!password || password.length < 1) && { opacity: 0.5 },
        ]}
      >
        <Text style={[styles.continueText]}>CONTINUE</Text>
      </TouchableOpacity>
      <ModalComponent
        title="Invalid Password"
        description="Invalid password, please create a password with at least 6 characters."
        buttonText="TRY AGAIN"
        isModalVisible={errorMessage}
        setModalVisible={setErrorMessage}
      />
    </SafeAreaView>
  );
}
