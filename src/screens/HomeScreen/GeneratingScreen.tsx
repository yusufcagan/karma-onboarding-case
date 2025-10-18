import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import Colors from '../../../assets/theme/Colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../RootStackParamList';

export default function GeneratingScreen({
  navigation,
  route,
}: NativeStackScreenProps<HomeStackParamList, 'GeneratingScreen'>) {
  const { image } = route.params;
  const [dots, setDots] = useState('.');

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count = (count + 1) % 4;
      setDots('.'.repeat(count || 1));
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      navigation.navigate('ResultScreen', { image: image });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <Svg height="100%" width="100%">
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="60%"
              fx="50%"
              fy="50%"
              rx="110%"
              ry="60%"
            >
              <Stop offset="0%" stopColor="#9962FF" stopOpacity="0.45" />
              <Stop offset="35%" stopColor="#B88AFF" stopOpacity="0.5" />
              <Stop offset="55%" stopColor="#D8C4FF" stopOpacity="0.55" />
              <Stop offset="65%" stopColor="#F2EDFF" stopOpacity="0.5" />
              <Stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </RadialGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      </View>

      <View style={styles.center}>
        <Text style={styles.text}>Generating{dots}</Text>
      </View>
      <View style={styles.end}>
        <Text style={styles.endText}>
          Your results are being prepared, please do not close the application.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.White,
  },
  end: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#747474',
  },
});
