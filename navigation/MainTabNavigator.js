import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import TabBarIcon from '../components/TabBarIcon';
import PlayedGamesScreen from '../screens/PlayedGamesScreen';
import OtherScreen from '../screens/OtherScreen';
import GameScreen from '../screens/GameScreen';
import ResultsScreen from '../screens/ResultsScreen';
import NewGameScreen from '../screens/NewGameScreen';
import CourseScreen from '../screens/CourseScreen';
import RuleScreen from '../screens/RuleScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import Styles from '../components/Styles';

const CoursesStack = createStackNavigator({
  // Game: GameScreen,
  NewGame: NewGameScreen,
  Courses: CourseScreen,
  Game: GameScreen,
  GameResults: ResultsScreen,
});

CoursesStack.navigationOptions = {
  tabBarLabel: 'Vellir',
  tabBarOptions: {
    activeTintColor: 'green',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search'}
    />
  ),
};

const PlayedGamesStack = createStackNavigator({
  PlayedGames: PlayedGamesScreen,
});

PlayedGamesStack.navigationOptions = {
  tabBarLabel: 'Leikir',
  tabBarOptions: {
    activeTintColor: 'green',
  },
  tabBarIcon: ({ focused }) => (
    <FontAwesome
      focused={focused}
      name="trophy"
      style={Styles.trophyStyle}
      color={focused ? 'green' : '#ccc'}
    />
  ),
};

const OtherStack = createStackNavigator({
  Other: OtherScreen,
  Rules: RuleScreen,
  AboutUs: AboutUsScreen,
});

OtherStack.navigationOptions = {
  tabBarLabel: 'Annað',
  tabBarOptions: {
    activeTintColor: 'green',
  },
  headerBar: {
    color: '#fab',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  CoursesStack,
  PlayedGamesStack,
  OtherStack,
});
