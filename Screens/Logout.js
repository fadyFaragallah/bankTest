import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {Constants} from 'expo';

import {logout} from '../api'

export default class Logout extends React.Component{
	
	static navigationOptions = ({navigation}) =>{
		return{
			headerTitle:"Logout Screen"
		}
	}
	Logout=async()=>{
		await logout();
		this.props.navigation.navigate("Login");

	}
	render(){
		return(
			<View style={styles.container}>
				<Button title="logout" onPress={this.Logout} />
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
});
