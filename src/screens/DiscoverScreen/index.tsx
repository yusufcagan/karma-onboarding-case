import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import { useQuery } from '@tanstack/react-query';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import { explore } from '../../api/explore';
import Colors from '../../../assets/theme/Colors';
import { styles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import FilterIcon from '../../assets/icon/filter-icon';
import Slider from '@react-native-community/slider';
import CloseIcon from '../../assets/icon/close-icon';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import ModalComponent from '../../components/ModalComponent';
import { acceptFriend, requestFriend } from '../../api/friend';

export default function DiscoverScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [distance, setDistance] = useState(80);
  const [resquestModal, setRequestModal] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { location, loading, refresh } = useCurrentLocation();

  const { data: getExplore } = useQuery({
    queryKey: ['getExplore', distance],
    queryFn: () => explore(distance, 37.7749, -122.4194),
  });

  const SLIDER_WIDTH = 300;
  const thumbPosition = (distance / 100) * SLIDER_WIDTH - 12;

  const friends = getExplore?.data || [];

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

  const handleAcceptFriend = async (selectedUserId: string) => {
    try {
      const response = await requestFriend(selectedUserId);
      console.log('res:', response);
    } catch (err: any) {
      console.error(err);
    }
  };

  const handleRequestModal = (id: string) => {
    setSelectedUserId(id);
    setRequestModal(true);
  };

  return (
    <SafeAreaView style={styles.flex} edges={['top']}>
      <Header />
      <View style={{ flex: 1, marginTop: 10 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: location?.latitude ?? 37.7749,
            longitude: location?.longitude ?? -122.4194,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          {friends.map((friend: any) => (
            <Marker
              key={friend._id}
              coordinate={{
                latitude: friend.latitude,
                longitude: friend.longitude,
              }}
            >
              <TouchableOpacity
                onPress={() => handleRequestModal(friend._id)}
                style={styles.markerContainer}
              >
                <View style={styles.bubble}>
                  <View>
                    <Text style={styles.username}>@{friend.username}</Text>
                    <Text style={styles.time}>
                      {getTimeAgo(friend.createdAt)}
                    </Text>
                  </View>
                  <View style={styles.emthyView} />
                  {friend.url && (
                    <View style={styles.avatarOverlay}>
                      <Image
                        source={{ uri: friend.url }}
                        style={styles.avatar}
                      />
                    </View>
                  )}
                </View>
                <View style={styles.pointer} />
              </TouchableOpacity>
            </Marker>
          ))}
        </MapView>
        <LinearGradient
          colors={[
            'rgba(255,255,255,0.95)',
            'rgba(255,255,255,0)',
            'transparent',
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.mapOverlay}
        />
        <TouchableOpacity
          onPress={() => setModalVisible(!isModalVisible)}
          style={[
            styles.filterBtn,
            isModalVisible && { backgroundColor: Colors.Primary },
          ]}
        >
          {isModalVisible ? (
            <CloseIcon width={20} />
          ) : (
            <FilterIcon width={25} />
          )}
        </TouchableOpacity>
        {isModalVisible && (
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter</Text>
            <Text style={styles.subTitle}>
              Filter to see results close to you
            </Text>

            <View style={styles.sliderLabels}>
              <Text style={styles.labelText}>0 km</Text>
              <Text style={styles.labelText}>100 km</Text>
            </View>

            <View style={{ position: 'relative' }}>
              <Slider
                style={{ width: SLIDER_WIDTH, height: 10 }}
                minimumValue={0}
                maximumValue={100}
                step={1}
                minimumTrackTintColor={Colors.Primary}
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor={Colors.Primary}
                value={distance}
                onSlidingComplete={setDistance}
              />

              <Text
                style={{
                  position: 'absolute',
                  top: 20,
                  left: thumbPosition,
                  color: Colors.Black,
                  fontWeight: '600',
                }}
              >
                {Math.round(distance)} km
              </Text>
            </View>

            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.applyButtonText}>See Results</Text>
            </TouchableOpacity>
          </View>
        )}
        {resquestModal && (
          <ModalComponent
            isModalVisible={resquestModal}
            setModalVisible={setRequestModal}
            title="Send Friend Request"
            description="Are you sure you want to add @username as a friend?"
            buttonText="No"
            buttonText2="Yes"
            onpress={() => setRequestModal(false)}
            onpress2={() => handleAcceptFriend(selectedUserId!)}
            multiButton
          />
        )}
      </View>
    </SafeAreaView>
  );
}
