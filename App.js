import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {Constants} from 'expo';
import * as firebase from "firebase"
import {config} from './api'

import SignUpScreen from "./Screens/SignUpScreen"
import MainScreen from"./Screens/MainScreen"
import LoginScreen from"./Screens/LoginScreen"


import ConverterNavigator from"./Switches/currencyswitch"


 const AppNavigator = createSwitchNavigator({
  //"RouteOne":LoginScreen,
  "RouteTwo":ConverterNavigator,
 // "RouteThree":LoginScreen,
})


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator style={styles.container}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.StatusBarHeight,
  },
});


//to get rid of warnings

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};