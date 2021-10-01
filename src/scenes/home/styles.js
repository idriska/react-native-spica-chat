import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 70,
  },
  welcomeText: {
      fontSize: 24,
      fontWeight: '500',
      marginTop: 15
  },
  defaulText: {
    fontSize: 16,
    marginVertical: 10
  },
  termsBtn: {
    backgroundColor: 'red'
  },
  termsText: {
    marginTop: 10,
    paddingBottom: 80,
  },
  termsLink:{
      color: Colors.PRIMARY
  }
});

export default styles;
