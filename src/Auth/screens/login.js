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
import {StackActions, NavigationAction, NavigationActions} from 'react-navigation'

import { Icon, Form, Item, Input, Label, Button } from 'native-base'
import { login } from './../action'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
class Login extends Component {

  state = {
    data: {}
  }

  handleLogin(){
    const {email} = this.state
    this.props.dispatch(login(email)).then((response) => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'MainActivity'})]
      })
      this.props.navigation.dispatch(resetAction)
    })
  }

  moveBack(){
    this.props.navigation.goBack(null)   
  }

  moveToLogin(){
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground style={{width: width, height: height}} source={require('./../../../assets/BGBiasa.png')}>
          <View style={{ marginTop: height / 3 - 190, width: width, flexDirection: 'row'}}>
            <View style={{marginLeft: 10}}>
                <TouchableOpacity onPress={() => this.moveBack()}>
                  <Icon name="arrow-back" style={{color: 'white'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 30}}>
                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Sign In</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: height / 3 - 190}}>
              <Image source={require('./../../../assets/Welcomexxxhdpi.png')} resizeMode={'contain'} style={{width: 200, height: 170}}/>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 5, marginLeft: 50, marginRight: 50}}>
              <Text style={{color: '#0062a8', fontSize: 38, fontWeight: 'bold', textAlign: 'center'}}>Welcome Back to Mana!</Text>
            </View>
            <View style={{flex: 1}}>
              <View style={{paddingTop: 10, width: width}}>
                <Form style={{marginLeft: 20, marginRight: 30}}>
                  <Item floatingLabel>
                    <Label style={{color: 'white'}}>Email</Label>
                    <Input style={{color: 'white'}} onChangeText={(email) => this.setState({email})}/>
                  </Item>
                </Form>
              </View>
              <View style={{marginTop: 5, flex: 1}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => this.handleLogin()}>
                    <Image resizeMode={'contain'} source={require('./../../../assets/Signin.png')} style={{width: 230, height: 80}}/>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                  <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                      <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>Don't have an account ? </Text>
                      <TouchableOpacity onPress={() => this.moveToLogin()}>
                        <Text style={{color: '#b7e1ff', fontSize: 15, textAlign: 'center'}}>Sign Up</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                      <TouchableOpacity onPress={() => this.moveToLogin()}>
                      <Button iconLeft full light style={{width: 230, height: 35, borderRadius: 50}}>
                        <Icon name="logo-google"/>
                        <Text style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>Sign In with Google</Text>
                      </Button>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => {
    return {
        Logins: state.authReducer
    }
}

export default connect(mapStateToProps)(Login)