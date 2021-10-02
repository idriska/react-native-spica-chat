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
  emptyChat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  emptyTitle: {
      fontSize: 22,
      fontWeight: '500',
      color: Colors.PRIMARY,
  },
  emptyText: {
      fontSize: 18,
      marginTop: 15,
      lineHeight: 25,
      textAlign: 'center',
      color: Colors.GRAY_DARK
  }
});

export default styles;
