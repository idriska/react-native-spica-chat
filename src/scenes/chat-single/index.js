import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {Colors} from '../../styles';
import {MessageItem} from '../../components';
import {DataService} from '../../services/data.service';
import {UserService} from '../../services/user.service';
import {ScrollView} from 'react-native-gesture-handler';

const ChatSingleScreen = ({route}) => {
  const [$messages, set$messages] = useState();
  const dataService = new DataService();
  const userService = new UserService();
  const {chat, opponent} = route.params;
  const [height, setHeight] = useState(35);
  const [message, setMessage] = useState('');
  const [chatGroup, setChatGroup] = useState({});
  const [usersInChatGroup, setUsersInChatGroup] = useState({});
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();

  useEffect(async () => {
    if (chat) {
      let user = await userService.getActiveUser();
      setUser(user);
      setChatGroup(chat);
      // setUserInChat();
      getAllMessages();
    } else {
      chatGroup['name'] = opponent.name;
    }
  }, []);

  // setUserInChat = () => {
  //   chatGroup.last_active.forEach(item => {
  //     setUsersInChatGroup({usersInChatGroup, ...item});
  //   });
  // };

  getAllMessages = () => {
    let $messages = dataService.resources.message.getAllRealtime({
      filter: {chat: '615b5beb637cc6002d7a1872'},
      limit: 10,
      skip: 0,
      sort: {_id: -1},
    });
    $messages.subscribe(data => {
      data.reverse();
      setMessages(data);
    });
    set$messages($messages);
  };

  sendMessage = () => {
    if (message.length > 0) {
      $messages.insert({
        message: message,
        owner: user._id,
        chat: chat._id,
      });
    } else {
    }
  };

  const renderMessages = () => {
    return messages.map((message, index) => {
      return (
        <MessageItem
          key={index}
          data={message}
          isCurrentUser={message.owner == user._id}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatArea}>{renderMessages()}</ScrollView>
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

        {message.length > 0 ? (
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => sendMessage()}>
            <MaterialCommunityIcons
              name="send-circle"
              color={Colors.PRIMARY}
              size={46}
            />
          </TouchableOpacity>
        ) : (
          <>
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
          </>
        )}
      </View>
    </View>
  );
};

export default ChatSingleScreen;
