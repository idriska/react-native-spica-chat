import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Colors} from '../styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CreateChatItem = ({click, data}) => {
  const setClick = value => {
    click(value);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => setClick('chat')}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={data.icon} color={Colors.PRIMARY} size={22} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CreateChatItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    width: 55,
    height: 50,
    borderRadius: 55,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 10,
    flex: 1,
    borderColor: Colors.GRAY_MEDIUM,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.PRIMARY,
  },
});
