import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CreateChatItem, UserListItem} from '../../components';
import styles from './styles';

const CreateChatScreen = () => {
  const renderUserList = () => {
    return [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => {
      return <UserListItem key={index} data={{image: '', name: 'Melis Çiçek'}} />;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <CreateChatItem data={{icon: 'users', text: 'Yeni Group'}} />
      <CreateChatItem
        data={{icon: 'qrcode', text: 'QR Kod ile Gruba Dahil Ol'}}
      />
      <CreateChatItem
        data={{icon: 'list-ul', text: 'Yeni Toplu Mesaj Listesi'}}
      />
      <CreateChatItem data={{icon: 'bullhorn', text: 'Yeni Kanal'}} />
      <View style={styles.divider}></View>
      <Text style={styles.userCount}>BiP'li Kişiler (63)</Text>

      {renderUserList()}
    </ScrollView>
  );
};

export default CreateChatScreen;
