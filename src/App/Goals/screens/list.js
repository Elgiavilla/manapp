import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, Animated, Platform,ScrollView, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Icon, Spinner} from 'native-base'
import { NavigationActions } from 'react-navigation'

import Moment from 'moment'

import {connect} from 'react-redux'

import {getActivityUser, getActivityById} from '../action'

const HEADER_MIN_HEIGHT = 70
const HEADER_MAX_HEIGHT = 250
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class ListActivity extends Component{
    constructor(props){
        super(props)
        this.state = {
          contentOffsetY: 0,
          pagenum : 10,
          scrollY: new Animated.Value(0)
        }
    }

    async onReloadData(){
        AsyncStorage.getItem('token').then((response) => {
            this.props.dispatch(getActivityUser(response, this.state.pagenum))
        })
    }

    componentDidMount(){
        this.props.navigation.addListener("didFocus", () => {
            this.onReloadData()
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

    componentWillMount(){
        this.onReloadData()
    }

    _renderActivity(){
        return(
            <View style={{flex: 1, paddingTop: 200}}>
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
                                                <Text>{Moment(item.CreatedAt).format('D MMMM YYYY')}</Text>
                                                
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
            </View>
        )
    }

    render(){
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });

        const headerBorderSize = this.state.scrollY.interpolate({
            inputRange: [30, HEADER_SCROLL_DISTANCE],
            outputRange: [30, 0],
            extrapolate: 'clamp'
        })
    

        const headerZindex = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, 1000],
            extrapolate: 'clamp'
        })

        const headerTitleBottom = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5
                + 26
            ],
            outputRange: [-20, -20, -20, 0],
            extrapolate: 'clamp'
        })
        
        return(
            <View style={{flex: 1}}>
                <Animated.View style={{zIndex: headerZindex, position: 'absolute', width: width, height: headerHeight, overflow: 'hidden', borderBottomLeftRadius: headerBorderSize, borderBottomRightRadius: headerBorderSize}}>
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
                </Animated.View>
                <ScrollView 
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                {
                    listener: event => {
                    const offsetY = event.nativeEvent.contentOffset.y
                        if(offsetY < 0){
                            this.onReloadData()
                        }
                    },
                },
                )}>
                {this._renderActivity()}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
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
        shadowRadius: 2.0,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {width: 1, height: 1},
        marginBottom: 10
    }
});