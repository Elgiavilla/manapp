import React, { Component } from 'react'
import{View, Alert, StyleSheet, Dimensions, Image, ImageBackground,TouchableOpacity} from 'react-native'
import {Icon, Text, Content, Item, Input, Form, Label, Textarea} from 'native-base'

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

class ActivityDetail extends Component{

    changeStatus(status){
        Alert.alert('Clicked', status);
    }

    moveBack(){
        this.props.navigation.goBack(null)   
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
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Check Goal</Text>
                            </View>
                        </View>
                        <View style={{paddingTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingRight: 30, paddingLeft: 30}}>Goal Title</Text>
                        </View>
                        <View style={{paddingTop: 40, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{
                                width: 100,
                                height: 20,
                                borderBottomLeftRadius: 30,
                                borderBottomRightRadius: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30,
                                backgroundColor: '#0062a8',
                                shadowColor: 'black',
                                shadowOpacity: 0.5,
                                shadowRadius: 0.5,
                                shadowOffset: {width: 1, height: 1},
                                marginBottom: 10
                            }}>
                                <Text style={{color: 'white', fontSize: 15, textAlign: 'center', paddingTop: 1}}>In Progres</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{flex: 1, marginTop: 270, marginLeft: 30, marginRight: 30}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{textAlign: 'center', fontSize: 15}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                        <View>
                            <Icon name="alarm" style={{color: '#0062a8'}}/>
                        </View>
                        <View style={{paddingLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{textAlign: 'center'}}>14.00</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                        <View style={{
                            width: 60,
                            height: 30,
                            borderRadius: 20
                        }}>
                            <TouchableOpacity onPress={() => this.changeStatus("Done")}>
                                <Image style={{width: 60, height: 30, resizeMode: 'contain'}} source={require('./../../../../assets/done-home.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                           width: 60,
                           height: 30,
                           borderRadius: 20,
                            marginLeft: 15
                        }}>
                         <TouchableOpacity onPress={() => this.changeStatus("Nope")}>
                            <Image style={{width: 60, height: 30, resizeMode: 'contain'}} source={require('./../../../../assets/nope-home.png')}/>
                         </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </View>
        );
    }
}

export default ActivityDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});