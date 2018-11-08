import React from 'react';
import {
  View,
  Platform,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import ResultsScreen from './ResultsScreen';
import Colors from '../constants/Colors';
import PlayedGameTab from '../components/playedComponents/PlayedGameTab';

const styles = StyleSheet.create({
  playedContainer: {
    flex: 1,
  },
});

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'LEIKIR',
    headerLeft: (<View />),
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
    const games = [
      {
        id: '1',
        field: 'völlur 1',
        date: '2018-10-10',
      },
      {
        id: '2',
        field: 'völlur 3',
        date: '2018-10-10',
      },
      {
        id: '3',
        field: 'völlur 4',
        date: '2018-10-10',
      },
    ];
    return (
      <View style={styles.playedContainer}>
        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PlayedGameTab
              fieldName={item.field}
              gameDate={item.date}
              handleOnPress={() => this.props.navigation.navigate('GameResults', item)}
            />
          )}
        />
      </View>
    );
  }
}
