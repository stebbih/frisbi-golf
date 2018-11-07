import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { FontAwesome } from '@expo/vector-icons';


const styles = StyleSheet.create({
  otherContainer: {
    backgroundColor: '#c2ef99',
  },
  otherBottomContainer: {
    paddingTop: Constants.statusBarHeight,
  },
  otherText: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: 'space-around'
  },
  otherButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
  otherButtonsIcon: {
    fontSize: 40,
  },
});

export default class OtherScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'angle-right'
    }
  }
  
  static navigationOptions = {
    title: 'Annað'
  };

  render() {
    const { icon } = this.state;

    return (
      <View style={styles.otherContainer}>
        <View style={styles.otherBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Rules')}>
            <View style={styles.otherButtonRow}>
              <Text style={styles.otherText}>Reglu síða</Text>
              <FontAwesome name={icon} style={styles.otherButtonsIcon}></FontAwesome>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.otherBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('AboutUs')}>
          <View style={styles.otherButtonRow}>
            <Text style={styles.otherText}>Um okkur</Text>
            <FontAwesome name={icon} style={styles.otherButtonsIcon}></FontAwesome>
          </View>
          </TouchableHighlight>
        </View> 
      </View>
    );
  }
}
