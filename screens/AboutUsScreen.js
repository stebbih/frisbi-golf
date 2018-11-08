import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Styles from '../components/Styles';
import Color from '../constants/Colors';
import JsonText from '../data/AboutUs';

export default class AboutUsScreen extends Component {
    static navigationOptions = {
      title: 'UM OKKUR',
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

    render() {
      return (
        <ScrollView style={Styles.aboutUsScreenContainer}>
          <Text style={Styles.aboutUsScreenText}>
            {this.state.data}
            {' '}
          </Text>
        </ScrollView>
      );
    }
}
