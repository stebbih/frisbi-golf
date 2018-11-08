import React from 'react';

import {
  View,
  // Button,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import styles from '../components/Styles';
import RenderItemComponent from '../components/NewGameComponents/RenderItemComponent';
import { startNewGame, addPlayers, deletePlayer } from '../redux/actions';
import AddAndSubmitPlayer from '../components/NewGameComponents/AddAndSubmitPlayer';
import Button from '../components/itemComponents/Button';


// Gera array af userum og senda a GameScreen

class NewGameScreen extends React.Component {
  static navigationOptions = {
    title: 'NÝR LEIKUR',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
    },
  };

  // constructor(props) {
  //   super(props);
  // }

  pressedAddUser = (user) => {
    const { userName } = this.state;

    if (userName !== '') {
      this.props.addPlayers(user);
    }
  };

  startGame = (course, players) => {
    this.props.startNewGame(course, players);
    this.props.navigation.navigate('Game');
  };

  removePlayer = (item) => {
    this.props.deletePlayer(item);
  };

  render() {
    const { players, navigation } = this.props;
    const { params } = navigation.state;
    return (
      <View style={styles.newGameContainer}>
        <AddAndSubmitPlayer />
        <View style={styles.flatListView}>
          <FlatList
            data={players}
            renderItem={({ item }) => (
              <RenderItemComponent
                renderPlayers={item.name}
                isId={item.id}
                removePlayer={() => this.removePlayer(item.id)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <KeyboardAvoidingView style={styles.buttonView} behavior="padding" enabled>
          <Button
            text="SPILA"
            color="#FFFFFF"
            backgroundColor="green"
            handleOnPress={({ course }) => navigation.navigate('Game', course)}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.addPlayers,
    currentGame: state.currentGame,
  };
}

export default connect(
  mapStateToProps,
  { addPlayers, startNewGame, deletePlayer },
)(NewGameScreen);
