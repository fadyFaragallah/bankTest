import React from 'react';
import {  View,Button,Text,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
import {navigationOptions} from "react-navigation";
import Constants from 'expo';
import Option from '../Components/Option'

const options =['Account','Currency Conversion','Find Us','Feedback','Logout']
export default class MainScreen extends React.Component{
	static navigationOptions = ({navigation}) =>{
		return{
			headerTitle:"Main Screen"
		}
	}
	render(){
		return(
			<View style={styles.container}>
			<View style={styles.child}>
			<ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/AccountIcon.jpg')}>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('ConverterRouteThree')}} style={styles.grandChild}>
					<Text style={styles.text}>Account</Text>
				</TouchableOpacity>
			</ImageBackground>

			<ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/ConverterIcon.jpg')}>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('ConverterRouteTwo')}} style={styles.grandChild}>
					<Text style={styles.textDark}>Currency Converter</Text>
				</TouchableOpacity>
			</ImageBackground>
			</View>

			<View style={styles.child}>
			<ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/MapIcon.jpg')}>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('ConverterRouteFour')}} style={styles.grandChild}>
					<Text style={styles.textDark}>Find Us</Text>
				</TouchableOpacity>
			</ImageBackground>

			<ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/ReportIcon.png')}>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('ConverterRouteFive')}} style={styles.grandChild}>
					<Text style={styles.textDark}>Report</Text>
				</TouchableOpacity>
			</ImageBackground>
			</View>

			<View style={styles.child}>
			<ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/LogoutIcon.png')}>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate('ConverterRoutesix')}} style={styles.grandChild}>
					<Text style={styles.textDark}>Logout</Text>
				</TouchableOpacity>
			</ImageBackground>
			</View>
			</View>
		)
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
  child:{
  	flex:1,
  	flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grandChild:{
  	flex:1,
  	padding:5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
  	fontSize:18,
  	color:"white"
  },
  textDark:{
  	fontSize:18,
  	color:"black"
  }
});
