import { useState, useEffect } from 'react';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';

export const useCurrentLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
        console.log('📍 Konum:', latitude, longitude);
      },
      error => {
        console.log('Konum hatası:', error.message);
        Alert.alert('Konum hatası', error.message);
        setLoading(false);
      },
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 },
    );
  };

  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (status === RESULTS.GRANTED) getCurrentLocation();
      else {
        Alert.alert('Konum izni verilmedi.');
        setLoading(false);
      }
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
      else {
        Alert.alert('Konum izni verilmedi.');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return { location, loading, refresh: getCurrentLocation };
};
