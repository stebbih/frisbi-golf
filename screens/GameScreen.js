import React from 'react';
import {
  Text, View, ScrollView, TextInput,
} from 'react-native';
import styles from '../components/Styles';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      courseLength: 8,
      game: [],
    };
  }

  componentDidMount() {
    const length = this.state.courseLength;
    let players = [
      {
        id: 1,
        name: 'Anna',
      },
      {
        id: 2,
        name: 'Birna',
      },
      {
        id: 3,
        name: 'Stebbi',
      },
      {
        id: 4,
        name: 'Sandra',
      },
    ];

    players = players.map((obj) => {
      const ret = obj;
      ret.score = undefined;
      return ret;
    });

    const game = [];
    for (let i = 1; i <= length; i += 1) {
      game.push({
        basketNum: i,
        players,
      });
    }
    this.setState({ game });
  }

  /*  changeScore = (basketNum, playerID, score) => {
    alert(`change score: \n basketNum: ${basketNum}\n playerID: ${playerID}\n score: ${score}`);
  };
*/

  renderPlayer = (basketNum, player) => (
    <View key={player.id} style={styles.gameScreenPlayerContainer}>
      <Text style={styles.gameScreenPlayerText}>{player.name}</Text>
      <TextInput style={styles.scoreInputStyle} keyboardType="number-pad" maxLength={2} />
    </View>
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
        {this.state.game.map(obj => this.renderBasket(obj))}
      </ScrollView>
    );
  }
}
