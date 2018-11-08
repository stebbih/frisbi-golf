import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateScore } from '../../redux/actions';
import styles from '../Styles';

class PersonScoreInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validInput: true,
    };
  }

  /*
   * Checks if input is a number larger than 0.
   * If not, marks input as invalid.
   * If it is empty string it updates the player's score to undefined
   */
  saveInput = (basketN, playerID, input) => {
    if (input === '') {
      this.props.updateScore(basketN, playerID, undefined);
      this.setState({ validInput: true });
      return;
    }
    const regexWs = /[0-9]+/g;
    if (!regexWs.test(input) || parseInt(input, 10) <= 0) {
      this.setState({ validInput: false });
      return;
    }
    this.props.updateScore(basketN, playerID, input);
    this.setState({ validInput: true });
  };

  render() {
    return (
      <View style={styles.gameScreenPlayerContainer}>
        <Text style={styles.gameScreenPlayerText}>{this.props.playerName}</Text>
        <TextInput
          style={this.state.validInput ? styles.scoreInputStyle : styles.scoreInputInvalid}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={input => this.saveInput(this.props.basketNumber, this.props.playerID, input)
          }
        />
      </View>
    );
  }
}

PersonScoreInput.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerID: PropTypes.number.isRequired,
  basketNumber: PropTypes.number.isRequired,
};

const mapStateToProps = ({ currentGame }) => ({ currentGame });

export default connect(
  mapStateToProps,
  { updateScore },
)(PersonScoreInput);
