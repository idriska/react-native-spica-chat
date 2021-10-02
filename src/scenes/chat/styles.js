import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../styles';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default styles;
