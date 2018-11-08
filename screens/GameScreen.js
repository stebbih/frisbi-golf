import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { updateScore } from '../redux/actions';
import styles from '../components/Styles';
import PersonScoreInput from '../components/GameComponents/PersonScoreInput';
import GridCreator from '../components/itemComponents/GridCreator';
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

  renderPlayer = (basketNum, player) => (
    <PersonScoreInput
      key={player.id}
      playerID={player.id}
      playerName={player.name}
      basketNumber={basketNum}
    />
  );

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

  renderResults = currentGame => (
    <View key="resultsComponent" style={styles.gameScreenBasketContainer}>
      <View style={styles.gameScreenHeaderContainer}>
        <Text style={styles.gameScreenHeaderText}>ÚRSLIT</Text>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <GridCreator results={currentGame.results} />
      </View>
    </View>
  );

  render() {
    console.log(this.props.currentGame);
    return (
      <ScrollView horizontal pagingEnabled style={{ margin: 6 }}>
        {this.props.currentGame.game.map(obj => this.renderBasket(obj))}
        {this.renderResults(this.props.currentGame)}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame });

export default connect(
  mapStateToProps,
  { updateScore },
)(GameScreen);
