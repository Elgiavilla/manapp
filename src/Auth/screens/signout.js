/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux'

import { Icon, Form, Item, Input, Label, Button } from 'native-base'

import Navigation from './index'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
class Logout extends Component {

    constructor() {
        super();
        this.state = { hasToken: false };
    }

    componentDidMount(){
        this.props.navigation.push('Introduction')
    }

    componentWillMount(){
        this.props.navigation.navigate('Introduction')
    }
}


export default Logout