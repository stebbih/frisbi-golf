/* eslint-disable no-useless-constructor */
import React from 'react';
import {
  Text, View, TextInput, Button, TouchableHighlight, FlatList,
} from 'react-native';


import { connect } from 'react-redux';
import styles from '../components/Styles';
import RenderItemComponent from '../components/NewGameComponents/RenderItemComponent';
import AddAndSubmitPlayer from '../components/NewGameComponents/AddAndSubmitPlayer';
import { addPlayers, deletePlayer } from '../redux/actions/newGameAction';

// Gera array af userum og senda a GameScreen

class NewGameScreen extends React.Component {
  static navigationOptions = {
    title: 'NYR LEIKUR',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
    },
  };

  constructor(props) {
    super(props);
  }

  removePlayer = (item) => {
    this.props.deletePlayer(item);
  }

  render() {
    const { players, navigation } = this.props;
    const {
      params,
    } = navigation.state;
    return (
      <View style={styles.newGameContainer}>
        <AddAndSubmitPlayer />
        <View style={styles.flatListView}>
          <FlatList
            data={players}
            renderItem={({ item }) => (
              <RenderItemComponent
                renderPlayers={item.name}
                isId={item.id}
                removePlayer={() => this.removePlayer(item.id)}
              />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.buttonView}>
          <Button onPress={({ course }) => navigation.navigate('Game', course)} title="Spila!" color="green" />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.addPlayers,
  };
}

export default connect(mapStateToProps, { addPlayers, deletePlayer })(NewGameScreen);
