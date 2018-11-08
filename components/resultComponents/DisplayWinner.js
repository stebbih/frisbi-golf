import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  winnerContainer: {
    marginTop: 20,
    marginBottom: 60,
    height: '20%',
  },
  winnerImageContainer: {
    alignItems: 'center',
  },
  winnerTextContainer: {
    marginTop: 10,
  },
  winnerText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    textDecorationLine: 'underline',
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
          {'Meistari: '}
          { name }
        </Text>
      </View>
    </View>
  );
};

export default DisplayWinner;
