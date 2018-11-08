import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../Styles';

export default class Rule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      icon: 'angle-up',
      title: props.title,
      text: props.text,
    };
  }

  toggleExpanded = () => {
    const { collapsed } = this.state;
    if (collapsed) {
      this.setState({
        collapsed: false,
        icon: 'angle-down',
      });
    } else if (!collapsed) {
      this.setState({
        collapsed: true,
        icon: 'angle-up',
      });
    }
  };

  render() {
    const { icon } = this.state;
    return (
      <View style={styles.collapsibleContainer}>
        <ScrollView>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.collapsibleHeader}>
              <Text style={styles.collapsibleHeaderText}>{this.state.title}</Text>
              <FontAwesome name={icon} style={styles.collapsibleAngleButton} />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed}>
            <View style={styles.collapsibleContent}>
              <Text style={styles.collapsibleContentText}>{this.state.text}</Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}
