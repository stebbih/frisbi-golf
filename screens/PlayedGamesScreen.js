import React from 'react';
import { View } from 'react-native';
import ResultsScreen from './ResultsScreen';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };	 

  render() {
    return (
      <View style={{ width: '100%', marginTop: 40 }}>
        <ResultsScreen />
      </View>
    );
  }
}
