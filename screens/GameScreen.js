import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { startNewGame, updateScore } from '../redux/actions';
import styles from '../components/Styles';
import PersonScoreInput from '../components/GameComponents/PersonScoreInput';

class GameScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.startNewGame(2, ['Anna', 'Birna']);
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

  render() {
    return (
      <ScrollView horizontal pagingEnabled>
        {this.props.currentGame.map(obj => this.renderBasket(obj))}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame });

export default connect(
  mapStateToProps,
  { startNewGame, updateScore },
)(GameScreen);
