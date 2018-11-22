import React from 'react';

import {
  View, Text, KeyboardAvoidingView, FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { connect } from 'react-redux';
import styles from '../../constants/Styles';
import RenderItemComponent from '../../components/NewGameComponents/RenderItemComponent';
import { startNewGame, addPlayers, deletePlayer } from '../../redux/actions';
import AddAndSubmitPlayer from '../../components/NewGameComponents/AddAndSubmitPlayer';
import Button from '../../components/itemComponents/Button';
import Colors from '../../constants/Colors';

class NewGameScreen extends React.Component {
  static navigationOptions = {
    title: 'NÝR LEIKUR',
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
    },
  };

  pressedAddUser = (user) => {
    const { userName } = this.state;

    if (userName !== '') {
      this.props.addPlayers(user);
    }
  };

  renderFlatList = players => (
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
  );

  renderNoList = () => (
    <View style={styles.noConentFlatlistContainer}>
      <FontAwesome name="meh-o" style={{ fontSize: 80, color: '#CCC', padding: 20 }} />
      <Text style={styles.noContentText}>{'Bættu við leikmanni \n til að geta spilað.'}</Text>
    </View>
  );

  startGame = (course, players) => {
    this.props.startNewGame(course, players);
    this.props.navigation.navigate('Game');
  };

  removePlayer = (item) => {
    this.props.deletePlayer(item);
  };

  render() {
    const { players, navigation } = this.props;
    const { params } = navigation.state;
    const hasPlayers = players.length !== 0;
    return (
      <KeyboardAvoidingView style={styles.newGameContainer} behavior="padding" enabled>
        {hasPlayers ? this.renderFlatList(players) : this.renderNoList()}
        <View style={styles.newGameBottomPanelContainer}>
          <View style={{ margin: 6 }}>
            <Button
              text="SPILA"
              color="#FFFFFF"
              backgroundColor={hasPlayers ? Colors.tintColor : 'gray'}
              handleOnPress={hasPlayers ? () => this.startGame(params, players) : () => {}}
            />
          </View>
          <AddAndSubmitPlayer />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.addPlayers,
    currentGame: state.currentGame,
  };
}

export default connect(
  mapStateToProps,
  { addPlayers, startNewGame, deletePlayer },
)(NewGameScreen);
