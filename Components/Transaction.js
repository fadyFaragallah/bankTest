import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Transaction extends React.Component{
	render(){
		return(
		<View style={styles.container}>
			<View style={styles.firstLine}>
				<Text style={styles.text}>{this.props.item.who}</Text>
				{this.props.item.in && <Text style={styles.textGreen}> in: {this.props.item.val}</Text>}
				{!this.props.item.in && <Text style={styles.textRed}> out: {this.props.item.val}</Text>}
			</View>
			<View style={styles.secondLine}>
				<Text style={styles.text}>balance: {this.props.item.after}</Text>
			</View>
		</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		padding:5,
		backgroundColor:'#94D1BE',
		marginBottom:1,
	},
	firstLine:{
		flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
	},
	secondLine:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	text:{
		flex:1,
		fontSize:20,
	},
	textRed:{
		flex:1,
		fontSize:20,
		color:'red'
	},
	textGreen:{
		flex:1,
		fontSize:20,
		color:'green',
	},
})