import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import styles from '../components/Styles';
import Color from '../constants/Colors';
import JsonText from '../data/Help';
import Rule from '../components/RulesComponents/Rule';

export default class AboutUsScreen extends Component {
    static navigationOptions = {
      title: 'LEÐBEININGAR',
      headerStyle: {
        backgroundColor: Color.tintColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 16,
      },
    };

    constructor(props) {
      super(props);
      this.state = {
        data: JsonText,
      };
    }

    _renderItem = ({ item }) => (
      <Rule title={item.title} text={item.content} />
    )

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
