import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, View } from 'react-navigation';
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
  Courses: CourseScreen,
  NewGame: NewGameScreen,
  Game: GameScreen,
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
  GameResults: ResultsScreen,
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

OtherScreen.navigationOptions = {
  title: 'ANNAÐ',
  headerStyle: {
    backgroundColor: Color.tintColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 16,
    paddingLeft: Platform.OS === 'ios' ? '0%' : '38%',
  },
};

HelpScreen.navigationOptions = {
  title: 'LEIÐBEININGAR',
  headerStyle: {
    backgroundColor: Color.tintColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 16,
    paddingLeft: Platform.OS === 'ios' ? '0%' : '16%',
  },
};

AboutUsScreen.navigationOptions = {
  title: 'UM OKKUR',
  headerStyle: {
    backgroundColor: Color.tintColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 16,
    paddingLeft: Platform.OS === 'ios' ? '0%' : '22%',
  },
};

RuleScreen.navigationOptions = {
  title: 'REGLUR',
  headerStyle: {
    backgroundColor: Color.tintColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 15,
    paddingLeft: Platform.OS === 'ios' ? '0%' : '22%',
  },
};


export default createBottomTabNavigator({
  CoursesStack,
  PlayedGamesStack,
  OtherStack,
});
