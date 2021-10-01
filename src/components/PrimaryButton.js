import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';

const PostCard = ({callback, text}) => {
  const setCallback = value => {
    callback(value);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => setCallback()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.PRIMARY,
  },
  text: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});
