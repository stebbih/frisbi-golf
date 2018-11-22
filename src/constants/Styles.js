import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';
import Colors from './Colors';

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
    flex: 1,
    height: 40,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
    margin: 6,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  textInputInvalidStyle: {
    flex: 1,
    height: 40,
    borderColor: Colors.warningColor,
    borderWidth: 1,
    borderRadius: 15,
    margin: 6,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  /* *** New Game custom styles *** */
  newGameContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  newGameBottomPanelContainer: {
    alignSelf: 'flex-end',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  flatText: {
    fontSize: 20,
    padding: 10,
  },
  noConentFlatlistContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  addPlayerInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addPlayerButtonContainer: {
    alignSelf: 'flex-end',
    margin: 6,
  },
  flatListView: {
    flex: 6,
    marginTop: 60,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  buttonView: {
    flex: 1,
  },
  invalidText: {
    color: 'red',
    fontSize: 14,
  },
  newGameListPlayerContainer: {
    flex: 1,
    padding: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: '#D9d9d9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delButton: {
    flex: 1,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.warningColor,
    borderRadius: 4,
  },
  delButtonText: {
    color: '#fff',
  },
  /** Game screen custom styles */
  gameScreenBasketContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 12,
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
    alignSelf: 'center',
  },
  gameScreenHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  scoreInputStyle: {
    height: 40,
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.tintColor,
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
  collapsibleContentText: {
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
  /** PlayedGamesTab */
  playedContainer: {
    flex: 1,
  },
  playedGamesHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  playedGamesNoConentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noContentText: {
    fontSize: 30,
    color: '#CCC',
    textAlign: 'center',
  },
});
