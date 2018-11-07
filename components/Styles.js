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
    // flex: 1,
    backgroundColor: '#c2ef99',
    // alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    margin: 20,
  },
  addUserButton: {
    fontSize: 32,
    color: 'green',
    padding: 10,
  },
  flatText: {
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
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#fab',
    backgroundColor: '#fbfbfb',
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
    borderBottomColor: '#fab',
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
  /** Rules and RuleScreen styles */
  ruleContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  ruleTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  ruleHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  ruleHeaderText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
    paddingLeft: 15,
  },
  ruleAngleButton: {
    fontSize: 40,
    textAlign: 'right',
    paddingRight: 15,
    paddingBottom: 20,
  },
  ruleContent: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  rulePageContainer: {
    backgroundColor: '#fff',
  },
  /** Trophy style */
  trophyStyle: {
    fontSize: 26,
  },

  /** CourseScreen Styles */
  courseContainer: {
    flex: 1,
    backgroundColor: '#c2ef99',
    paddingTop: Constants.statusBarHeight,
  },
  courseTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  courseHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseHeaderText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
  },
  courseAngleButton: {
    fontSize: 40,
    textAlign: 'right',
  },
  courseContent: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
