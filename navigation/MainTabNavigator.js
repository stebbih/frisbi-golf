import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import TabBarIcon from '../components/TabBarIcon';
import CourseScreen from '../screens/CourseScreen';
import PlayedGamesScreen from '../screens/PlayedGamesScreen';
import OtherScreen from '../screens/OtherScreen';
import GameScreen from '../screens/GameScreen';
import ResultsScreen from '../screens/ResultsScreen';
import NewGameScreen from '../screens/NewGameScreen';
import RuleScreen from '../screens/RuleScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

const CoursesStack = createStackNavigator({
  Courses: CourseScreen,
  NewGame: NewGameScreen,
  Game: GameScreen,
  GameResults: ResultsScreen
});

CoursesStack.navigationOptions = {
  tabBarLabel: 'Vellir',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  )
};

const PlayedGamesStack = createStackNavigator({
  PlayedGames: PlayedGamesScreen
});

PlayedGamesStack.navigationOptions = {
  tabBarLabel: 'Leikir',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-clipboard${focused ? '' : '-outline'}`
          : 'md-clipboard'
      }
    />
  )
};

const OtherStack = createStackNavigator({
  Other: OtherScreen,
  Rules: RuleScreen,
  AboutUs: AboutUsScreen
});

OtherStack.navigationOptions = {
  tabBarLabel: 'Annað',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

export default createBottomTabNavigator({
  CoursesStack,
  PlayedGamesStack,
  OtherStack
});
