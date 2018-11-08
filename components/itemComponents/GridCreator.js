import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: 6,
  },
});

class GridCreator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let players;
    let game;
    if (this.props.useCurrentGame) {
      game = this.props.currentGame.game;
      players = this.props.currentGame.players;
    } else {
      players = ['Anna', 'Birna', 'Stebbi'];
      game = [
        {
          basketNum: 1,
          players: [
            {
              id: 1,
              name: 'Anna',
              score: '1',
            },
            {
              id: 2,
              name: 'Birna',
              score: '2',
            },
            {
              id: 3,
              name: 'Stebbi',
              score: '4',
            },
          ],
        },
        {
          basketNum: 2,
          players: [
            {
              id: 1,
              name: 'Anna',
              score: '3',
            },
            {
              id: 2,
              name: 'Birna',
              score: '4',
            },
            {
              id: 3,
              name: 'Stebbi',
              score: '4',
            },
          ],
        },
      ];
    }

    const tableHead = ['KARFA'];
    players.forEach((player) => {
      tableHead.push(player);
    });
    const tableData = [];
    const tableSum = ['SUMMA:'];
    for (let i = 0; i < players.length; i += 1) {
      tableSum.push(0);
    }
    game.forEach((basket) => {
      const tableRow = [basket.basketNum];
      basket.players.forEach((player) => {
        tableRow.push(player.score);
        tableSum[player.id] += parseInt(player.score, 10);
      });
      tableData.push(tableRow);
    });

    return (
      <View style={styles.containe}>
        <Table borderStyle={{ borderWidth: 2, borderColor: 'darkgray' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
          <Row data={tableSum} style={styles.head} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame });

export default connect(
  mapStateToProps,
  null,
)(GridCreator);
