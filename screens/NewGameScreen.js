import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});


export default class NewGameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> NewGameScreen: New game kemur hér! </Text>
      </View>
    );
  }
}
