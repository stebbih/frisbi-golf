import React from 'react';
import { Text, View } from 'react-native';
import styles from '../components/Styles';
import GridCreator from '../components/itemComponents/GridCreator';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <GridCreator />
    );
  }
}
