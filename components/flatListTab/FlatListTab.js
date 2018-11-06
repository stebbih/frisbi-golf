import React from 'react';
import { View, Text } from 'react-native';

export const FlatListTab = (props) => {
  const { name, length, location } = props;
  return (
    <View>
      <Text>{name}</Text>
      <Text>{location}</Text>
      <Text>{length}</Text>
    </View>
  );
};
