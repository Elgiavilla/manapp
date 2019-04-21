import React from 'react'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import { View, TouchableHighlight } from 'react-native'

import Dashboard from './dashboard'
import AddActivity from './addActvity'
import ActivityDetail from './activityDetail'

const AppNavigator = createStackNavigator({
    Dashboard: {
        screen: Dashboard
    },
    AddActivity: {
        screen: AddActivity
    },
    ActivityDetail: {
        screen: ActivityDetail
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