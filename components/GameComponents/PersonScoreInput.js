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

  saveInput = (basketN, playerID, input) => {
    const regexWs = /^[0-9]*$/;
    if (regexWs.test(this.state.taskInput)) {
      this.setState({ validInput: false });
    } else {
      this.props.updateScore(basketN, playerID, input);
      this.setState({ validInput: true });
    }
  };

  render() {
    return (
      <View key={this.props.playerID} style={styles.gameScreenPlayerContainer}>
        <Text style={styles.gameScreenPlayerText}>{this.props.playerName}</Text>
        <TextInput
          style={this.state.validInput ? styles.scoreInputStyle : styles.scoreInputInvalid}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={input => this.saveInput(this.props.basketNumber, this.props.playerID, input)
          }
          value={this.state.scoreInput}
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
