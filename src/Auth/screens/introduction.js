import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper'
import {Button} from 'native-base'
import { NavigationActions, StackActions } from 'react-navigation'
import { connect } from 'react-redux'
import Dashboard from './../../App/navigation'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
class Introduction extends Component {
    constructor() {
        super();
        this.state = { hasToken: false };
    }

    componentDidMount(){
        this.checkUserSignedIn()
    }

    async checkUserSignedIn(){
        let context = this;
        try {
           let value = await AsyncStorage.getItem('token');
           if (value != null){
              const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'MainActivity'})]
              })
              this.props.navigation.dispatch(resetAction)
            // AsyncStorage.removeItem('token')
           }
        } catch (error) {
          // Error retrieving data
        }
    }

    moveToRegister(){
        this.props.navigation.push('Register')
    }

    moveToLogin(){
        this.props.navigation.push('Login')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground style={{width: width, height: height}} source={require('./../../../assets/BGApp.png')}>
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: height / 3 - 130}}>
                        <Image resizeMode={'contain'} source={require('./../../../assets/LogoMana.png')} style={{width: 150, height: 150}} />
                    </View>
                    <View style={{paddingTop: 50}}>
                        <View style={{height: 170, width: width, justifyContent: 'center', alignItems: 'center'}}>
                            <Swiper>
                                <View style={styles.slide1}>
                                    <View style={styles.viewTitleIntro}>
                                        <Text style={styles.titleIntro}>Let's Get Started 1</Text>
                                    </View>
                                    <View style={styles.viewDescIntro}>
                                        <Text style={styles.descIntro}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.slide1}>
                                    <View style={styles.viewTitleIntro}>
                                        <Text style={styles.titleIntro}>Let's Get Started 2</Text>
                                    </View>
                                    <View style={styles.viewDescIntro}>
                                        <Text style={styles.descIntro}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.slide1}>
                                    <View style={styles.viewTitleIntro}>
                                        <Text style={styles.titleIntro}>Let's Get Started 3</Text>
                                    </View>
                                    <View style={styles.viewDescIntro}>
                                        <Text style={styles.descIntro}>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </Text>
                                    </View>
                                </View>
                            </Swiper>
                        </View>
                    </View>
                    <View style={{paddingTop: 5, flex: 1}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                          <TouchableOpacity onPress={() => this.moveToRegister()}>
                            <Image resizeMode={'contain'} source={require('./../../../assets/Createaccount.png')} style={{width: 230, height: 80}}/>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, paddingTop: 5}}>
                          <View style={{justifyContent: 'center', alignItems: 'center'}}>
                              <TouchableOpacity>
                              <Button iconLeft full light style={{width: 230, height: 35, borderRadius: 50}} onPress={() => this.moveToLogin()}>
                                <Text style={{fontSize: 12 ,justifyContent: 'center', alignItems: 'center', marginLeft: 10}}>Sign In</Text>
                              </Button>
                              </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                </ImageBackground>
            </View>
            );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
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
    textAlign: 'center'
  },
  viewTitleIntro: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  viewDescIntro: {
    paddingLeft: 20, 
    paddingRight: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 20
  }
});

const mapStateToProps = (state) => {
    return {
        introduction: state.authReducer
    }
}

export default connect(mapStateToProps)(Introduction)