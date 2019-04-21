import React from 'react'
import { createAppContainer, createStackNavigator,createSwitchNavigator } from 'react-navigation'
import { View, TouchableHighlight } from 'react-native'

import Edit_profile from './editProfile'
import About from './about'
import ProfileDashboard from './profile'
import AppContainer from '../../../Auth/screens/introduction'

const AppNavigator = createStackNavigator({
    ProfileDashboard: {
        screen: ProfileDashboard
    },
    Edit_profile: {
        screen: Edit_profile
    },
    About: {
        screen: About
    },
    MainApp: {
        screen: ( )=> <AppContainer></AppContainer>,
        navigationOptions: {
            tabBarVisible: false
        }
    },
}, 
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false
    }
})

AppNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "MainApp") {
          tabBarVisible = false;
        } else {
          tabBarVisible = true;
        }
      });
    }
  
    return {
      tabBarVisible
    };
  };

const Appcontainer = createAppContainer(AppNavigator)
export default AppNavigator