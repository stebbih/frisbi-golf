import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Animated,
    FlatList
} from 'react-native';
import Rule from '../components/Rule';
import Reglur from '../data/Reglur.json';


const styles = StyleSheet.create({
    rulePageContainer: {
        backgroundColor: '#c2ef99'
    }
});

export default class RulePage extends Component{
    constructor (props) {
        super(props);

        this.state = {
            rules: Reglur
        }
    }

    _renderItem = ({ item }) => (
        <Rule title={item.title} text={item.content}/>    
    )

    render() {
        return (
            <View style={styles.rulePageContainer}>
                    < FlatList
                        data={this.state.rules}
                        keyExtractor={item => item.title}
                        renderItem={this._renderItem}
                    />    
                
            </View>
        );
    }
}