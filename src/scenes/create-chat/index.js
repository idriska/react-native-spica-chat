import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CreateChatItem, UserListItem} from '../../components';
import styles from './styles';
import Contacts from 'react-native-contacts';
import {useState} from 'react/cjs/react.development';
import {Colors} from '../../styles';
import {DataService} from '../../services/data.service';

const CreateChatScreen = () => {
  const dataService = new DataService();
  const [contacts, setContacts] = useState([]);
  let allContacts = [];
  let allMsisdns = [];

  useEffect(async () => {
    const contactsData = await Contacts.getAll();
    if (contactsData.length) {
      contactsData.forEach(contact => {
        let msisdn = contact.phoneNumbers[0]?.number;
        if (msisdn && msisdn.length > 9) {
          allContacts.push({
            name: contact.displayName,
            msisdn: formatMsisdn(msisdn),
          });
          allMsisdns.push(formatMsisdn(msisdn));
        }
      });
      const usersData = await getUsers();
      const mergedData = mergeUsersData(usersData)
      
      setContacts(mergedData);
    }
  }, []);

  const getUsers = async () => {
    try {
      const data = await dataService.resources.user.getAll({
        // queryParams: {
        //   filter: {
        //     msisdn: {$in: allMsisdns},
        //   },
        // },
      });
      return data;
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  const formatMsisdn = msisdn => {
    msisdn = msisdn.replace(/[^0-9]/g, '');
    return msisdn.substr(msisdn.length - 10, 10);
  };

  const mergeUsersData = (usersData) => {
    usersData.forEach(user => {
      let contact = allContacts.find(contact => {
        return contact.msisdn == user.msisdn;
      });
      user.name = contact.name;
    });
    return usersData
  }

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
