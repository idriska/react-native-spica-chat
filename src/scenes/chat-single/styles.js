import {StyleSheet, Dimensions, Platform} from 'react-native';
import {Colors} from '../../styles';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    width: viewportWidth,
    maxHeight: 100,
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageInput: {
    marginVertical: 10,
    width: '100%',
    borderRadius: 20,
    minHeight: 40,
    maxHeight: 90,
    paddingLeft: 10,
    paddingRight: 35,
    backgroundColor: '#ebebeb',
  },
  attachIcon: {
    position: 'absolute',
    right: 5,
    transform: [{rotate: '-30deg'}],
  },
});

export default styles;
