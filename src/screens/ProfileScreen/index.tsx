import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import PenIcon from '../../assets/icon/pen-icon';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { acceptFriend, deleteFriend, getFriend } from '../../api/friend';
import TrashIcon from '../../assets/icon/trash-icon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../../RootStackParamList';
import ModalComponent from '../../components/ModalComponent';
import { SceneMap, TabView } from 'react-native-tab-view';
import Colors from '../../../assets/theme/Colors';
import AddUserIcon from '../../assets/icon/addUser-icon';
import { useAuthStore } from '../../store/authStore';
import UserIcon from '../../assets/icon/user-icon';

export default function ProfileScreen({
  navigation,
}: NativeStackScreenProps<ProfileStackParamList, 'ProfileScreen'>) {
  const [resquestModal, setRequestModal] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const userData = useAuthStore(state => state.user);

  const queryClient = useQueryClient();

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

  const handleDeleteFriend = async () => {
    const response = await deleteFriend(selectedUser.user1);
    queryClient.invalidateQueries({ queryKey: ['getFriendData'] });
  };

  const handleRequestModal = (item: any) => {
    setSelectedUser(item);
    setRequestModal(true);
  };

  const acceptFriendReques = async (friendId: string) => {
    const response = await acceptFriend(friendId);
  };

  const FirstRoute = () => {
    const friends =
      getFriendData?.data?.filter((item: any) => item.type === 'friend') || [];

    return (
      <View style={styles.content}>
        <FlatList
          data={friends}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleRequestModal(item)}
              style={styles.userCard}
            >
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
    );
  };

  const SecondRoute = () => {
    const requestFriends =
      getFriendData?.data?.filter((item: any) => item.type === 'request') || [];

    return (
      <View style={styles.content}>
        <FlatList
          data={requestFriends}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleRequestModal(item)}
              style={styles.userCard}
            >
              <View style={styles.flexRow}>
                <Image
                  source={{ uri: item.profilePic2 }}
                  style={styles.userImage}
                />
                <View style={styles.userTextContainer}>
                  <Text style={styles.userCardUsername}>@{item.username1}</Text>
                  <Text style={styles.lastSeen}>
                    Wants to add you as a friend
                  </Text>
                </View>
              </View>
              <View style={styles.flexRow}>
                <TouchableOpacity
                  onPress={() => acceptFriendReques(item.user1)}
                  style={styles.settings}
                >
                  <AddUserIcon width={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settings}>
                  <TrashIcon width={25} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Friends' },
    { key: 'second', title: 'Friends Requests' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

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
          <UserIcon width={70} height={70} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.username}>@{userData?.username}</Text>
            <View style={styles.mailContainer}>
              <Text style={styles.mailText}>{userData?.mail}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#0000001A',
              borderRadius: 25,
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 10,
              padding: 4,
            }}
          >
            {props.navigationState.routes.map((route, i) => {
              const isActive = i === props.navigationState.index;
              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={() => props.jumpTo(route.key)}
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    backgroundColor: isActive ? Colors.White : 'transparent',
                    borderRadius: 20,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: isActive ? Colors.Primary : '#333',
                      fontWeight: '600',
                    }}
                  >
                    {route.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      />
      <ModalComponent
        isModalVisible={resquestModal}
        setModalVisible={setRequestModal}
        title="Send Friend Request"
        description={`Are you sure you want to add ${selectedUser?.username1} as a friend?`}
        buttonText="No"
        buttonText2="Yes"
        onpress={() => setRequestModal(false)}
        onpress2={handleDeleteFriend}
        multiButton
      />
    </SafeAreaView>
  );
}
