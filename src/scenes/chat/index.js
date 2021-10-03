import React, {useEffect} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {FabIcon} from '../../components';
import styles from './styles';
import {Colors} from '../../styles';
import {ChatCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {PermissionsAndroid} from 'react-native';

const ChatScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <ChatCard />
      <View style={styles.emptyChat}>
        <Text style={styles.emptyTitle}>Haydi BiP'le!</Text>
        <Text style={styles.emptyText}>
          Yeni sohbet başlatmak {'\n'} için 💬 'a tıkla ve istediğin {'\n'}
          kişiyi seç.
        </Text>
      </View>
      <View style={styles.fabIcon}>
        <FabIcon
          icon="chatbubble-ellipses-outline"
          click={() => {
            navigation.navigate('CreateChat');
          }}
        />
      </View>
    </View>
  );
};

export default ChatScreen;
