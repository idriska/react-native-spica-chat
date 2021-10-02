import React, {Component} from 'react';
import {Text, View, StatusBar} from 'react-native';
import {FabIcon} from '../../components';
import styles from './styles';
import {Colors} from '../../styles';
import {ChatCard} from '../../components';

const ChatScreen = () => {
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
        <FabIcon icon="chatbubble-ellipses-outline" click={() => {}} />
      </View>
    </View>
  );
};

export default ChatScreen;
