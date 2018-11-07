import React from 'react';
import {
  Text, View, TextInput, Button, TouchableHighlight, FlatList,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from '../components/Styles';

import { addPlayers } from '../redux/actions/newGameAction';

// Gera array af userum og senda a GameScreen

class NewGameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // courseLength: 8,
      // playerArr: [],
      userName: '',
    };
  }

  pressedAddUser = (user) => {
    const { userName } = this.state;

    if (userName !== '') {
      this.props.addPlayers(user);
    }
  }

  pressedPlay = () => {
    console.warn('Pressed play!');
  }

  render() {
    const { players, navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.newGameContainer}>
          <Text style={{ fontSize: 20, marginBottom: 15 }}>Skráðu leikmenn</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput onChangeText={userName => this.setState({ userName })} style={styles.textInputStyle} />
            <TouchableHighlight onPress={() => this.pressedAddUser(this.state.userName)}>
              <Feather name="user-plus" color="green" size={40} />
            </TouchableHighlight>
          </View>
          <FlatList
            data={players}
            renderItem={({ item }) => (<Text key={item.id} style={styles.flatText}>{item.name}</Text>)}
            // removeUser
            keyExtractor={item => item.id}
          />
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

export default connect(mapStateToProps, { addPlayers })(NewGameScreen);
