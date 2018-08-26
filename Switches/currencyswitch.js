import React from 'react';
import {createStackNavigator,createSwitchNavigator} from 'react-navigation';
import MainScreen from '../Screens/MainScreen'
import Converter from '../Screens/Converter'
import Account from '../Screens/Account'
import FindUs from '../Screens/FindUs'
import Report from '../Screens/Report'
import Logout from '../Screens/Logout'
import Login from '../Screens/LoginScreen'
import AddTrans from '../Screens/addTrans'

const AccountNav = createSwitchNavigator({
	"RouteOne":AddTrans,
	"RouteTwo":Account,
})

 const ConverterNavigator1 = createStackNavigator({
 	"Login":Login,
	"ConverterRouteOne":MainScreen,
	"ConverterRouteTwo":Converter,
	"ConverterRouteThree":Account,
	"ConverterRouteFour":FindUs,
	"ConverterRouteFive":Report,
	"ConverterRoutesix":Logout,
	"ConverterRouteseven":AccountNav,
})

export default class ConverterNavigator extends React.Component{
	render(){
		return(
			<ConverterNavigator1 />
			)
	}
}
console.disableYellowBox = true;