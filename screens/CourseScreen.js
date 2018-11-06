import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllCourses } from '../redux/actions/courseAction';

class GameScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.getAllCourses();
  }

  render() {
    const { courses } = this.props;
    return (
      <View>
        <FlatList
          data={courses}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(
  mapStateToProps,
  { getAllCourses },
)(GameScreen);
