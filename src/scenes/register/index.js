import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import styles from './styles';
import {PrimaryButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OTPTextInput from 'react-native-otp-textinput';
import {Colors} from '../../styles';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [otp, setOTP] = useState(false);
  const [title, setTitle] = useState('Telefon Numarası');
  const [informText, setInformText] = useState(
    'Numaranızın doğrulanması için SMS ile tek kullanımlık ONAY KODU gönderilecektir.',
  );
  const [btnText, setBtnText] = useState('Onay Kodu Al');

  const nextStep = currentStep => {
    currentStep = currentStep + 1;
    setStep(currentStep);

    if (currentStep == 2) {
      setTitle('Onay Kodu');
      setInformText(
        "+90 5530129507 umaralı telefona gönderilen 5 haneli ONAY KOD'u girin.",
      );
      setBtnText('Onayla');
    } else if (currentStep == 3) {
      setTitle('Profil');
      setInformText('');
      setBtnText('Tamamla');
    } else if (currentStep == 4) {
      navigation.navigate('TabNavigator')
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.PRIMARY} />
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.step}>Adım {step}/3</Text>
        </View>

        <Text style={styles.informText}>{informText}</Text>
        {step == 1 ? (
          <>
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
          </>
        ) : step == 2 ? (
          <View style={styles.verificationContainer}>
            <OTPTextInput
              keyboardType="phone-pad"
              inputCount={5}
              autoFocus={true}
              containerStyle={styles.otpContainer}
              textInputStyle={styles.otpInput}
              tintColor={Colors.PRIMARY}
              offTintColor={Colors.GRAY_MEDIUM}
              handleTextChange={value => setOTP(value)}></OTPTextInput>
            <Text style={styles.timer}>01:27</Text>
            <TouchableOpacity style={styles.sendAgainBtn}>
              <Text style={styles.sendAgainText}>Tekrar Gönder</Text>
              <MaterialIcons
                style={styles.sendAgainIcon}
                name="refresh"
                color={'white'}
                size={20}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.profileBackground}></View>
            <View style={styles.profileContainer}>
              <View style={styles.avatarContainer}>
                <Image
                  style={styles.avatar}
                  source={{
                    uri: 'https://cdn.geekwire.com/wp-content/uploads/2019/01/mackenziebezos.jpg',
                  }}
                />
                <TouchableOpacity style={styles.addAvatarBtn}>
                  <MaterialIcons
                    name="photo-camera"
                    color={'white'}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
              <TextInput
                placeholder="İsim"
                style={styles.profileInput}></TextInput>
              <Text style={styles.profileInfo}>
                BiP profilinizde bu isim görüecektir
              </Text>
              <TextInput
                placeholder="Ne düşünüyorsun?"
                style={styles.profileInput}></TextInput>
            </View>
          </>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          text={btnText}
          callback={() => {
            nextStep(step);
          }}
        />
        <Text style={styles.supportText}>
          BiP'e giriş yapmak için{' '}
          <Text style={styles.supportLink}>yardım alın</Text>
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
