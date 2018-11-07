import React from 'react';
import {
  Text, View, TextInput, Button, TouchableHighlight,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from '../components/Styles';

// Gera array af userum og senda a GameScreen

export default class NewGameScreen extends React.Component {
  PressedAddUser = () => {
    console.log('Pressed add user!');
  }

  PressedPlay = () => {
    console.log('Pressed play!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newGameContainer}>
          <Text>Skráðu leikmenn</Text>
          <TextInput style={styles.textInputStyle} />
          <TouchableHighlight onPress={this.PressedAddUser}>
            <Feather name="user-plus" style={styles.addUserButton} />
          </TouchableHighlight>
          <Button onPress={this.PressedPlay} title="Spila!" color="green" />
        </View>
      </View>
    );
  }
}
