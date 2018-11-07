import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import Collapsible from 'react-native-collapsible';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2ef99',
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '500',
  },
  angleButton: {
    fontSize: 40,
    textAlign: 'right',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});

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
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <Text>{name}</Text>
            <FontAwesome name={icon} style={styles.angleButton} />
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View style={styles.content}>
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
