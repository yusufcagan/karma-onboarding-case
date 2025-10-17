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

export default function LoginScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>) {
  const [username, setUsername] = useState<string>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (username?.length! > 3) {
      setProgress(0.5);
    } else {
      setProgress(0);
    }
  }, [username]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS ve Android farklı
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
        <Text style={styles.title}>Enter your username</Text>
        <View style={{ justifyContent: 'center', flex: 1, marginBottom: 100 }}>
          <View style={styles.textInput}>
            <View style={styles.input}>
              <Text style={styles.tag}>@</Text>
              <TextInput
                placeholder="username"
                placeholderTextColor={'#C5C5C5'}
                style={styles.inputText}
                value={username}
                autoCapitalize="none"
                onChangeText={text => setUsername(text.toLowerCase())}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PasswordScreen')}
          disabled={!username || username.length < 4}
          style={[
            styles.continueButton,
            (!username || username.length < 4) && { opacity: 0.5 },
          ]}
        >
          <Text style={[styles.continueText]}>CONTINUE</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
