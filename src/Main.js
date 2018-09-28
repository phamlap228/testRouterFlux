import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Actions,Router, Route, Schema, Animations, TabBar, Stack, Scene} from 'react-native-router-flux';
import Button from 'react-native-button'
import { List, ListItem,Icon } from 'react-native-elements';


export default class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{width: '100%',height: '100%'}} >
                 <Button onPress={Actions.viewDocument}>Go to View page</Button>
                 <Icon type = "material-community" name = 'arrow-left' color = "gray" size={16} />
                 <Icon  name='rowing' />

                <Icon
                name='g-translate'
                color='#00aced' />

                <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
                />

                <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
                />

                <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} />
            </View>
        );
    }
}