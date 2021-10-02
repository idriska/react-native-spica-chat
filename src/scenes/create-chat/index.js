import React, { Component } from 'react';
import {
    Text,
    View,
  } from 'react-native';
  import { CreateChatItem } from '../../components';

  const CreateChatScreen = () => {
    return (
      <View>
           <CreateChatItem data={{icon: "users", text: "Yeni Group"}}/>
           <CreateChatItem data={{icon: "qrcode", text: "QR Kod ile Gruba Dahil Ol"}}/>
           <CreateChatItem data={{icon: "list-ul", text: "Yeni Toplu Mesaj Listesi"}}/>
           <CreateChatItem data={{icon: "bullhorn", text: "Yeni Kanal"}}/>
      </View>
    );
  };
  
  export default CreateChatScreen;