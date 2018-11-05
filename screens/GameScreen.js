import React from 'react';
import {
  Text, View, ScrollView, Dimensions,
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
    ];

    players = players.map((obj) => {
      obj.score = undefined;
      return obj;
    });

    const game = [];
    for (let i = 1; i <= length; i += 1) {
      game.push({
        holeNumber: i,
        scores: players,
      });
    }
    this.setState({ game });
  }

  render() {
    console.log(this.state.game);

    return (
      <ScrollView horizontal pagingEnabled>
        {this.state.game.map((obj, key) => (
          <View
            key={key}
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#999',
              backgroundColor: '#f9f9f9',
              width: Dimensions.get('window').width - 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>
              {' '}
              {obj.holeNumber}
            </Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}
