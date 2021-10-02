import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors} from '../styles';

const HeaderBar = ({callback, text}) => {
  const setCallback = value => {
    callback(value);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/biplogo.png')}
        resizeMode="contain"
      />
      <Text>{text}</Text>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.PRIMARY,
  },
  logo: {
    
  },
  text: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});
