import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { updateScore } from '../../redux/actions';
import styles from '../Styles';

class PersonScoreInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreInput: '',
    };
  }

  render() {
    return (
      <View key={this.props.playerID} style={styles.gameScreenPlayerContainer}>
        <Text style={styles.gameScreenPlayerText}>{this.props.playerName}</Text>
        <TextInput
          style={styles.scoreInputStyle}
          keyboardType="number-pad"
          maxLength={2}
          value={this.state.scoreInput}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame });

export default connect(
  mapStateToProps,
  { updateScore },
)(PersonScoreInput);
