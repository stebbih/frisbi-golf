import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllCourses } from '../redux/actions/courseAction';
import FlatListTab from '../components/courseComponents/FlatListTab';
import Colors from '../constants/Colors';

class GameScreen extends Component {
  static navigationOptions = {
    title: 'VELLIR',
    headerLeft: (<View />),
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
      alignSelf: 'center',
    },
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
          renderItem={({ item }) => (
            <FlatListTab
              name={item.name}
              location={item.location}
              courseLength={item.courseLength}
            />
          )}
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
