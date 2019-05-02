import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, ImageBackground, AsyncStorage } from 'react-native';
import { ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base'
import { connect } from 'react-redux'
import { NavigationActions, StackActions } from 'react-navigation'
import { logout, userData, updateSwitch } from './../action'

const width = Dimensions.get('window').width

class ProfileDashboard extends Component{
    constructor(props){
        super(props)
    }

    handleLogout(){
        this.props.dispatch(logout()).then(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'Introduction'})]
            })
            this.props.navigation.dispatch(resetAction)
        })
    }


    componentDidMount(){
        this.onReloadProfile()
    }

    onChangeFunction(newState){
        AsyncStorage.getItem('token').then((response) => {
            const data1 = {
                notification: true
            }
            this.props.dispatch(updateSwitch(response, newState.switchNotif)).then(() => {
                this.onReloadProfile()
            })
        })
    }

    onReloadProfile(){
        AsyncStorage.getItem('token').then((response) => {
            this.props.dispatch(userData(response))
        })
    }

    moveToEditProfile(){
        this.props.navigation.navigate('Edit_profile')
    }

    moveToAbout(){
        this.props.navigation.navigate('About')
    }

    render(){
        const {first_name, notification} = this.props.profiles.data
        return(
            <View style={{flex: 1}}>
                <View style={{zIndex: 0, position: 'absolute', width: width, height: 250, overflow: 'hidden', borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
                    <ImageBackground source={require('./../../../../assets/BGApp.png')}
                                style={{width: width, height: 300, resizeMode: 'contain'}}>
                    <View style={{flex: 1}}>
                        <View style={{paddingTop: 35, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Profile</Text>
                        </View>
                        <View style={{paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="contact" style={{fontSize: 130, color: 'white'}}/>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>{first_name}</Text>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
                <View style={{flex: 1, marginTop: 270}}>
                    <ListItem icon noBorder onPress={() => this.moveToEditProfile()}>
                        <Left>
                            <Icon active name="settings" style={{color: '#0062a8'}}/>
                        </Left>
                        <Body>
                            <Text>Edit Profile</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon noBorder>
                        <Left>
                            <Icon active name="help-circle-outline" style={{color: '#0062a8'}}/>
                        </Left>
                        <Body>
                            <Text>Notification</Text>
                        </Body>
                        <Right>
                        <Switch 
                            onValueChange={(value => this.onChangeFunction({switchNotif: value}))} 
                            trackColor={{true: '#0062a8'}}
                            value={notification}
                        />
                        </Right>
                    </ListItem>
                    <ListItem icon noBorder onPress={() => this.moveToAbout()}>
                        <Left>
                            <Icon active name="information-circle-outline" style={{color: '#0062a8'}}/>
                        </Left>
                        <Body>
                            <Text>About</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon noBorder onPress={() => this.handleLogout()}>
                        <Left>
                            <Icon active name="power" style={{color: '#0062a8'}}/>
                        </Left>
                        <Body>
                            <Text>Logout</Text>
                        </Body>
                    </ListItem>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        profiles: state.ProfileReducer
    }
}

export default connect(mapStateToProps)(ProfileDashboard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});