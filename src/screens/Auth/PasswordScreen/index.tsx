import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import Colors from '../../../../assets/theme/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../../RootStackParamList';
import { styles } from './styles';

export default function PasswordScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'PasswordScreen'>) {
  const [password, setPassword] = useState<string>();
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    if (password?.length! > 5) {
      setProgress(1);
    } else {
      setProgress(0.5);
    }
  }, [password]);

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
        onPress={() => {}}
        disabled={!password || password.length < 6}
        style={[
          styles.continueButton,
          (!password || password.length < 6) && { opacity: 0.5 },
        ]}
      >
        <Text style={[styles.continueText]}>CONTINUE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
