import React from 'react';
import { View, Text } from 'react-native';

import SwipeOut from 'react-native-swipeout';
import styles from '../../constants/Styles';

export default class RenderItemComponent extends React.Component {
  render() {
    const { renderPlayers, isId, removePlayer } = this.props;
    const swipeoutBtn = [
      {
        component: (
          <View style={styles.delButton}>
            <Text style={styles.delButtonText}>Fjarlægja</Text>
          </View>
        ),
        backgroundColor: 'transparent',
        onPress: removePlayer,
      },
    ];

    return (
      <SwipeOut style={{ backgroundColor: 'transparent' }} right={swipeoutBtn}>
        <View style={styles.newGameListPlayerContainer}>
          <Text style={styles.flatText} key={isId}>
            {renderPlayers}
          </Text>
        </View>
      </SwipeOut>
    );
  }
}
