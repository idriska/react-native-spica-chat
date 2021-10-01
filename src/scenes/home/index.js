import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import styles from './styles';
import {PrimaryButton} from '../../components';
import {Colors} from '../../styles';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  
  return (
    <View style={styles.container}>
     <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
