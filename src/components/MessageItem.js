import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';

const MessageItem = ({callback, data}) => {
  const setCallback = value => {
    callback(value);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => setCallback()}>
      <Text style={styles.text}>{data.message}</Text>
    </TouchableOpacity>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    padding: 15,
    paddingVertical: 8,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#3834ac',
    borderRadius: 20,
    borderBottomRightRadius: 0,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
