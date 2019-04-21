import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, ScrollView, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Icon, Spinner} from 'native-base'
import { NavigationActions, StackActions } from 'react-navigation'

import Moment from 'moment'

import {connect} from 'react-redux'

import {getActivityUser, getActivityById} from '../action'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class ListActivity extends Component{
    state = {
        data: {}
    }

    componentDidMount(){
        AsyncStorage.getItem('token').then((response) => {
            this.props.dispatch(getActivityUser(response))
        })
    }

    goToDetailGoal(activity_id){
        const navigateAction = NavigationActions.navigate({
            routeName: 'Goal_detail',
          
            params: {
                activity_id: activity_id
            },
          
            action: NavigationActions.navigate({ routeName: 'Goal_detail' }),
          });
          
          this.props.navigation.dispatch(navigateAction);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ScrollView>
                <View style={{zIndex: 0, position: 'absolute', width: width, height: 250, overflow: 'hidden', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <ImageBackground source={require('./../../../../assets/BGApp.png')}
                                style={{width: width, height: 300, resizeMode: 'contain'}}>
                    <View style={{flex: 1}}>
                        <View style={{paddingTop: 35, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Home</Text>
                        </View>
                        <View style={{paddingTop: 55, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Your Goals</Text>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
                <View style={{flex: 1, paddingTop: 200}}>
                    {this.props.activitiesuser.isLoading? (
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View key={this.props.activitiesuser.isLoading} style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 200}}>
                            <Spinner/>
                        </View>
                    </View>
                    ): (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            {this.props.activitiesuser && this.props.activitiesuser.data && this.props.activitiesuser.data.map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => this.goToDetailGoal(item.ID)}>
                                <View style={styles.cardGoals}>
                                    <View style={{flexDirection: 'row', paddingLeft: 25, paddingTop: 10}}>
                                        <View style={{flex: 1}}>
                                            <View style={{alignContent: 'flex-start'}}>
                                                <Text>{item.title}</Text>
                                            </View>
                                            <View style={{paddingTop: 10}}>
                                                <Text>{Moment(item.CreatedAt).format('d MMMM YYYY')}</Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            {item.complete_activity == 1? (
                                                <Image style={{width: 60, height: 30, resizeMode: 'contain'}} source={require('./../../../../assets/done-home.png')}/>
                                            ): (
                                                <Image style={{width: 60, height: 30, resizeMode: 'contain'}} source={require('./../../../../assets/nope-home.png')}/>
                                            )}
                                        </View>
                                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                                            <Icon name="arrow-forward" style={{color: 'black'}}/>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            ))}
                        </View>
                    )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
      activitiesuser: state.GoalsReducer
  }
}

export default connect(mapStateToProps)(ListActivity);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    cardGoals: {
        width: width / 2 + 120,
        height: 90,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        shadowRadius: 0.5,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 1, height: 1},
        marginBottom: 10
    }
});