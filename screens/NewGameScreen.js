import React from 'react';

import { View, KeyboardAvoidingView, FlatList } from 'react-native';

import { connect } from 'react-redux';
import styles from '../components/Styles';
import RenderItemComponent from '../components/NewGameComponents/RenderItemComponent';
import { startNewGame, addPlayers, deletePlayer } from '../redux/actions';
import AddAndSubmitPlayer from '../components/NewGameComponents/AddAndSubmitPlayer';
import Button from '../components/itemComponents/Button';

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
      <KeyboardAvoidingView style={styles.newGameContainer} behavior="padding" enabled>
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
        <View style={styles.newGameBottomPanelContainer}>
          <View style={{ margin: 6 }}>
            <Button
              text="SPILA"
              color="#FFFFFF"
              backgroundColor="green"
              handleOnPress={() => this.startGame(params, players)}
            />
          </View>
          <AddAndSubmitPlayer />
        </View>
      </KeyboardAvoidingView>
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
