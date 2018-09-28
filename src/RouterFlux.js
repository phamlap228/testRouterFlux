import React, { Component } from 'react';
import {View,Text} from 'react-native';
import {Router, Route, Schema, Animations, TabBar, Stack, Scene} from 'react-native-router-flux';
import Main from './Main';
import ViewDocument from './ViewDocument';


const AppRouter = () => 
    <Router navigationBarStyle = {{backgroundColor: 'gray'}}>
        <Stack key='root'>
            <Scene key="main" component={Main} title="Main"  initial hideNavBar={true}/>
            <Scene key="viewDocument" component={ViewDocument} hideNavBar={true} wrapRouter title="ViewDocument" />
        </Stack>
    </Router>

export default AppRouter;