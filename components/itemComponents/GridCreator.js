import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'redux';

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
    this.state = {
      tableHead: ['number', 'player1', 'player2'],
      tableData: [
        ['1', '3', '3'],
        ['2', '3', '3'],
        ['3', '3', '3'],
        ['4', '3', '3'],
        ['5', '3', '3'],
        ['6', '3', '3'],
        ['7', '3', '3'],
        ['8', '3', '3'],
      ],
    };
  }

  render() {
    const state = this.state;
    const baskets = 9;
    const players = 4;
    return (
      <View style={styles.containe}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    );
  }
}

const mapStateToProps = ({ courses, currentGame }) => ({ courses, currentGame });

export default connect(mapStateToProps, null)(GridCreator);
