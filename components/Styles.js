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
    justifyContent: 'center',
  },
  horizontalViewTest: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 30,
    minWidth: 150,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    fontSize: 15,
    // backgroundColor: 'blue',
  },
  /* *** New Game custom styles *** */
  newGameContainer: {
    //flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20,
  },
});
