import React, { Component } from 'react';
import {
  ScrollView, Text, View, TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../../constants/Styles';

export default class CollapsibleComponent extends Component {
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
      <TouchableOpacity onPress={this.toggleExpanded}>
        <View style={styles.collapsibleContainer}>
          <ScrollView>
            <View style={styles.collapsibleHeader}>
              <Text style={styles.collapsibleHeaderText}>{this.state.title}</Text>
              <FontAwesome name={icon} style={styles.collapsibleAngleButton} />
            </View>
            <Collapsible collapsed={this.state.collapsed}>
              <View style={styles.collapsibleContent}>
                <Text style={styles.collapsibleContentText}>{this.state.text}</Text>
              </View>
            </Collapsible>
          </ScrollView>
        </View>
      </TouchableOpacity>
    );
  }
}
