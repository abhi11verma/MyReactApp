import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, Dimensions,
    TouchableOpacity
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

export default class ContentBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: this.props.message,
        }
    }

    render() {
        return (
            <TouchableOpacity>
                <View style={[styles.boxWrapper,{backgroundColor: this.props.color}]}>
                    <Text>{this.state.message}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}

const contentBoxStyles = [styles.boxWrapper];


const styles = StyleSheet.create({
    boxWrapper:{
        width:deviceWidth*0.6,
        height:80,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
    }
});