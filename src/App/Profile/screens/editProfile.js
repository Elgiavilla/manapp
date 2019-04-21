import React, { Component } from 'react'
import{View, StyleSheet, Dimensions, Image, ImageBackground,TouchableOpacity, AsyncStorage} from 'react-native'
import {Icon, Text, Content, Item, Input, Form} from 'native-base'
import { connect } from 'react-redux'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

import {userData} from './../action'

class Edit_profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('token').then((response) => {
            this.props.dispatch(userData(response))
        })
    }

    moveBack(){
        this.props.navigation.goBack(null)   
    }

    render(){
        const {email, name, last_name} = this.props.profiles.data

        return(
            <View style={{flex: 1}}>
            <View style={{zIndex: 0, position: 'absolute', width: width, height: 250, overflow: 'hidden', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                <ImageBackground source={require('./../../../../assets/BGApp.png')}
                                style={{width: width, height: 300, resizeMode: 'contain'}}>
                    <View style={{flex: 1}}>
                        <View style={{ marginTop: 35, width: width, flexDirection: 'row'}}>
                            <View style={{marginLeft: 10}}>
                                <TouchableOpacity onPress={() => this.moveBack()}>
                                    <Icon name="arrow-back" style={{color: 'white'}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 30}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Edit Profile</Text>
                            </View>
                        </View>
                        <View style={{paddingTop: 8, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="contact" style={{fontSize: 130, color: 'white'}}/>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{name}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{marginTop: 270, flex: 1}}>
                <View style={{width: width}}>
                    <Form style={{marginLeft: 20, marginRight: 30}}>
                        <Item rounded style={styles.textInputStyle}>
                            <Input placeholder='Email' value={email}/>
                        </Item>
                        <Item rounded style={styles.textInputStyle}>
                            <Input placeholder='First Name' value={name}/>
                        </Item>
                        <Item rounded style={styles.textInputStyle}>
                            <Input placeholder='Last Name' value={last_name}/>
                        </Item>
                    </Form>
                    <View style={{flex: 1,paddingTop: 40}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: width}}>
                            <Image source={require('./../../../../assets/Save.png')} resizeMode='contain' style={{justifyContent: 'center', alignItems: 'center', width: 250, height: 150}}/>
                        </View>
                    </View>
                </View>
            </View>
            </View>
        );
    }
}

const mapStateToProps = (state)=>({
    profiles: state.ProfileReducer
})

export default connect(mapStateToProps)(Edit_profile);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    textInputStyle: {
        borderRadius: 20,
        height: 50,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 0.1,
        shadowOffset: {width: 1, height: 1},
        marginBottom: 10
    }
});