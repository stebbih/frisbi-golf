import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import Rule from '../components/RulesComponents/Rule';
import Reglur from '../data/Reglur.json';
import styles from '../components/Styles';

export default class RulePage extends Component {
  static navigationOptions = {
    title: 'REGLUR',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 15,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      rules: Reglur,
    };
  }

    _renderItem = ({ item }) => (
      <Rule title={item.title} text={item.content} />
    )

    render() {
      return (
        <View style={styles.rulePageContainer}>
          <FlatList
            data={this.state.rules}
            keyExtractor={item => item.title}
            renderItem={this._renderItem}
          />
        </View>
      );
    }
}
