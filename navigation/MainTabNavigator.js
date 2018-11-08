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
import HelpScreen from '../screens/HelpScreen';
import Styles from '../components/Styles';
import Color from '../constants/Colors';

const CoursesStack = createStackNavigator({
  // NewGame: NewGameScreen,
  Courses: CourseScreen,
  NewGame: NewGameScreen,
  Game: GameScreen,
  GameResults: ResultsScreen,
});

CoursesStack.navigationOptions = {
  tabBarLabel: 'Vellir',
  tabBarOptions: {
    activeTintColor: Color.tintColor,
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
    activeTintColor: Color.tintColor,
  },
  tabBarIcon: ({ focused }) => (
    <FontAwesome
      focused={focused}
      name="trophy"
      style={Styles.trophyStyle}
      color={focused ? Color.tintColor : '#ccc'}
    />
  ),
};

const OtherStack = createStackNavigator({
  Other: OtherScreen,
  Rules: RuleScreen,
  AboutUs: AboutUsScreen,
  Help: HelpScreen,
});

OtherStack.navigationOptions = {
  tabBarLabel: 'Annað',
  tabBarOptions: {
    activeTintColor: Color.tintColor,
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
