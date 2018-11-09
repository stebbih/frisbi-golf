import React from 'react';
import {
  View, Platform, FlatList, StyleSheet, Text,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import PlayedGameTab from '../components/playedComponents/PlayedGameTab';

const styles = StyleSheet.create({
  playedContainer: {
    flex: 1,
  },
});

class PlayedGameScreen extends React.Component {
  static navigationOptions = {
    title: 'LEIKIR',
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

  render() {
    const games = this.props.gameStorage;
    if (games.length === 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <FontAwesome name="exclamation" style={{ fontSize: 80, color: '#CCC' }} />
          <Text
            style={{
              fontSize: 30,
              color: '#CCC',
              textAlign: 'center',
            }}
          >
            {'Engir leikir. \n Spilaðu leik undir „Vellir“.'}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.playedContainer}>
        <FlatList
          data={games}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <PlayedGameTab
              fieldName={item.location.name}
              gameDate={item.date}
              handleOnPress={() => this.props.navigation.navigate('GameResults', item)}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ gameStorage }) => ({ gameStorage });

export default connect(
  mapStateToProps,
  null,
)(PlayedGameScreen);
