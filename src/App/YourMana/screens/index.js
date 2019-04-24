import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, AsyncStorage } from 'react-native';

import {connect} from 'react-redux'
import {getCountByUser} from './../action'
import Moment from 'moment'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class YourManaList extends Component{
    
    componentDidMount(){
        AsyncStorage.getItem('token').then((response) => {
            this.props.dispatch(getCountByUser(response))
        })
    }

    render(){
        const {success, CreatedAt} = this.props.manalist.results
        const startDays = Moment(CreatedAt)
        const lastDays = Moment()
        const daysCount = Moment(lastDays).diff(startDays, 'days').toString()
        return(
            <View style={{flex: 1}}>
                <ImageBackground style={{width: width, height: height}} source={require('./../../../../assets/BGApp.png')}>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 35}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Your Mana</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                    }}>
                        <View style={styles.circleMana}>
                            <Text style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: 'white'
                            }}>{success} Goals</Text>
                            <Text style={{
                                paddingTop: 5,
                                justifyContent: 'center',
                                alignContent: 'center',
                                fontSize: 10,
                                color: 'grey'
                            }}>in {daysCount} days</Text>
                        </View>
                        <View style={{paddingTop: 20}}>
                            <Text style={{fontSize: 25, color: 'white',fontWeight: 'bold', justifyContent: 'center', alignContent: 'center'}}>Good Job!</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    manalist: state.ManaReducer
})


export default connect(mapStateToProps)(YourManaList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 400
    },
    circleMana: {
        height: 200,
        width: 200,
        borderRadius: 120,
        borderColor: '#7bc2f2',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        shadowOffset: {width: 1, height: 1}
    }
});