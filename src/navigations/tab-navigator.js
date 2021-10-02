import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StatusScreen from '../scenes/status';
import ChatScreen from '../scenes/chat';
import CallScreen from '../scenes/call';
import MoreScreen from '../scenes/more';

import {HeaderBar} from '../components';
import {Colors} from '../styles';

const Tab = createBottomTabNavigator();

let headerOption = {
  headerShown: true,
  headerStyle: {
    backgroundColor: Colors.PRIMARY,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '500',
  },
  headerTitleAlign: 'center',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      swipeEnabled={false}
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 7,
        },
      }}>
      <Tab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'Durum',
          ...headerOption,
        //   headerTitle: props => <HeaderBar />,
          tabBarIcon: ({color}) => (
            <Ionicons name="radio-button-on" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: 'Mesajlar',
          ...headerOption,
          tabBarIcon: ({color}) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={CallScreen}
        options={{
          title: 'Aramalar',
          ...headerOption,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="phone" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: 'Daha Fazla',
          ...headerOption,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" color={color} size={28} />
          ),
        }}
      />
      {/* <Tab.Screen
                name="Bid"
                component={BidScreen}
                options={{
                    tabBarColor: '#000050',
                    tabBarIcon: ({ color }) => (
                        <>
                            <FontAwesome5 name="exchange-alt" color={color} size={24} />
                            {
                                global.bidCount > 0 ? (
                                    <View style={{ position: 'absolute', right: -10, top: -5, backgroundColor: 'red', borderRadius: 9, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 10 }}>{global.bidCount}</Text>
                                    </View>
                                ) : null
                            }
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarColor: '#000050',
                    tabBarIcon: ({ color }) => (
                        <>
                            <MaterialCommunityIcons name="email" color={color} size={24} />
                            {
                                global.messageCount > 0 ? (
                                    <View style={{ position: 'absolute', right: -10, top: -5, backgroundColor: 'red', borderRadius: 9, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 10 }}>{global.messageCount}</Text>
                                    </View>
                                ) : null
                            }
                        </>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarColor: '#000050',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={24} />
                    ),
                }}
            /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
