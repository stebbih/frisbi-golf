import React from 'react';
import {
  Text, View, TextInput, Button, TouchableHighlight, FlatList,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from '../components/Styles';

import { startNewGame, addPlayers } from '../redux/actions';

// Gera array af userum og senda a GameScreen

class NewGameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  pressedAddUser = (user) => {
    const { userName } = this.state;

    if (userName !== '') {
      this.props.addPlayers(user);
    }
  };

  startGame = () => {
    this.props.startNewGame(players);
    this.props.navigation.navigate('Game');
  };

  render() {
    const { players } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.newGameContainer}>
          <Text style={{ fontSize: 20, marginBottom: 15 }}>Skráðu leikmenn</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              onChangeText={userName => this.setState({ userName })}
              style={styles.textInputStyle}
            />
            <TouchableHighlight onPress={() => this.pressedAddUser(this.state.userName)}>
              <Feather name="user-plus" color="green" size={40} />
            </TouchableHighlight>
          </View>
          <FlatList
            data={players}
            renderItem={({ item }) => (
              <Text key={item.id} style={styles.flatText}>
                {item.name}
              </Text>
            )}
            // removeUser
            keyExtractor={item => item.id}
          />
          <Button onPress={this.startGame()} title="Spila!" color="green" />
        </View>
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
  { addPlayers, startNewGame },
)(NewGameScreen);
