import React from 'react'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import { View, TouchableHighlight } from 'react-native'

import List from './list'
import Goal_detail from './detail'

const AppNavigator = createStackNavigator({
    List: {
        screen: List
    },
    Goal_detail: {
        screen: Goal_detail
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