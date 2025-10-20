import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../assets/theme/Colors';
import PenIcon from '../../assets/icon/pen-icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../../RootStackParamList';
import { useAuthStore } from '../../store/authStore';
import UserIcon from '../../assets/icon/user-icon';
import ModalComponent from '../../components/ModalComponent';

export default function ProfileEdit({
  navigation,
}: NativeStackScreenProps<ProfileStackParamList, 'ProfileEditScreen'>) {
  const userData = useAuthStore(state => state.user);
  const setUser = useAuthStore(state => state.setUser);
  const [username, setUsername] = useState<string>(userData?.username);
  const [mail, setMail] = useState<string>(userData?.mail);
  const [password, setPassword] = useState<string>();
  const [resquestModal, setRequestModal] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile Edit</Text>
        <TouchableOpacity style={styles.settings}>
          <PenIcon width={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <UserIcon width={130} height={130} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.inputText}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.inputText}>Mail</Text>
        <TextInput style={styles.input} value={mail} onChangeText={setMail} />
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          disabled={!username || !mail || !password}
          onPress={() => {
            const _id = userData?.id;
            const isPremium = userData.isPremium;
            setUser({ username, mail, _id, isPremium });
            setRequestModal(true);
          }}
          style={[
            styles.saveBtn,
            (!username || !mail || !password) && { opacity: 0.5 },
          ]}
        >
          <Text style={styles.saveText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ModalComponent
        isModalVisible={resquestModal}
        setModalVisible={setRequestModal}
        title="Success"
        buttonText="OK"
        onpress={() => {
          setRequestModal(false);
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.Black,
  },
  settings: {
    width: 45,
    height: 45,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0000001A',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#0000001A',
    marginTop: 20,
  },
  image: {
    width: 130,
    height: 130,
    marginTop: 40,
    alignSelf: 'center',
  },
  content: {
    paddingHorizontal: 25,
  },
  inputText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    backgroundColor: '#F7F7F7',
    borderWidth: 1,
    borderColor: '#0000001A',
    borderRadius: 12,
    padding: 14,
  },
  saveBtn: {
    backgroundColor: Colors.Primary,
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
  },
  saveText: {
    color: Colors.White,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
  },
  cancelText: {
    color: Colors.Black,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 15,
  },
});
