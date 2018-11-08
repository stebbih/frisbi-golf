import React from 'react';
import { View } from 'react-native';
import ResultsScreen from './ResultsScreen';
import Colors from '../constants/Colors';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'LEIKIR',
    headerLeft: (<View />),
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
      alignSelf: 'center',
    },
  };

  render() {
    return (
      <View style={{ width: '100%', marginTop: 40 }}>
        <ResultsScreen />
      </View>
    );
  }
}
