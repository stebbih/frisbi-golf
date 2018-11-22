import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import PlayedGamesScreen from '../src/screens/PlayedGamesStack/PlayedGamesScreen';
import TabBarIcon from '../src/components/TabBarIcon';
import OtherScreen from '../src/screens/OtherStack/OtherScreen';
import GameScreen from '../src/screens/CourseStack/GameScreen';
import ResultsScreen from '../src/screens/PlayedGamesStack/ResultsScreen';
import NewGameScreen from '../src/screens/CourseStack/NewGameScreen';
import CourseScreen from '../src/screens/CourseStack/CourseScreen';
import RuleScreen from '../src/screens/OtherStack/RuleScreen';
import AboutUsScreen from '../src/screens/OtherStack/AboutUsScreen';
import HelpScreen from '../src/screens/OtherStack/HelpScreen';
import Styles from '../src/constants/Styles';
import Color from '../src/constants/Colors';

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
