import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Styles from '../components/Styles';


export default class AboutUsScreen extends Component {
    static navigationOptions = {
      title: 'UM OKKUR',
      headerStyle: {
        backgroundColor: 'green',
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
