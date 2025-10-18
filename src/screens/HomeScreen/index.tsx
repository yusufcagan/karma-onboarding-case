import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
  PermissionsAndroid,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../components/Header';
import CameraIcon from '../../assets/icon/camera-icon';
import { launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { getImage, uploadImage } from '../../api/image';
import { useQuery } from '@tanstack/react-query';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../RootStackParamList';

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'HomeScreen'>) {
  const [photo, setPhoto] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const { data: getImageData } = useQuery({
    queryKey: ['getImage'],
    queryFn: getImage,
  });

  console.log('get:', getImageData);

  const handleImagePick = async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      }

      if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
        return;
      }

      const uri = response.assets?.[0]?.uri;
      if (!uri) return;

      setPhoto(uri);
      console.log('Selected image URI:', uri);
    } catch (err) {
      console.error('handleImagePick error:', err);
    }
  };

  const generateImage = async () => {
    try {
      const res = await uploadImage(
        photo!,
        '37.774929',
        '-122.419416',
        'summer',
      );
      console.log('Upload response:', res);
      if (res.success) {
        navigation.navigate('GeneratingScreen', { image: res.data.image.url });
      }
    } catch (err) {
      console.error('generate error:', err);
    }
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
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 },
    );
  };

  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (status === RESULTS.GRANTED) getCurrentLocation();
      // else Alert.alert('Konum izni verilmedi.');
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
      // else Alert.alert('Konum izni verilmedi.');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <StatusBar />
      <Header />
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.title}>Create or Edit Photos</Text>
          <Text style={styles.subTitle}>AI Magic at your fingertips</Text>

          <TouchableOpacity
            onPress={handleImagePick}
            style={styles.uploadContainer}
          >
            {photo ? (
              <Image source={{ uri: photo }} style={styles.previewContainer} />
            ) : (
              <View style={styles.cameraOverlay}>
                <CameraIcon width={25} />
              </View>
            )}
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
            onPress={generateImage}
            style={[styles.generateButton, true && { opacity: 0.5 }]}
          >
            <Text style={styles.generateButtonText}>Generate (1 Credit)</Text>
          </TouchableOpacity>
          <Text style={styles.resultTitle}>Results</Text>
          <FlatList
            data={getImageData}
            numColumns={2}
            renderItem={({ item }) => (
              <Image source={{ uri: item.url }} style={styles.resultImage} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
