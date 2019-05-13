/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Alert} from 'react-native'
import Introduction from './src/MainNavigator'
import store from './src/redux/store'
import firebase from 'react-native-firebase'

class App extends Component {

  render() {
    return(
      <Introduction />
    )
  }
}

export default class Root extends Component {
  async createNotificationListeners(){
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const {title, body} = notification
      console.log(title)
    })
  
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body);
    });

    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
        const { title, body } = notificationOpen.notification;
        this.showAlert(title, body);
    }
  /*
  * Triggered for data only payload in foreground
  * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });

  }

  componentWillUnmount(){
    this.messageListener()
  }

  showAlert(title, body) {
    Alert.alert(
      title, body,
      [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }

  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
