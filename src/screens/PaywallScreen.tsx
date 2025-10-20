import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../assets/theme/Colors';
import LottieView from 'lottie-react-native';
import SecurityIcon from '../assets/icon/security-icon';
import { purchaseUser } from '../api/user';

export default function PaywallScreen() {
  const [selectedPay, setSelectedPay] = useState<boolean>(true);
  const handlePurchase = async () => {
    const response = await purchaseUser();
    if (response.success) {
      Alert.alert(response.message);
    } else {
      Alert.alert(response.message);
    }
  };
  return (
    <SafeAreaView style={styles.flex} edges={['top']}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/bootsplash/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <LottieView
        source={require('../assets/lottie.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.title}>Unlimited Generate</Text>
      <Text style={styles.desc}>
        Create unlimited images with Premium Membership!
      </Text>

      <TouchableOpacity
        onPress={() => setSelectedPay(true)}
        style={[
          styles.sectionBtn,
          selectedPay && { borderColor: Colors.Primary, borderWidth: 2 },
        ]}
      >
        <View style={styles.row}>
          <View
            style={[
              styles.section,
              selectedPay && { borderColor: Colors.Primary },
            ]}
          >
            {selectedPay && (
              <View
                style={{
                  backgroundColor: Colors.Primary,
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                }}
              />
            )}
          </View>
          <Text style={styles.text}>Annual 🔥</Text>
          <View style={styles.best}>
            <Text style={styles.bestText}>Best Deal 🎉</Text>
          </View>
        </View>

        <Text style={styles.prince}>
          $0.39 <Text style={styles.weekText}>/ weeks</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelectedPay(false)}
        style={[
          styles.sectionBtn,
          !selectedPay && { borderColor: Colors.Primary, borderWidth: 2 },
        ]}
      >
        <View style={styles.row}>
          <View
            style={[
              styles.section,
              !selectedPay && { borderColor: Colors.Primary },
            ]}
          >
            {!selectedPay && (
              <View
                style={{
                  backgroundColor: Colors.Primary,
                  width: 15,
                  height: 15,
                  borderRadius: 10,
                }}
              />
            )}
          </View>
          <Text style={styles.text}>Weekly 📍</Text>
        </View>

        <Text style={styles.prince}>
          $7.99 <Text style={styles.weekText}>/ weeks</Text>
        </Text>
      </TouchableOpacity>
      <View style={[styles.row, { alignSelf: 'center' }]}>
        <SecurityIcon width={15} height={40} />
        <Text style={styles.securiText}>
          It is secured by the Apple. Cancel Anytime
        </Text>
      </View>
      <TouchableOpacity onPress={handlePurchase} style={styles.continueBtn}>
        <Text style={styles.continueText}>{'Continue -->'}</Text>
      </TouchableOpacity>
      <View
        style={[styles.row, { justifyContent: 'space-evenly', marginTop: 10 }]}
      >
        <Text style={styles.securiText}>Terms of Use</Text>
        <Text style={styles.securiText}>Restore Purchase</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#0000001A',
  },
  logo: {
    alignSelf: 'center',
    width: 150,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lottie: {
    width: '90%',
    height: 350,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.Black,
    textAlign: 'center',
    marginTop: 20,
  },
  desc: {
    fontSize: 18,
    marginHorizontal: 40,
    fontWeight: '400',
    color: '#ADADAD',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0000001A',
    marginHorizontal: 15,
    marginTop: 10,
  },
  section: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#0000001A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '600',
  },
  best: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 30,
    marginLeft: 5,
  },
  bestText: {
    color: Colors.White,
    fontSize: 13,
    fontWeight: '600',
  },
  prince: {
    color: Colors.Black,
    fontSize: 15,
    fontWeight: '600',
  },
  weekText: {
    color: '#9A9A9A',
  },
  securiText: {
    color: '#787878',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 5,
  },
  continueBtn: {
    backgroundColor: Colors.Primary,
    borderRadius: 20,
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  continueText: {
    color: Colors.White,
    fontSize: 16,
    fontWeight: '600',
  },
});
