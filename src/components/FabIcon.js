import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FabIcon = ({click, icon}) => {
  const setCallback = value => {
    click(value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => setCallback()}>
        <Ionicons name={icon} color={Colors.WHITE} size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default FabIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 50,
    backgroundColor: Colors.HELPER_1,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
