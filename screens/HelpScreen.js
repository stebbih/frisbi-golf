import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import styles from '../components/Styles';
import JsonText from '../data/Help';
import Help from '../components/CollapsibleComponents/CollapsibleComponent';

export default class HelpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: JsonText,
    };
  }

  _renderItem = ({ item }) => <Help title={item.title} text={item.content} />;

  render() {
    return (
      <View style={styles.rulePageContainer}>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.title}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}
