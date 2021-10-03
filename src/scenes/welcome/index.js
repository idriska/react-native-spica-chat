import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import styles from './styles';
import {PrimaryButton} from '../../components';
import {Colors} from '../../styles';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <Image
        style={styles.logo}
        source={require('../../assets/img/biplogo.png')}
        resizeMode="contain"
      />
      <Text style={styles.welcomeText}>BiP'e Hoş Geldiniz!</Text>
      <Text style={styles.defaulText}>
        Güvenli ve kaliteli iletişim için devam edin!
      </Text>
      <PrimaryButton
        text="Devam"
        callback={() => {
          navigation.navigate('Regsiter');
        }}
      />
      <Text style={styles.termsText}>
        BiP'i kullanarak
        <Text style={styles.termsLink}> Kullanıcı Koşuallrı</Text>
        'nı kabul etmiş sayılırsın.
      </Text>
    </View>
  );
};

export default WelcomeScreen;
