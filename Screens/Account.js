import React from 'react';
import {View,Text,StyleSheet,Button,TouchableOpacity,ScrollView} from 'react-native';
import {Constants} from 'expo';

import Transaction from'../Components/Transaction';
import arrValues,{balance} from "../transaction"

let id=0;
let i =10;
let newBalance = balance;
export default class Account extends React.Component{
	static navigationOptions = ({navigation}) =>{
		return{
			headerTitle:"Account Screen"
		}
	}
	state={
		arr:arrValues
	}
	componentDidMount(){
		if(this.props.navigation.getParam('Trans')==null)
			return;
		t = this.props.navigation.getParam('Trans');
		if(t.In) newBalance+=Number(t.val);
		else newBalance-=Number(t.val);
	newTrans={
		'who':"transaction: "+i,
		'In':t.In,
		'val':t.val,
		'after':newBalance
	}
	this.setState({
		arr:[...this.state.arr,newTrans],	
	})
		i++;
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerRow}>
						<Text style={styles.text}>Initial Balance</Text>
						<Text style={styles.text}>100,000</Text>
					</View>
					<View style={styles.headerRow}>
						<Text style={styles.text}>Current Balance</Text>
						<Text style={styles.text}>{newBalance}</Text>
					</View>
				</View>
				<ScrollView style={styles.trans}>
					{this.state.arr.map((arrVal)=><Transaction item={arrVal} key={id++}/>)}
				</ScrollView>
				<TouchableOpacity onPress={()=>{this.props.navigation.navigate("RouteOne")}} style={styles.but}>
					<Text style={{fontSize:15,color:'#fff'}}>add transaction</Text>
				</TouchableOpacity>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex:6,
    backgroundColor: '#fff',
    paddingTop:Constants.StatusBarHeight,
  },
  header:{
  	flex:0.25,
    backgroundColor: '#76267F',
  },
  headerRow:{
  	flex:1,
  	flexDirection:"row",
  	margin:10,
  	justifyContent:'space-between'
  },
  text:{
  	fontSize:18,
  	color:'#FFF',
  },
  trans:{
  	flex:4,
  },
  but:{
  	flex:0.1,
    backgroundColor: '#76267F',
  	justifyContent:'center',
  	alignItems:'center'
  },
});
