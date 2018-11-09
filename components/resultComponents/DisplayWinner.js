import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

const styles = StyleSheet.create({
  winnerContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  winnerImageContainer: {
    alignItems: 'center',
  },
  winnerTextContainer: {
    marginTop: 10,
  },
  winnerText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#DAA520',
  },
});

const DisplayWinner = (props) => {
  const { name } = props;
  return (
    <View style={styles.winnerContainer}>
      <View style={styles.winnerImageContainer}>
        <Image source={require('../../images/Trophy.png')} />
      </View>
      <View style={styles.winnerTextContainer}>
        <Text style={styles.winnerText}>
          {'SIGURVEGARI:  '}
          {name}
        </Text>
      </View>
    </View>
  );
};

export default DisplayWinner;
