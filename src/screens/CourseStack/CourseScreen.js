import React, { Component } from 'react';
import {
  ActivityIndicator, View, FlatList, Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { getAllCourses, clearPlayers } from '../../redux/actions';
import FlatListTab from '../../components/courseComponents/FlatListTab';
import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';

class GameScreen extends Component {
  static navigationOptions = {
    title: 'VELLIR',
    headerLeft: <View />,
    headerStyle: {
      backgroundColor: Colors.tintColor,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 16,
      alignSelf: 'center',
      paddingLeft: Platform.OS === 'ios' ? '0%' : '25%',
    },
  };

  componentDidMount() {
    this.props.getAllCourses();
  }

  navigateToNewGame(item) {
    this.props.clearPlayers();
    this.props.navigation.navigate('NewGame', item);
  }

  render() {
    const { courses } = this.props;
    if (courses.length === 0) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.tintColor} />
        </View>
      );
    }

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
              navigation={() => this.navigateToNewGame(item)}
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
  { getAllCourses, clearPlayers },
)(GameScreen);
