/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Introduction from './src/MainNavigator'
import store from './src/redux/store'

class App extends Component {

  render() {
    return(
      <Introduction />
    )
  }
}

export default class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
