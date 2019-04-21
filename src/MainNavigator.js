import React from 'react'
import { createAppContainer, createSwitchNavigator,createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import { View, TouchableHighlight } from 'react-native'

import Auth from './Auth/screens/index'
import AppCon from './App/navigation'

const AppNavigator = createSwitchNavigator({
    Auth: {
        screen: Auth
    },
    AppCon: {
        screen: AppCon
    }
}, 
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
})

const Appcontainer = createAppContainer(AppNavigator)
export default Appcontainer