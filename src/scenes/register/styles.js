import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    marginTop: 70,
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
    fontSize: 12
  },
  informText: {
    marginTop: 15,
    paddingHorizontal: 20,
    lineHeight: 22
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

  phoneContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  phoneInput: {
    flex: 1,
    fontSize: 17,
    paddingHorizontal: 15
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
