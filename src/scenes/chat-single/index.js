import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {Colors} from '../../styles';

const ChatSingleScreen = () => {
  const [height, setHeight] = useState(35);
  const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={{marginHorizontal: 10}}>
          <FontAwesome name="smile-o" color={Colors.PRIMARY} size={26} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            multiline={true}
            style={[styles.messageInput, {height: Math.max(35, height)}]}
            onContentSizeChange={e =>
              setHeight(e.nativeEvent.contentSize.height)
            }
            onChangeText={value => setMessage(value)}
            value={message}
            placeholder="Mesajınızı yazın"></TextInput>
          <TouchableOpacity style={styles.attachIcon}>
            <MaterialIcons
              name="attach-file"
              color={Colors.PRIMARY}
              size={24}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{marginLeft: 10}}>
          <MaterialCommunityIcons
            name="camera-outline"
            color={Colors.PRIMARY}
            size={26}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 10}}>
          <MaterialCommunityIcons
            name="microphone-outline"
            color={Colors.PRIMARY}
            size={26}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatSingleScreen;
