import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';
import Colors from '../constants/Colors';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: 50,
    minWidth: 210,
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    fontSize: 18,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  /* *** New Game custom styles *** */
  newGameContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    margin: 6,
  },
  flatText: {
    fontSize: 16,
    borderTopColor: 'gray',
  },
  playersAddedView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flatListView: {
    flex: 6,
    marginTop: 25,
  },
  buttonView: {
    flex: 1,
  },
  /** Game screen custom styles */
  gameScreenBasketContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fbfbfb',
    width: Dimensions.get('window').width - 8,
    alignItems: 'center',
  },
  gameScreenPlayerContainer: {
    flex: 1,
    padding: 10,
    margin: 6,
    borderWidth: 1,
    borderColor: '#D9d9d9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gameScreenPlayerText: {
    fontSize: 20,
  },
  gameScreenBasketScrollView: {
    flex: 1,
    width: '100%',
  },
  gameScreenHeaderContainer: {
    paddingTop: 20,
    padding: 10,
  },
  gameScreenHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scoreInputStyle: {
    height: 40,
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#54913a',
    fontSize: 24,
  },
  scoreInputInvalid: {
    height: 40,
    width: 50,
    borderBottomWidth: 2,
    borderBottomColor: Colors.warningColor,
    fontSize: 24,
  },
  /** OtherScreen styles */
  otherContainer: {
    backgroundColor: '#fff',
  },
  otherBottomContainer: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: Constants.statusBarHeight,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  otherText: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'space-around',
    paddingLeft: 15,
  },
  otherButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  otherButtonsIcon: {
    fontSize: 40,
  },
  /** Collapsible list styles */
  collapsibleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  collapsibleTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  collapsibleHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingLeft: 20,
  },
  collapsibleHeaderText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 20,
  },
  collapsibleAngleButton: {
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 20,
  },
  collapsibleContent: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  collapsibleContnetText: {
    fontSize: 16,
  },
  collapsibleCollapseTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  /** AboutUsScreen styles */
  aboutUsScreenContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  aboutUsScreenText: {
    fontSize: 20,
  },
  /** Trophy style */
  trophyStyle: {
    fontSize: 26,
  },
});
