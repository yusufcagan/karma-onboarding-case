import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../components/Header';
import CameraIcon from '../../assets/icon/camera-icon';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar />
      <Header />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Create or Edit Photos</Text>
        <Text style={styles.subTitle}>AI Magic at your fingertips</Text>
        <TouchableOpacity style={styles.uploadContainer}>
          <View style={styles.cameraOverlay}>
            <CameraIcon width={25} />
          </View>
        </TouchableOpacity>
        <Text style={styles.describeText}>Describe your Image</Text>
        <TextInput
          style={styles.input}
          placeholder="Erter the prompt"
          placeholderTextColor={'#D3D4D3'}
          multiline
        />
        <TouchableOpacity
          style={[styles.generateButton, true && { opacity: 0.5 }]}
        >
          <Text style={styles.generateButtonText}>Generate (1 Credit)</Text>
        </TouchableOpacity>
        <Text style={styles.resultTitle}>Results</Text>
      </View>
    </SafeAreaView>
  );
}
