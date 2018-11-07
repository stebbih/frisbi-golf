import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Styles';

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
      <View style={styles.ruleContainer}>
        <ScrollView>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.ruleHeader}>
              <Text style={styles.ruleHeaderText}>{this.state.title}</Text>
              <FontAwesome name={icon} style={styles.ruleAngleButton} />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed}>
            <View style={styles.ruleContent}>
              <Text style={styles.rulesContentText}>{this.state.text}</Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}
