import React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import FontAwesome, { Icons } from 'react-native-fontawesome';
import styles from '../components/Styles';


// Gera array af userum og senda a GameScreen

export default class NewGameScreen extends React.Component {
  render() {
    return (
      <View style={styles.newGameContainer}>
        <Text>New Game Screen</Text>
        <TextInput style={styles.textInputStyle} />
        {/* <FontAwesome>{Icons.plus-square-o}</FontAwesome> */}
        <Button title="Spila!" />
      </View>
    );
  }
}
