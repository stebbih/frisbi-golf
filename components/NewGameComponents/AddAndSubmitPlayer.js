import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

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
  }

  render() {
    // TODO STUFF
    return (
      <View style={styles.playersAddedView}>
        <Text style={{ fontSize: 25, marginBottom: 15 }}>Skráðu leikmenn</Text>
        <View>
          {this.state.invalidPlayername && <Text style={styles.invalidText}>Ógilt nafn, reyndu aftur</Text>}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TextInput onChangeText={val => this.setState({ userName: val })} value={this.state.userName} style={styles.textInputStyle} />
          {this.state.userName === ''
            ? <Feather name="user-plus" color="gray" size={40} />
            : (
              <TouchableHighlight onPress={() => this.pressedAddUser(this.state.userName)}>
                <Feather name="user-plus" color="green" size={40} />
              </TouchableHighlight>
            )
          }
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.addPlayers,
  };
}

export default connect(mapStateToProps, { addPlayers })(AddAndSubmitPlayer);
