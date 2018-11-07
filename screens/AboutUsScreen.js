import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Styles from '../components/Styles';
import Color from '../constants/Colors';


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

    render() {
      return (
        <View style={Styles.aboutUsScreenContainer}>
          <Text style={Styles.aboutUsScreenText}>Eitthvað rosa merkilegt um okkur!! </Text>
        </View>
      );
    }
}
