import React from 'react';
import { Text, View } from 'react-native';
import styles from '../components/Styles.js';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> NewGameScreen: New game kemur hér! </Text>
      </View>
    );
  }
}
