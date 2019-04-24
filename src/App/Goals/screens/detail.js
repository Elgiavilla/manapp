import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity,TouchableHighlight } from 'react-native';
import {Icon} from 'native-base'
import Moment from 'moment'

import {connect} from 'react-redux'
import { getActivityById } from '../action'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Goal_detail extends Component{
    componentDidMount(){
        const {activity_id} = this.props.navigation.state.params
        this.props.dispatch(getActivityById(activity_id))
    }

    moveBack(){
        this.props.navigation.goBack(null)
    }

    render(){
        const {title, description, complete_activity, CreatedAt, time_end} = this.props.activity.results
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
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Goal Detail</Text>
                                </View>
                            </View>
                            <View style={{paddingTop: 30, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, textAlign: 'center', paddingRight: 30, paddingLeft: 30}}>{title}</Text>
                            </View>
                            <View style={{paddingTop: 40, justifyContent: 'center', alignItems: 'center'}}>
                                <View style={styles.completeBorder}>
                                {complete_activity == 1? (
                                    <Text style={{color: 'white', fontSize: 15, textAlign: 'center', paddingTop: 1}}>Complete</Text>
                                ): (
                                    <Text style={{color: 'white', fontSize: 15, textAlign: 'center', paddingTop: 1}}>Nope</Text>
                                )}
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{flex: 1, marginTop: 270, marginLeft: 30, marginRight: 30}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{textAlign: 'center', fontSize: 15}}>
                            {description}
                        </Text>
                        <View style={{flexDirection: 'row', paddingTop: 20}}>
                            <View>
                                <Icon name="calendar" style={{color: '#0062a8'}}/>
                            </View>
                            <View style={{paddingLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
                                {/* <Text style={{textAlign: 'center'}}>{Moment(CreatedAt).format('d/M/YYYY')}</Text> */}
                                <Text style={{textAlign: 'center'}}>{Moment(CreatedAt).format('d MMMM YYYY')}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', paddingTop: 20}}>
                            <View>
                                <Icon name="alarm" style={{color: '#0062a8'}}/>
                            </View>
                            <View style={{paddingLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{textAlign: 'center'}}>{time_end}</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => this.moveBack()}>
                            <Image source={require('./../../../../assets/Back.png')} resizeMode="contain" style={{width: 220, height: 80, justifyContent: 'center', alignItems: 'center'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state)=>({
    activity: state.GoalsReducer
})

export default connect(mapStateToProps)(Goal_detail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    completeBorder: {
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
    }
});