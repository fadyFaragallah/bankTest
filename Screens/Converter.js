import React from 'react';
import {View,StyleSheet,Button,TextInput,Text,Picker,ImageBackground,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {Currencies,reqAmount} from'../currencyApi';
import {Constants} from "expo";

let id =0;
export default class Converter extends React.Component{
	static navigationOptions=({navigation})=>{
		return{
			headerTitle:"Currency Converter"
		}
	}
	state={
		from:'EUR',
		to:'EUR',
		amount:1,
		value:1,
	}
	convert=async()=>{
		const res = await reqAmount(this.state.to);
		this.setState({value:Number(this.state.amount)*Number(res).toFixed(2)})
	}
	render(){
		return(
		<ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/conversionImg.jpg')}>
		<View style={{flex:1}} behavior='padding'>
			
			<View style={styles.container}>
				<View style={styles.Row}>
					<Text style={styles.text}> from </Text>
					<Picker selectedValue={this.state.from}
							onValueChange={ (value) => {this.setState({from:value})}}
							style={styles.onePicker} itemStyle={styles.onePickerItem}>
						{Currencies.map((currency)=> <Picker.Item key={id++} label={currency} value={currency}/>)}
					</Picker>
				</View>
				<View style={styles.Row}>
					<Text style={styles.text}> to </Text>
					<Picker selectedValue={this.state.to}
							onValueChange={ (value) => {this.setState({to:value})}}
							style={styles.onePicker} itemStyle={styles.onePickerItem} textStyle={{fontSize:18}}>
						{Currencies.map((currency)=> <Picker.Item key={id++} label={currency} value={currency}/>)}
					</Picker>
				</View>
				<View style={styles.Row}>
					<Text style={styles.text}> amount </Text>
					<TextInput value={this.state.amount.toString()}
								onChangeText={(text)=>{if(text) {this.setState({amount:parseInt(text,10)})}
														else this.setState({amount:0})}} 
								style={{flex:1,fontSize:18}}/>
				</View>
				<View style={styles.Row}>
					<TouchableOpacity onPress={this.convert} style={styles.button}>
						<Text style={[styles.text,{color:'green'}]}> convert </Text>
					</TouchableOpacity>
					<Text style={styles.text}> value: {this.state.value} </Text>
				</View>
			</View>
			<View style={{flex:1}}></View>
			<View style={{flex:1}}></View>
		</View>
		</ImageBackground>
		)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.StatusBarHeight,
    width:'100%'
  },
  Row:{
  	flexDirection:'row',
  	flex:1,
  	paddingLeft:10,
  	paddingRight:10,
  	backgroundColor:'white',
  	opacity:0.9,
  	margin:5,
  	justifyContent:'space-between',
	  width: "100%",
	  height: 65,
	  backgroundColor: '#FFF0E0',
	  borderColor: 'black',
	  borderWidth: 1,
  },
  text:{
  	alignItems:'center',
  	fontSize:18,
  	flex:1,
  	justifyContent:'space-between'
  },
  button:{
  	flex:1,
  	alignItems:"center"
  },
  onePicker: {
    width: 200,
    height: 35,flex:1,
  },
  onePickerItem: {
    height: 35,
	color: 'red',
	fontSize:15
  },
});
