import React from 'react';
import {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions
} from 'react-native';

import AppTitle from './Components/Title/AppTitle';
import ContentBox from './Components/ContentBox/ContentBox'

const deviceWidth = Dimensions.get('window').width;

export default class App extends Component{
    render(){
        return(
            <View style={styles.bodyWrapper}>
                <AppTitle/>
                <View style={styles.boxContainer}>
                    <ContentBox message = "This is 1" color="#E91E63"/>
                    <ContentBox message = "This is 2" color="#FFEB3B"/>
                    <ContentBox message = "This is 3" color="#FF5722"/>
                </View>

                <View style={styles.btnContainer}>
                <Button color="#841584"
                    title="Learn More"
                    accessibilityLabel="Learn more about this purple button"
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        bodyWrapper:{
          backgroundColor: 'black',
            height:"100%"
        },
        boxContainer:{
            width:deviceWidth*0.9,
            backgroundColor:"#607D8B",
            margin:10,
            padding:5,
            alignItems:"center",
            alignSelf:"center"
        },
        btnContainer:{
            flex: 1,
            justifyContent: 'flex-end',
        }
    }
);

AppRegistry.registerComponent('App',() => App);