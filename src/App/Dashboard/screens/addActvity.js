import React, { Component } from 'react'
import{View, StyleSheet, Dimensions, Image, Alert, AsyncStorage,ImageBackground, TouchableOpacity} from 'react-native'
import {Icon, Text, Item, Input, Form, Textarea} from 'native-base'
import DatePicker from 'react-native-datepicker';

import {connect} from 'react-redux'

import {postActivityByUser} from './../action'

const width = Dimensions.get("window").width


class AddActivity extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            title: "",
            description: ""
        }
    }

    moveBack(){
        this.props.navigation.goBack(null)   
    }

    handleCreateActivity(){
        Alert.alert(
            'Option',
            'Are you sure ?',
            [
                {text: 'No', onPress: () => this.props.navigation.goBack(null)},
                {text: 'Yes', onPress: () => this._createdActivity()}
            ]
        )
    }

    _createdActivity(){
        AsyncStorage.getItem('token').then((response) => {
            const{date, title, description} = this.state
            const data = {
                title: title,
                description: description,
                date: date
            }

            this.props.dispatch(postActivityByUser(response, data)).then((response) => {
                Alert.alert(
                    "Success", 
                    `${this.props.activites.result.title} has been created`,
                    [
                        {text: 'Ok', onPress: () => this.props.navigation.push('Dashboard')},
                    ]
                )
            })
        })
    }

    render(){
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
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>New Goal</Text>
                            </View>
                        </View>
                        <View style={{paddingTop: 50, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, textAlign: 'center', paddingRight: 30, paddingLeft: 30}}>What's Your Goal Today ?</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{marginTop: 270, flex: 1}}>
                <View style={{width: width}}>
                    <Form style={{marginLeft: 20, marginRight: 30}}>
                        <Item rounded style={styles.textInputStyle}>
                            <Input placeholder='Title' onChangeText={(title) => this.setState({title})}/>
                        </Item>
                        <Textarea onChangeText={(description) => this.setState({description})} rowSpan={5} bordered placeholder="Description" style={{
                            borderRadius: 20,
                            backgroundColor: 'white',
                            shadowColor: 'black',
                            shadowOpacity: 0.5,
                            shadowRadius: 0.1,
                            shadowOffset: {width: 1, height: 1},
                            marginBottom: 10
                        }}/>
                        <View style={{flexDirection: 'row', paddingTop: 10}}>
                            <View>
                                <Icon name="alarm" style={{color: '#0062a8'}}></Icon>
                            </View>
                            <DatePicker
                            style={{
                                width: 300,
                                height: 10
                            }}
                            showIcon={false}
                            date={this.state.date} //initial date from state
                            mode="time" //The enum of date, datetime and time
                            placeholder="Select End Time"
                            format="HH : mm"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 10,
                                    borderRadius: 20
                                }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                            />
                        </View>
                        <View style={{flex: 1}}>
                            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.handleCreateActivity()}>
                                    <Image source={require('./../../../../assets/lets-go.png')} resizeMode='contain' style={{justifyContent: 'center', alignItems: 'center', width: 250, height: 120}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Form>
                </View>
            </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    activites: state.DashboardReducer
  }
}


export default connect(mapStateToProps)(AddActivity);

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