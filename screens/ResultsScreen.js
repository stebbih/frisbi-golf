import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { styles } from '../components/Styles.js';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Results screen kemur hér! </Text>
      </View>
    );
  }
}
