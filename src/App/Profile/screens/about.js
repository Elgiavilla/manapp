import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native';
import {Icon} from 'native-base'
import { NavigationActions } from 'react-navigation'
import Introduction from './../../../Auth/screens/introduction'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class About extends Component{

    moveBack(){
        this.props.navigation.goBack(null)   
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground style={{width: width, height: height}} source={require('./../../../../assets/BGApp.png')}>
                        <View style={{ marginTop: height / 3 - 190, width: width, flexDirection: 'row'}}>
                            <View style={{marginLeft: 10}}>
                                <TouchableOpacity onPress={() => this.moveBack()}>
                                <Icon name="arrow-back" style={{color: 'white'}}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 30}}>
                                <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>About</Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: height / 3 - 190}}>
                            <Image resizeMode={'contain'} source={require('./../../../../assets/LogoMana.png')} style={{width: 150, height: 150}} />
                        </View>
                        <View style={{flex: 1, paddingTop: 40}}>
                            <View style={{height: 170, width: width, justifyContent: 'center', alignItems: 'center'}}>
                                <View style={styles.slide1}>
                                        <View style={styles.viewDescIntro}>
                                            <View style={styles.viewTitleIntro}>
                                                <Text style={styles.titleIntro}>Let's Get Started 1</Text>
                                            </View>
                                            <Text style={styles.descIntro}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            </Text>
                                            <Text style={styles.descIntro}>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            </Text>
                                        </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
            </View>
        );
    }
}

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },slide1: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      titleIntro: {
          fontSize: 30,
          fontWeight: 'bold',
          color: '#0062a8'
      },
      descIntro: {
        fontSize: 15, 
        textAlign: 'center',
        paddingBottom: 20
      },
      viewTitleIntro: {
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: 20
      },
      viewDescIntro: {
        paddingLeft: 20, 
        paddingRight: 20, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 20
      }
});