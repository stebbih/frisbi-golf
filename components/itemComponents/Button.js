import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 15,
    borderWidth: 1,
  },
  buttonText: {

  },
});

export default class Button extends Component {
  render() {
    const {
      text,
      color,
      backgroundColor,
      handleOnPress,
    } = this.props;
    return (
      <TouchableOpacity
        style={[{ backgroundColor }, styles.wrapper]}
        onPress={handleOnPress}
      >
        <Text style={[{ color }, styles.buttonText]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
};
