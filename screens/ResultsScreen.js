import React from 'react';
import {
  View, StyleSheet, ScrollView, Platform,
} from 'react-native';
import DisplayWinner from '../components/resultComponents/DisplayWinner';
import GridCreator from '../components/itemComponents/GridCreator';
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

  render() {
    const results = this.props.navigation.state.params;

    return (
      <View style={styles.resultsContainer}>
        <ScrollView>
          <DisplayWinner name={results.winner} />
          <View style={styles.resultsGridContainer}>
            <GridCreator results={results} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
