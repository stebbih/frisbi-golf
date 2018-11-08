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
import Button from '../itemComponents/Button';

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
      <TouchableOpacity onPress={this.toggleExpanded}>
        <View style={styles.collapsibleContainer}>
          <ScrollView>
            <View style={styles.collapsibleHeader}>
              <Text style={styles.collapsibleHeaderText}>{name}</Text>
              <FontAwesome name={icon} style={styles.collapsibleAngleButton} />
            </View>
            <Collapsible collapsed={collapsed}>
              <View style={styles.collapsibleContent}>
                <View style={styles.collapsibleCollapseTextView}>
                  <Text style={styles.collapsibleContentText}>
                    {'Staðsetning: '}
                    {location}
                  </Text>
                  <Text style={styles.collapsibleContentText}>
                    {'Körfur: '}
                    {courseLength}
                  </Text>
                </View>
                <Button
                  text="SPILA"
                  color="#FFFFFF"
                  backgroundColor="green"
                  handleOnPress={this.props.navigation}
                />
              </View>
            </Collapsible>
          </ScrollView>
        </View>

      </TouchableOpacity>
    );
  }
}

FlatListTab.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  courseLength: PropTypes.number.isRequired,
};
