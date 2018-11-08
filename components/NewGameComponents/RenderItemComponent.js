import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import SwipeOut from 'react-native-swipeout';
import styles from '../Styles';

export default class RenderItemComponent extends React.Component {
  render() {
    const { renderPlayers, isId, removePlayer } = this.props;
    const swipeoutBtn = [
      {
        text: 'Remove',
        backgroundColor: 'red',
        onPress: removePlayer,
      },
    ];

    return (
      <SwipeOut style={{ backgroundColor: 'transparent' }} right={swipeoutBtn}>
        <View style={styles.renderItemView}>
          <Text style={styles.flatText} key={isId}>{renderPlayers}</Text>
        </View>
      </SwipeOut>
    );
  }
}
