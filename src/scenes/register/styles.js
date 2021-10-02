import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../styles';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    paddingTop: 70,
  },
  bottomContainer: {
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
  },
  step: {
    fontSize: 12,
  },
  informText: {
    marginTop: 15,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  countryBtn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: '#dedede',
  },
  countryText: {
    fontSize: 16,
  },
  countruCode: {
    fontSize: 18,
  },
  verificationContainer: {
    marginHorizontal: 20,
  },
  otpContainer: {
    marginTop: 20,
    width: 300,
    alignSelf: 'center',
  },
  otpInput: {
    width: 50,
    borderBottomWidth: 2,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#eaeaea',
  },
  phoneContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phoneInput: {
    flex: 1,
    fontSize: 17,
    paddingHorizontal: 15,
  },
  timer: {
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-end',
    marginTop: 30,
  },
  sendAgainBtn: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    alignSelf: 'flex-end',
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  sendAgainText: {
    color: Colors.WHITE,
  },
  sendAgainIcon: {
    marginLeft: 5,
    marginRight: -2,
  },
  profileContainer: {
    paddingHorizontal: 20 
  },
  profileBackground: {
    width: viewportWidth,
    height: 190,
    backgroundColor: '#e0e0e0',
    position: 'absolute',
    zIndex: -1
  },
  avatarContainer: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginBottom: 20
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  addAvatarBtn: {
    backgroundColor: Colors.PRIMARY,
    width: 35,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  profileInput: {
    borderBottomWidth: 1,
    borderColor: Colors.GRAY_MEDIUM,
    padding: 0,
  },
  profileInfo: {
    fontSize: 12,
    color: Colors.GRAY_DARK,
    marginTop: 8,
    marginBottom: 20
  },

  supportLink: {
    color: Colors.PRIMARY,
  },
  supportText: {
    marginTop: 25,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
