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
import { useAuthStore } from '../store/authStore';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../helper/Metrics';

export default function PaywallScreen() {
  const [selectedPay, setSelectedPay] = useState<boolean>(true);
  const handlePurchase = async () => {
    const response = await purchaseUser();
    if (response.success) {
      const { user, setUser } = useAuthStore.getState();
      const username = user.username;
      const _id = user.id;
      const mail = user.mail;
      const isPremium = true;
      setUser({ username, mail, _id, isPremium });
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
    borderBottomColor: Colors.Black10,
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
    height: verticalScale(350),
    alignSelf: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: Colors.Black,
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  desc: {
    fontSize: moderateScale(18),
    marginHorizontal: horizontalScale(40),
    fontWeight: '400',
    color: '#ADADAD',
    textAlign: 'center',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  sectionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Black10,
    marginHorizontal: horizontalScale(15),
    marginTop: verticalScale(10),
  },
  section: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.Black10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: horizontalScale(5),
    fontSize: moderateScale(14),
    fontWeight: '600',
  },
  best: {
    backgroundColor: Colors.Primary,
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(4),
    borderRadius: 30,
    marginLeft: horizontalScale(5),
  },
  bestText: {
    color: Colors.White,
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
  prince: {
    color: Colors.Black,
    fontSize: moderateScale(13),
    fontWeight: '600',
  },
  weekText: {
    color: '#9A9A9A',
  },
  securiText: {
    color: '#787878',
    fontSize: moderateScale(13),
    fontWeight: '500',
    marginLeft: horizontalScale(5),
  },
  continueBtn: {
    backgroundColor: Colors.Primary,
    borderRadius: 20,
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(40),
  },
  continueText: {
    color: Colors.White,
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
});
