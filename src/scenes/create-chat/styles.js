import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../styles';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {},
  divider: {
    width: viewportWidth,
    height: 7,
    backgroundColor: Colors.GRAY_MEDIUM,
    top: -5,
  },
  userCount: {
    paddingHorizontal: 20,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  spinner: {
    marginTop: viewportHeight / 2 - 200,
  },
});

export default styles;
