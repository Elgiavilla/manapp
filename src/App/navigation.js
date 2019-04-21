import React from 'react'
import { createAppContainer, createBottomTabNavigator, StackActions, NavigationActions } from 'react-navigation'
import {Image, AsyncStorage} from 'react-native'

import Dashboard from './Dashboard/screens/index'
import YourMana from './YourMana/screens/index'
import Goals from './Goals/screens/index'
import Profile from './Profile/screens/index'

const AppNavigator = createBottomTabNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions:{
            tabBarIcon: ({focused, tintColor}) => {
                if(focused == true){
                    return <Image source={require(`./../../assets/home-active.png`)} style={{ height: 22, width: 22, tintColor: tintColor }}/>
                }else{
                    return <Image source={require(`./../../assets/home.png`)} style={{ height: 22, width: 22, tintColor: tintColor }}/>
                }
            }
        }
    },
    YourMana: {
        screen: YourMana,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                if(focused == true){
                    return <Image source={require(`./../../assets/your-active.png`)} style={{ height: 22, width: 22, tintColor: tintColor }}/>
                }else{
                    return <Image source={require(`./../../assets/your.png`)} style={{ height: 22, width: 22, tintColor: tintColor }}/>
                }
            }
        }
    },
    Goals: {
        screen: Goals,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                if(focused == true){
                    return <Image source={require(`./../../assets/goal-active.png`)} style={{ height: 22, width: 22, resizeMode: 'contain', tintColor: tintColor }}/>
                }else{
                    return <Image source={require(`./../../assets/goal.png`)} style={{ height: 22, width: 22, resizeMode: 'contain', tintColor: tintColor }}/>
                }
            }
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                if(focused == true){
                    return <Image source={require(`./../../assets/profile-active.png`)} style={{ height: 22, width: 22, resizeMode: 'contain', tintColor: tintColor }}/>
                }else{
                    return <Image source={require(`./../../assets/profile.png`)} style={{ height: 22, width: 22, resizeMode: 'contain', tintColor: tintColor }}/>
                }
            }
        }
    }
},{
    tabBarOptions:{
        showLabel: false,
        style: {
            height: 50
        }
    }
})

const Appcontainer = createAppContainer(AppNavigator)
export default Appcontainer;