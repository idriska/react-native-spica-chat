import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';

const MessageItem = ({callback, data, isCurrentUser}) => {
  const setCallback = value => {
    callback(value);
  };

  return (
    <TouchableOpacity
      style={[styles.container, isCurrentUser ? styles.owner : styles.opponent]}
      onPress={() => setCallback()}>
      <Text style={styles.message}>{data.message}</Text>
    </TouchableOpacity>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingVertical: 8,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  owner: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0,
    backgroundColor: Colors.PRIMARY
  },
  opponent: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    backgroundColor: Colors.HELPER_1,
  },
  message: {
    color: Colors.WHITE,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
