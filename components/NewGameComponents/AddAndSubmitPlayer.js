import React from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import styles from '../Styles';

import { addPlayers } from '../../redux/actions/newGameAction';
import Colors from '../../constants/Colors';

class AddAndSubmitPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      inputValid: true,
    };
  }

  pressedAddUser = (input) => {
    const regexWs = /^[\s]*$/;

    if (regexWs.test(input)) {
      this.setState({ inputValid: false });
      return;
    }

    this.props.addPlayers(input);
    this.setState({ userName: '', inputValid: true });
  };

  render() {
    return (
      <View style={styles.addPlayerInputContainer}>
        <TextInput
          placeholder=" Bættu við leikmanni"
          onChangeText={text => this.setState({ userName: text })}
          value={this.state.userName}
          autoCapitalize="words"
          underlineColorAndroid="transparent"
          style={this.state.inputValid ? styles.textInputStyle : styles.textInputInvalidStyle}
        />

        <TouchableHighlight
          onPress={() => this.pressedAddUser(this.state.userName)}
          style={styles.addPlayerButtonContainer}
        >
          <Feather
            name="user-plus"
            color={this.state.userName === '' ? 'gray' : Colors.tintColor}
            size={40}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.addPlayers,
  };
}

export default connect(
  mapStateToProps,
  { addPlayers },
)(AddAndSubmitPlayer);
