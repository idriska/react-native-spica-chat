import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {PrimaryButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Telefon Numarası</Text>
          <Text style={styles.step}>Adım 1/3</Text>
        </View>
        
        <Text style={styles.informText}>
          Numaranızın doğrulanması için SMS ile tek kullanımlık ONAY KODU
          gönderilecektir.
        </Text>
        <TouchableOpacity style={styles.countryBtn}>
          <Text style={styles.countryText}>Türkiye</Text>
          <Entypo name="chevron-right" color={'gray'} size={24} />
        </TouchableOpacity>
        <View style={styles.phoneContainer}>
          <Text style={styles.countruCode}>+90</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.phoneInput}
            placeholder="Telefon Numarası"></TextInput>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton text="Onay Kodu Al" />
        <Text style={styles.supportText}>
          BiP'e giriş yapmak için{' '}
          <Text style={styles.supportLink}>yardım alın</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
