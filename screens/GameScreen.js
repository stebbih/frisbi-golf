import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { updateScore, saveGame } from '../redux/actions';
import styles from '../components/Styles';
import PersonScoreInput from '../components/GameComponents/PersonScoreInput';
import DisplayWinner from '../components/resultComponents/DisplayWinner';
import GridCreator from '../components/itemComponents/GridCreator';
import Button from '../components/itemComponents/Button';
import Color from '../constants/Colors';

class GameScreen extends React.Component {
  static navigationOptions = {
    // title: '', // TODO: verður hugsanlega vallarheiti
    headerStyle: {
      backgroundColor: Color.tintColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
    },
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  // Renders one player and input for it.
  renderPlayer = (basketNum, player) => (
    <PersonScoreInput
      key={player.id}
      playerID={player.id}
      playerName={player.name}
      basketNumber={basketNum}
    />
  );

  // Renders container for one basket's score in the game.
  renderBasket = obj => (
    <View key={obj.basketNum} style={styles.gameScreenBasketContainer}>
      <View style={styles.gameScreenHeaderContainer}>
        <Text style={styles.gameScreenHeaderText}>
          {'KARFA '}
          {obj.basketNum}
        </Text>
      </View>
      <ScrollView style={styles.gameScreenBasketScrollView}>
        {obj.players.map(player => this.renderPlayer(obj.basketNum, player))}
      </ScrollView>
    </View>
  );

  // Displays winner
  displayWinner = winner => <DisplayWinner name={winner} />;

  // Saves game
  saveGame(results) {
    this.props.saveGame(results, moment().format('DD.MM.YYYY'));
    this.props.navigation.pop(2);
  }

  renderResults = (results) => {
    const gameFinished = results.winner !== undefined;
    return (
      <View key="resultsComponent" style={styles.gameScreenBasketContainer}>
        <ScrollView style={{ flex: 1, width: '100%' }}>
          <View style={styles.gameScreenHeaderContainer}>
            <Text style={styles.gameScreenHeaderText}>ÚRSLIT</Text>
          </View>
          {gameFinished ? this.displayWinner(results.winner) : <View />}
          <View style={{ flex: 1, width: '100%' }}>
            <GridCreator results={results} />
          </View>
        </ScrollView>
        <View styles={{ margin: 10, alignSelf: 'flex-end', width: '100%' }}>
          <Button
            text="VISTA LEIK"
            color="#FFF"
            backgroundColor={gameFinished ? Color.tintColor : 'gray'}
            handleOnPress={
              gameFinished
                ? () => {
                  this.saveGame(results);
                }
                : () => {}
            }
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ margin: 6 }}>
        {this.props.currentGame.game.map(obj => this.renderBasket(obj))}
        {this.renderResults(this.props.currentGame.results)}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame });

export default connect(
  mapStateToProps,
  { updateScore, saveGame },
)(GameScreen);
