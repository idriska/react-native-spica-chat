import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {FabIcon} from '../../components';
import styles from './styles';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HELLO</Text>
      <View style={styles.fabIcon}>
        <FabIcon icon="chatbubble-ellipses-outline" click={() => {}}/>
      </View>
    </View>
  );
};

export default ChatScreen;
