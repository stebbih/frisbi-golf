import React, { Component } from 'react';
import {
  View,
  FlatList,
  Platform,
} from 'react-native';
import Rule from '../components/CollapsibleComponents/CollapsibleComponent';
import Reglur from '../data/Reglur.json';
import styles from '../components/Styles';
import Colors from '../constants/Colors';

export default class RulePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: Reglur,
    };
  }

  _renderItem = ({ item }) => <Rule title={item.title} text={item.content} />;

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
