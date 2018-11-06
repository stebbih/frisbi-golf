import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 4,
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  horizontalViewTest: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
