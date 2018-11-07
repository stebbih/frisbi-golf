import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import styles from '../Styles';

export default class FlatListTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      icon: 'angle-up',
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
    const { collapsed, icon } = this.state;
    const {
      name,
      location,
      courseLength,
    } = this.props;
    return (
      <View style={styles.courseContainer}>
        <ScrollView>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.courseHeader}>
              <Text style={styles.courseHeaderText}>{name}</Text>
              <FontAwesome name={icon} style={styles.courseAngleButton} />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View style={styles.courseContent}>
              <Text>{location}</Text>
              <Text>{courseLength}</Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

FlatListTab.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  courseLength: PropTypes.number.isRequired,
};
