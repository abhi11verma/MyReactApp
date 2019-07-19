import React from 'react';
import {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class AppTitle extends Component{
    render(){
        return(
            <View>
                <Text style={styles.titleStyle}>TITLE</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create(
    {
        titleStyle:{
            fontSize:50,
            color:"#ecf0f1",
            borderBottomColor: '#bbb',
            borderBottomWidth: StyleSheet.hairlineWidth
        }
    }
);