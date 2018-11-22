import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Styles from '../../constants/Styles';
import JsonText from '../../../data/AboutUs';

export default class AboutUsScreen extends Component {
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
