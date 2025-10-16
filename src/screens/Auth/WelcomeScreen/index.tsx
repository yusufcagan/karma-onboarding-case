import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../../RootStackParamList';

export default function WelcomeScreen({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'WelcomeScreen'>) {
  return (
    <SafeAreaView style={styles.flex}>
      <Text style={styles.logo}>
        Karma<Text style={styles.aiTex}>.AI</Text>
      </Text>
      <LottieView
        source={require('../../../assets/lottie.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Karma.AI</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipsicing elit risus euismod
          lacus.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.signupBtn}
        >
          <Text style={styles.signBtnText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
