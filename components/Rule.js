import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Animated
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden',
        height: 10
    },
    rulesContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    ruleTitle: {
        flex: 1,
        padding: 10
    },
    ruleButton: {
        fontSize: 40
    }
})

export default class Rule extends Component{
    constructor(props) {
        super(props);

        this.state = {
            title: props.title,
            expanded: true,
            icon: 'angle-up',
            animation: new Animated.Value(),
            expandHeight: this._setMinHeight.bind(this)
        }
    }

    expand = () => {
        const expandedHeight = this.state.expanded ? this.state.maxHeight + this.state.minHeight : this.setState.minHeight;
        const unExpandendHeight = this.state.expanded ? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
        const { expanded } = this.state;

        
        this.state.animation.setValue(expandedHeight);

        if(expanded) {
            this.setState({
                expanded: false,
                icon: 'angle-down',
            });
        } else if (!expanded) {
            this.setState({
                expanded: true,
                icon: 'angle-up',
            });
        }

        
        Animated.spring(
            this.state.animation,
            {
                toValue: unExpandendHeight
            }
        ).start()



    }
    _setMinHeight(event) {
        this.setState({
            minHeight: event.nativeEvent.layout.height
        });
    }

    _setMaxHeight(event) {
        this.setState({
            maxHeight: event.nativeEvent.layout.height
        });
    }

    render() {
        const { expanded } = this.state;
        const { icon } = this.state;
        const { expandHeight } = this.state;
        return (
            <Animated.View
                style={[styles.container, {height: this.state.animation}]}
            >
               <TouchableHighlight
                    onPress={this.expand}
                    > 
                    <View style={styles.rulesContainer}
                        onLayout={this._setMinHeight.bind(this)}>
                        <Text style={styles.ruleTitle}>{this.state.title}</Text>
                            <FontAwesome name={icon} style={styles.ruleButton}></FontAwesome> 
                    </View>
                </TouchableHighlight>
                <View onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}