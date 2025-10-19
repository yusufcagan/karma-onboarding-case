import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles/header.styles';
import SettingsIcon from '../assets/icon/settings-icon';
import { useCreditStore } from '../store/useCreditStore';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const credit = useCreditStore(state => state.credit);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.hedaerContainer}>
      <View style={styles.row}>
        <View style={styles.cameraContainer}>
          <Text style={styles.cameraText}>📷</Text>
        </View>
        <Text style={styles.logo}>
          Karma<Text style={styles.aiTex}>.AI</Text>
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.creditContainer}>
          <Text style={styles.cameraText}>📸</Text>
          <Text style={styles.countText}>{credit}</Text>
          <Text style={styles.creditText}>credits</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <SettingsIcon width={30} height={30} style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
