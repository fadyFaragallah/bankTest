import React from "react";
import {Text,StyleSheet,View, TouchableOpacity} from "react-native";
import Constants from 'expo';

export default class Option extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>{this.props.text}</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'flex-start',
		backgroundColor:"#def",
		width:"100%",
		justifyContent:"center",
		padding:20,
	}
})