import React, { Component } from 'react';
import {View,Text,FlatList,Image} from 'react-native';
import Button from 'react-native-button'
import {Router, Route, Schema, Animations,Actions, TabBar, Stack, Scene} from 'react-native-router-flux';
import { List, ListItem,Icon } from 'react-native-elements';

export default class ViewDocument extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }
    componentDidMount() {
        this.makeRemoteRequest();
    }
    makeRemoteRequest =()=>{
        const {page,seed} = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch (url)
        .then(res=>res.json())
        .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
                });
        })
        .catch (error =>{
            this.setState({ error, loading: false});
        });
    };
    render(){
        return(
            <View style={{width: '100%',height: '100%'}} >
                <Button onPress={Actions.main}>Go to Main page</Button>
                <List>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ListItem
                                title={`${item.name.first} ${item.name.last}`}
                                subtitle={item.email}
                                avatar={{ uri: item.picture.thumbnail }}
                            />
                        )} 
                    />
                </List>
            </View>
        );
    }
}