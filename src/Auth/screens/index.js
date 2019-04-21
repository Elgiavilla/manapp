import React, {Component} from 'react'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import { View, TouchableHighlight, AsyncStorage } from 'react-native'

import Introduction from './introduction'
import Register from './register'
import Login from './login'
import Signout from './signout'
import Dashboard from './../../App/navigation'

const AppNavigator = createStackNavigator({
    Introduction: {
        screen: Introduction
    },
    Register: {
        screen: Register
    },
    Login: {
        screen: Login
    },
    Signout: {
        screen: Signout
    },
    MainActivity: {
        screen: Dashboard
    }
}, 
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    },
    initialRouteName: 'Introduction'
})

const Appcontainer = createAppContainer(AppNavigator)
export default Appcontainer