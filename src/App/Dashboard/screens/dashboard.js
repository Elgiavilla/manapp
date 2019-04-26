import React, { Component } from 'react'
import{View, Alert, StyleSheet, Dimensions, Image, Animated, ImageBackground, ScrollView, AsyncStorage,TouchableOpacity} from 'react-native'

import {connect} from 'react-redux'
import {getActivityByUser, changeStatus} from './../action'

import {Text, Spinner, Icon, Button
} from 'native-base'

const width = Dimensions.get('window').width

const HEADER_MIN_HEIGHT = 70
const HEADER_MAX_HEIGHT = 250
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

class Dashboard extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
          scrollY: new Animated.Value(0),
        };
    }

    goToAddGoal(){
        this.props.navigation.navigate('AddActivity')
    }

    changeStatus(id, status){
        Alert.alert(
            'Option', 
            'Are you sure ?',
            [
                {text: 'No'},
                {text: 'Yes', onPress: () => this._changeStaus(id, status)}
            ]
        );
    }

    _changeStaus(id, status){
        this.props.dispatch(changeStatus(id, status)).then((response) => {
            this.onReloadData()
        })
    }

    goToDetailGoal(activity_id){
        this.props.navigation.navigate('ActivityDetail', {
            activity_id: activity_id
        })
    }

    onReloadData(){
        AsyncStorage.getItem('token').then((response) => {
            this.props.dispatch(getActivityByUser(response))
        })
    }

    componentDidMount(){
        this.onReloadData()
    }

    _renderActivityView(){
        return(
            <View style={{flex: 1, marginTop: 200}}>
                    <View style={{alignContent:'center', alignItems: 'center'}}>
                        {this.props.activities.isLoading?(
                            <View key={this.props.activities.isLoading} style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 200}}>
                                <Spinner/>
                            </View>
                        ) : 
                        (
                        <View>
                        {this.props.activities.data.map((item, index) => (
                        <View key={index} style={styles.customCard}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{paddingLeft: 20, paddingTop: 40, paddingBottom: 20}}>
                                    <Image style={{width: 50, height: 80, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} source={require('./../../../../assets/Apixxxhdpi.png')}/>
                                </View>
                                <View style={{paddingLeft: 30, flex: 1, paddingTop: 10, width: 190}}>
                                    <View style={{flex: 1}}>
                                      <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
                                      <View style={{flexDirection: 'row', paddingTop: 10}}>
                                       <View>
                                            <Icon name="alarm" style={{color: '#0062a8'}}/>
                                       </View>
                                       <View style={{paddingLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
                                         <Text style={{textAlign: 'center'}}>{item.time_end}</Text>
                                       </View>
                                      </View>
                                    </View>
                                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                                        
                                        <View style={{
                                            width: 60,
                                            height: 30,
                                            borderRadius: 20
                                        }}>
                                        <TouchableOpacity onPress={() => this.changeStatus(item.ID, 1)}>
                                        <Image style={{width: 60, height: 30, resizeMode: 'contain'}} source={require('./../../../../assets/done-home.png')}/>
                                        </TouchableOpacity>
                                        </View>
                                        <View style={{
                                            width: 60,
                                            height: 30,
                                            borderRadius: 20,
                                            marginLeft: 15
                                        }}>
                                        <TouchableOpacity key={item.ID} onPress={() => this.changeStatus(item.ID, 2)}>
                                        <Image style={{width: 60, height: 30, resizeMode: 'contain'}} source={require('./../../../../assets/nope-home.png')}/>
                                        </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{paddingTop: 10}}>
                                        <View style={{
                                            width: 135,
                                            height: 30,
                                            borderRadius: 20
                                        }}>
                                        <TouchableOpacity onPress={() => this.goToDetailGoal(item.ID)}>
                                            <Image style={{width: 135, height: 30, resizeMode: 'contain'}} source={require('./../../../../assets/Check-Goal.png')}/>
                                        </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        ))}
                        </View>
                        )}
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
                            <Animated.View style={{bottom: headerTitleBottom, paddingTop: 35, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Home</Text>
                            </Animated.View>
                            <View style={{paddingTop: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>Today's Goals</Text>
                            </View>
                        </View>
                </ImageBackground>
            </Animated.View>
            <ScrollView
                scrollEventThrottle={1}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                )}
            >
            {this._renderActivityView()}
            </ScrollView>
            <View>
            <Button style={styles.fabstyle} onPress={() => this.goToAddGoal()}>
                <Icon name='add' style={{fontSize: 50, color: 'white', right: 4}}/>
            </Button>
            </View>
            </View>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        activities: state.DashboardReducer,
        changestatus: state.DashboardReducer
    }
}

export default connect(mapStateToProps)(Dashboard);

const styles = StyleSheet.create({
    bgPictureContainer: {
        position: 'absolute',
        zIndex: 0
    },
    bgPicture: {
        width: width,
        height: 200,
        borderBottomLeftRadius: 50, 
        borderBottomRightRadius: 50,
        overflow: 'hidden'
    },
    titlePage: {
        paddingTop: 50,
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },centeredBody: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    customCard: {
        width: width / 2 + 120,
        height: 160,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 2.0,
        shadowOffset: {width: 1, height: 1},
        marginBottom: 10
    },
    fabstyle: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        paddingBottom: 20,
        width: 65,
        height: 65,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderRadius: 40,
        backgroundColor: '#0062a8'
    }
});