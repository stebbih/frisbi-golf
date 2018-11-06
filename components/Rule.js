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

export default class Rule extends Component {
  constructor(props) {
    super(props);
    
    this.state = {  
      activeSections: [],
      collapsed: true,
      icon: 'angle-up',
      title: props.title,
      text: props.text,
    }
  };

  toggleExpanded = () => {
    const { collapsed } = this.state;
    if(collapsed) {
      this.setState({
        collapsed: false,
        icon: 'angle-down'
      })
    }
    else if(!collapsed) {
      this.setState({
        collapsed: true,
        icon: 'angle-up'
      })
    }
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };


  render() {
    const { icon } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>         
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{this.state.title}</Text>
              <FontAwesome name={icon} style={styles.angleButton}></FontAwesome>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed}>
            <View style={styles.content}>
              <Text>{this.state.text}</Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

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
    textAlign: 'right'
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});