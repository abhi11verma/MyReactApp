import React from 'react';
import {Component} from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import AppTitle from './Components/Title/AppTitle';

export default class App extends Component{
    render(){
        return(
            <View>
                <Text>Hello</Text>
                <AppTitle/>
            </View>
        );
    }
}

AppRegistry.registerComponent('App',() => App);