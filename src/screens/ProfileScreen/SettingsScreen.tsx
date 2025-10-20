import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../assets/theme/Colors';
import CicleUser from '../../assets/icon/circle-user-icon';
import BackIcon from '../../assets/icon/back-icon';
import RefreshIcon from '../../assets/icon/resfresh-icon';
import GlobalIcon from '../../assets/icon/global-icon';
import ExitIcon from '../../assets/icon/exit-icon';
import TrashIcon2 from '../../assets/icon/trash-icon2';
import { deleteUser } from '../../api/user';
import ModalComponent from '../../components/ModalComponent';
import { useAuthStore } from '../../store/authStore';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helper/Metrics';

export default function SettingsScreen() {
  const [resquestModal, setRequestModal] = useState<boolean>(false);
  const removeToken = useAuthStore(state => state.removeToken);
  const userData = useAuthStore(state => state.user);

  const handleDeleteAccount = async () => {
    const response = await deleteUser();
    console.log('delete:', response);
    removeToken();
  };

  const handleContactPress = () => {
    const email = 'support@karmaapp.com'; // kendi destek mail adresin
    const subject = 'Support Request';
    const body = 'Hello, I need help with...';
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailto).catch(err =>
      console.error('Error opening mail app', err),
    );
  };

  const handleRateUs = async () => {
    const appStoreUrl =
      'itms-apps://apps.apple.com/us/app/karma-astro-dating-match/id1560169930';
    const playStoreUrl = 'market://details?id=com.karma.app';

    const url = Platform.OS === 'ios' ? appStoreUrl : playStoreUrl;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.warn("Can't handle rate URL");
      }
    } catch (error) {
      console.error('Error opening store:', error);
    }
  };
  return (
    <SafeAreaView style={styles.flex} edges={['top']}>
      <Text style={styles.title}>Membership</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.sectionButton}>
          <View style={styles.row}>
            <CicleUser width={20} height={20} />
            <Text style={styles.sectionText}>Membership status</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.sectionText}>
              {userData.isPremium ? 'Premium' : 'Standart'}
            </Text>
            <BackIcon
              width={10}
              height={10}
              color={Colors.Gray30}
              style={{ transform: [{ rotate: '180deg' }], marginLeft: 5 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton}>
          <View style={styles.row}>
            <RefreshIcon width={20} height={20} />
            <Text style={styles.sectionText}>Restore purchases</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={Colors.Gray30}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Support</Text>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={handleContactPress}
          style={styles.sectionButton}
        >
          <View style={styles.row}>
            <CicleUser width={20} height={20} />
            <Text style={styles.sectionText}>Contact us</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={Colors.Gray30}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRateUs} style={styles.sectionButton}>
          <View style={styles.row}>
            <RefreshIcon width={20} height={20} />
            <Text style={styles.sectionText}>Rate us</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={Colors.Gray30}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Legal</Text>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.google.com/')}
          style={styles.sectionButton}
        >
          <View style={styles.row}>
            <GlobalIcon width={20} height={20} />
            <Text style={styles.sectionText}>Privacy Policy</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={Colors.Gray30}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.google.com/')}
          style={styles.sectionButton}
        >
          <View style={styles.row}>
            <GlobalIcon width={20} height={20} />
            <Text style={styles.sectionText}>Terms of Service</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={Colors.Gray30}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Account</Text>
      <View style={styles.content}>
        <TouchableOpacity onPress={removeToken} style={styles.sectionButton}>
          <View style={styles.row}>
            <ExitIcon width={20} height={20} />
            <Text style={styles.sectionText}>Log Out</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={Colors.Gray30}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRequestModal(true)}
          style={styles.sectionButton}
        >
          <View style={styles.row}>
            <TrashIcon2 width={20} height={20} />
            <Text style={styles.sectionText}>Delete Account</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={Colors.Gray30}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>2025 Karma.AI</Text>
      <ModalComponent
        isModalVisible={resquestModal}
        setModalVisible={setRequestModal}
        title="Send Friend Request"
        description="Are you sure you want to add @username as a friend?"
        buttonText="No"
        buttonText2="Yes"
        onpress={() => setRequestModal(false)}
        onpress2={handleDeleteAccount}
        multiButton
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
    padding: 20,
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginTop: verticalScale(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    borderWidth: 1,
    borderColor: Colors.Black10,
    borderRadius: 20,
    marginTop: verticalScale(15),
    padding: 10,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  sectionText: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: Colors.Gray30,
    marginLeft: horizontalScale(10),
  },
  footerText: {
    fontSize: moderateScale(15),
    color: '#9B9B9B',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: verticalScale(40),
  },
});
