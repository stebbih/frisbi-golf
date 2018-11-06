import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import { Feather } from '@expo/vector-icons';
import styles from '../components/Styles';

// Gera array af userum og senda a GameScreen

export default class NewGameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.newGameContainer}>
          <Text>Skráðu leikmenn</Text>
          <TextInput style={styles.textInputStyle} />
          <Feather name="user-plus" size={32} color="green" />
          <Button title="Spila!" />
        </View>
      </View>
    );
  }
}
