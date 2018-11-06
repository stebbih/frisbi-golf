import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import RuleScreen from './RuleScreen';

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Annað'
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <RuleScreen/>;
  }
}
