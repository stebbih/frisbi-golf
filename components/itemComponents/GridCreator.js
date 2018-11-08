import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

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

export default class GridCreator extends Component {
  render() {
    const results = this.props.results;
    const tableHead = ['KARFA', ...results.players];
    const tableData = results.table;
    const tableSum = ['SUMMA:', ...results.sums];

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: 'darkgray' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
          <Row data={tableSum} style={styles.head} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}
