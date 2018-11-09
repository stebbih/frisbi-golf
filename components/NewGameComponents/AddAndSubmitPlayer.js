import React from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import styles from '../Styles';

import { addPlayers } from '../../redux/actions/newGameAction';

class AddAndSubmitPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      invalidPlayername: false,
    };
  }

  pressedAddUser = (user) => {
    const { userName } = this.state;

    // Only whitespaces checker
    if (!userName.replace(/\s/g, '').length) {
      this.setState({ invalidPlayername: true });
      this.setState({ userName: '' });
      return;
    }
    this.setState({ userName: '' });
    this.setState({ invalidPlayername: false });
    this.props.addPlayers(user);
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <TextInput
          onChangeText={val => this.setState({ userName: val })}
          value={this.state.userName}
          style={styles.textInputStyle}
        />

        <TouchableHighlight
          onPress={
            this.state.userName === '' ? () => {} : () => this.pressedAddUser(this.state.userName)
          }
          style={{ alignSelf: 'flex-end', margin: 6 }}
        >
          <Feather
            name="user-plus"
            color={this.state.userName === '' ? 'gray' : 'green'}
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
