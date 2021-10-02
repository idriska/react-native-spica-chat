import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Colors} from '../styles';

const CreateChatItem = ({click, data}) => {
  let initials = '';
  const setClick = value => {
    click(value);
  };

  initials = data.name.split(' ');
  if (initials.length > 1) {
    initials = `${initials[0][0]}${initials[1][0]}`;
  } else {
    initials = `${initials[0][0]}${initials[0][1]}`;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => setClick('avatar')}>
        {data.image ? (
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://cdn.geekwire.com/wp-content/uploads/2019/01/mackenziebezos.jpg',
            }}
          />
        ) : (
          <Text style={styles.initials}>{initials.toUpperCase()}</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nameContainer}
        onPress={() => setClick('chat')}>
        <Text style={styles.name}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateChatItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.HELPER_1,
  },
  initials: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.PRIMARY,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 55,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 10,
    flex: 1,
    borderColor: Colors.GRAY_MEDIUM,
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.BLACK,
    paddingBottom: 3,
  },
});
