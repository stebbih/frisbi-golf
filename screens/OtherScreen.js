import React from 'react';
import {
  View, Text, TouchableHighlight, Platform,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../components/Styles';
import Color from '../constants/Colors';

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'ANNAÐ',
    headerLeft: (<View />),
    headerStyle: {
      backgroundColor: Color.tintColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
      alignSelf: 'center',
      paddingLeft: Platform.OS === 'ios' ? '0%' : '25%',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      icon: 'angle-right',
    };
  }


  render() {
    const { icon } = this.state;

    return (
      <View style={styles.otherContainer}>
        <View style={styles.otherBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Rules')}>
            <View style={styles.otherButtonRow}>
              <Text style={styles.otherText}>Reglu síða</Text>
              <FontAwesome name={icon} style={styles.otherButtonsIcon} />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.otherBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('AboutUs')}>
            <View style={styles.otherButtonRow}>
              <Text style={styles.otherText}>Um okkur</Text>
              <FontAwesome name={icon} style={styles.otherButtonsIcon} />
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.otherBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Help')}>
            <View style={styles.otherButtonRow}>
              <Text style={styles.otherText}>Notkunarleiðbeiningar</Text>
              <FontAwesome name={icon} style={styles.otherButtonsIcon} />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
