import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../components/Header';
import CameraIcon from '../../assets/icon/camera-icon';
import { launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { uploadImage } from '../../api/image';
import { getFriend } from '../../api/friend';

export default function HomeScreen() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const handleImagePick = async () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const uri = response.assets?.[0]?.uri;
        setPhoto(uri || null);
        console.log('Selected image URI: ', uri);
        uploadImage(uri!, '37.774929', '-122.419416', prompt!);
      }
    });
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        console.log('Konum:', latitude, longitude);
      },
      error => {
        console.log('Konum hatası:', error.message);
        Alert.alert('Konum hatası', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };
  const getFriends = async () => {
    const res = await getFriend();
    console.log('reds:', res);
  };

  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (status === RESULTS.GRANTED) getCurrentLocation();
      else Alert.alert('Konum izni verilmedi.');
    } else {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Konum izni gerekli',
          message:
            'Uygulama doğru çalışmak için konum erişimine ihtiyaç duyar.',
          buttonPositive: 'İzin ver',
          buttonNegative: 'Reddet',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) getCurrentLocation();
      else Alert.alert('Konum izni verilmedi.');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar />
      <Header />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.title}>Create or Edit Photos</Text>
        <Text style={styles.subTitle}>AI Magic at your fingertips</Text>
        <TouchableOpacity onPress={getFriends} style={styles.uploadContainer}>
          <View style={styles.cameraOverlay}>
            <CameraIcon width={25} />
          </View>
        </TouchableOpacity>
        <Text style={styles.describeText}>Describe your Image</Text>
        <TextInput
          style={styles.input}
          placeholder="Erter the prompt"
          placeholderTextColor={'#D3D4D3'}
          value={prompt}
          onChangeText={setPrompt}
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
