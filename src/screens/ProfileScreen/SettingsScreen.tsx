import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
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

export default function SettingsScreen() {
  const [resquestModal, setRequestModal] = useState<boolean>(false);
  const removeToken = useAuthStore(state => state.removeToken);

  const handleDeleteAccount = async () => {
    const response = await deleteUser();
    removeToken();
    console.log('res:', response);
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
          <BackIcon
            width={10}
            height={10}
            color={'#8A8A8A'}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton}>
          <View style={styles.row}>
            <RefreshIcon width={20} height={20} />
            <Text style={styles.sectionText}>Restore purchases</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={'#8A8A8A'}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Support</Text>
      <View style={styles.content}>
        <TouchableOpacity style={styles.sectionButton}>
          <View style={styles.row}>
            <CicleUser width={20} height={20} />
            <Text style={styles.sectionText}>Contact us</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={'#8A8A8A'}
            style={{ transform: [{ rotate: '180deg' }] }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionButton}>
          <View style={styles.row}>
            <RefreshIcon width={20} height={20} />
            <Text style={styles.sectionText}>Rate us</Text>
          </View>
          <BackIcon
            width={10}
            height={10}
            color={'#8A8A8A'}
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
            color={'#8A8A8A'}
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
            color={'#8A8A8A'}
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
            color={'#8A8A8A'}
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
            color={'#8A8A8A'}
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
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    borderWidth: 1,
    borderColor: '#0000001A',
    borderRadius: 20,
    marginTop: 15,
    padding: 10,
  },
  sectionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  sectionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8A8A8A',
    marginLeft: 10,
  },
  footerText: {
    fontSize: 15,
    color: '#9B9B9B',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 40,
  },
});
