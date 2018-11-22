import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../constants/Styles';

const PlayedGamesTab = (props) => {
  const { fieldName, gameDate, handleOnPress } = props;
  return (
    <View style={styles.collapsibleContainer}>
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.playedGamesHeader}>
          <Text style={styles.collapsibleHeaderText}>{fieldName}</Text>
          <Text style={styles.collapsibleHeaderText}>{gameDate}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

PlayedGamesTab.propTypes = {
  fieldName: PropTypes.string.isRequired,
  gameDate: PropTypes.string.isRequired,
  handleOnPress: PropTypes.func.isRequired,
};

export default PlayedGamesTab;
