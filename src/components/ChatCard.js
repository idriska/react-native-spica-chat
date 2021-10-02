import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Colors} from '../styles';

const ChatCard = ({click, data}) => {
  const setClick = value => {
    click(value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => setClick('avatar')}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://cdn.geekwire.com/wp-content/uploads/2019/01/mackenziebezos.jpg',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.chatContainer}
        onPress={() => setClick('chat')}>
        <View>
          <Text style={styles.name}>BiP</Text>
          <Text style={styles.message}>BiP'e Hoş Geldiniz! 🎉</Text>
        </View>
        <View style={styles.metada}>
          <Text style={styles.date}>dün</Text>
          <Text style={styles.count}>1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarContainer: {
    width: 55,
    height: 55,
    borderRadius: 55,
    marginLeft: 10,
    marginRight: 20,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 55,
  },
  chatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 10,
    flex: 1,
    borderColor: Colors.GRAY_MEDIUM,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.PRIMARY,
  },
  message: {
    fontSize: 12,
    color: Colors.GRAY_DARK,
    marginTop: 5,
  },
  metada: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  date: {
    color: Colors.PRIMARY,
    fontSize: 12
  },
  count: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 5,
    width: 18,
    height: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 100,
    fontSize: 12,
    color: Colors.WHITE
  }
});
