import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableHighlight } from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class YourManaList extends Component{
    render(){
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
                            }}>7 Goals</Text>
                            <Text style={{
                                paddingTop: 5,
                                justifyContent: 'center',
                                alignContent: 'center',
                                fontSize: 10,
                                color: 'grey'
                            }}>in 3 days</Text>
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

export default YourManaList;

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