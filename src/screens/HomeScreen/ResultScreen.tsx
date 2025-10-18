import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../../assets/theme/Colors';
import BackIcon from '../../assets/icon/back-icon';
import DeleteIcon from '../../assets/icon/delete-icon';
import GalleryIcon from '../../assets/icon/gallery-icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../RootStackParamList';

export default function ResultScreen({
  navigation,
  route,
}: NativeStackScreenProps<HomeStackParamList, 'ResultScreen'>) {
  const { image } = route.params;
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.backBtn}
        >
          <BackIcon width={8} />
        </TouchableOpacity>
        <Text style={styles.title}>Result</Text>
        <TouchableOpacity style={styles.deleteBtn}>
          <DeleteIcon width={16} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.resultImage}
      />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.save}>
          <GalleryIcon width={20} />
          <Text style={styles.saveText}>Save to Photos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.Black,
  },
  backBtn: {
    backgroundColor: '#0000001A',
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteBtn: {
    backgroundColor: '#FF00001A',
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultImage: {
    borderWidth: 1,
    borderColor: '#00000033',
    borderRadius: 14,
    width: '85%',
    height: 400,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#0000001A',
  },
  save: {
    borderWidth: 1,
    borderColor: '#0000001A',
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  saveText: {
    color: Colors.Black,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
});
