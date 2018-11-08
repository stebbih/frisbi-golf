import React from 'react';
import {
  View, Platform, FlatList, StyleSheet,
} from 'react-native';
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
