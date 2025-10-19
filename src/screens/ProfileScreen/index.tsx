import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import PenIcon from '../../assets/icon/pen-icon';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getFriend } from '../../api/friend';
import TrashIcon from '../../assets/icon/trash-icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../../RootStackParamList';

export default function ProfileScreen({
  navigation,
}: NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>) {
  const { data: getFriendData } = useQuery({
    queryKey: ['getFriendData'],
    queryFn: getFriend,
  });
  const getTimeAgo = (createdAt: string) => {
    const now = new Date();
    const created = new Date(createdAt);
    const diffMs = now.getTime() - created.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    return `${days} day${days > 1 ? 's' : ''} ago`;
  };

  return (
    <SafeAreaView style={styles.flex} edges={['top']}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfileEditScreen')}
            style={styles.settings}
          >
            <PenIcon width={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.userContainer}>
          <View style={styles.userIcon} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.username}>@{'username'}</Text>
            <View style={styles.mailContainer}>
              <Text style={styles.mailText}>mail@mail.com</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.content}>
        <FlatList
          data={getFriendData?.data}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.userCard}>
              <View style={styles.flexRow}>
                <Image
                  source={{ uri: item.profilePic2 }}
                  style={styles.userImage}
                />
                <View style={styles.userTextContainer}>
                  <Text style={styles.userCardUsername}>@{item.username1}</Text>
                  <Text style={styles.lastSeen}>
                    Last Seen: {getTimeAgo(item.updatedAt)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.settings}>
                <TrashIcon width={25} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
