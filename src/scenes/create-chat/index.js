import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CreateChatItem, UserListItem} from '../../components';
import styles from './styles';
import Contacts from 'react-native-contacts';
import {useState} from 'react/cjs/react.development';
import {Colors} from '../../styles';

const CreateChatScreen = () => {
  let allContacts = [];
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      console.log(contacts)
      contacts.forEach(contact => {
        allContacts.push({
          name: contact.displayName,
          msisdn: contact.phoneNumbers[0],
        });
      });
      setContacts(allContacts);
    });
  }, []);

  const renderUserList = () => {
    return contacts.map((item, index) => {
      if (item.name) return <UserListItem key={index} data={item} />;
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

      {contacts.length ? (
        <>
          <Text style={styles.userCount}>
            BiP'li Kişiler ({contacts.length})
          </Text>
          {renderUserList()}
        </>
      ) : (
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color={Colors.PRIMARY}></ActivityIndicator>
      )}
    </ScrollView>
  );
};

export default CreateChatScreen;
