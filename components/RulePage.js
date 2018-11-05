import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Animated
} from 'react-native';
import Rule from './Rule';


export default class Rules extends Component{
    render() {
        return (
            <ScrollView>
                <Rule title='Regla 1'>
                    <Text>Hér er regla 1 um eitthvað sem skiptir rosa miklu máli</Text> 
                </Rule>
                
                <Rule title='Regla 2'>
                    <Text>Hér er regla 2 um eitthvað sem skiptir rosa miklu máli</Text> 
                </Rule>
            </ScrollView>
        );
    }
}