import React from 'react';
import {
  View, StyleSheet, ScrollView, Platform,
} from 'react-native';
import GridCreator from '../components/itemComponents/GridCreator';
import DisplayWinner from '../components/resultComponents/DisplayWinner';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultsGridContainer: {
    marginTop: 25,
  },
});

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'ÚRSLIT',
    headerLeft: <View />,
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
      alignSelf: 'center',
      paddingLeft: Platform.OS === 'ios' ? '0%' : '25%',
    },
  };

  // TODO: setja  <GridCreator /> aftur inn!
  render() {
    return (
      <View style={styles.resultsContainer}>
        <ScrollView>
          <DisplayWinner />
          <View style={styles.resultsGridContainer} />
        </ScrollView>
      </View>
    );
  }
}
