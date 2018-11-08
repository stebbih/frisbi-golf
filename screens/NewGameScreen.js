import React from 'react';
import {
  Text, View, TextInput, Button, TouchableHighlight, FlatList,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from '../components/Styles';
import RenderItemComponent from '../components/NewGameComponents/RenderItemComponent';

import { addPlayers, deletePlayer } from '../redux/actions/newGameAction';

// Gera array af userum og senda a GameScreen

class NewGameScreen extends React.Component {
  static navigationOptions = {
    title: 'NYR LEIKUR',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
    },
  };

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
  }

  removePlayer = (item) => {
    this.props.deletePlayer(item);
  }

  render() {
    const { players, navigation } = this.props;

    return (
      <View style={styles.newGameContainer}>
        <View style={styles.playersAddedView}>
          <Text style={{ fontSize: 25, marginBottom: 15 }}>Skráðu leikmenn</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput onChangeText={userName => this.setState({ userName })} style={styles.textInputStyle} />
            <TouchableHighlight onPress={() => this.pressedAddUser(this.state.userName)}>
              <Feather name="user-plus" color="green" size={40} />
            </TouchableHighlight>
          </View>
        </View>
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
            // removeUser
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.buttonView}>
          <Button onPress={() => navigation.navigate('Game')} title="Spila!" color="green" />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.addPlayers,
  };
}

export default connect(mapStateToProps, { addPlayers, deletePlayer })(NewGameScreen);
