import React from 'react';
import {
  Text, View, TextInput, Button, TouchableHighlight, FlatList,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from '../components/Styles';

// Gera array af userum og senda a GameScreen

export default class NewGameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // courseLength: 8,
      playerArr: [],
      userName: '',
      len: 1,
    };
  }

  pressedAddUser = () => {
    const { userName, len } = this.state;

    // if (userName !== '') {
    //   game.push(userName);
    // }
    // console.warn(game);
    this.setState({ len: len + 1 });
    const myObj = {
      id: len,
      key: userName,
    };

    this.state.playerArr.push(myObj);
  }

  pressedPlay = () => {
    console.warn('Pressed play!');
  }

  render() {
    const myObj = {
      id: 1,
      key: 'Bla',
    };
    this.state.playerArr.push(myObj);

    // console.warn(this.state.playerArr);
    // const pArray = this.state.playerArr;
    return (
      <View style={styles.container}>
        <View style={styles.newGameContainer}>
          <Text>Skráðu leikmenn</Text>
          <TextInput onChangeText={userName => this.setState({ userName })} style={styles.textInputStyle} />
          <TouchableHighlight onPress={this.pressedAddUser}>
            <Feather name="user-plus" style={styles.addUserButton} />
          </TouchableHighlight>
          <Button onPress={this.pressedPlay} title="Spila!" color="green" />
        </View>

        <FlatList
          data={this.state.playerArr}
          extraData={this.state.playerArr}
          renderItem={({ item }) => (<Text style={styles.flatText}>Ha</Text>)}
          // removeUser
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
