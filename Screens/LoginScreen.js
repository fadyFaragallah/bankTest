import React from 'react';
import {  TextInput,Button,KeyboardAvoidingView,StyleSheet,ImageBackground,View ,Text} from 'react-native';
import {Constants} from 'expo'
import {navigationOptions} from 'react-navigation'
import {login,writeUserData,email,uid} from "../api"

export default class LoginScreen extends React.Component{
  static navigationOptions = ({navigation})=>{
    return{
        headerTitle:"Login"
    }
  }
  state = {
  	email:'',
  	password:'',
  }
  handleEmailChange = (email) => {
  	this.setState({email})
  }
  handlePasswordChange = (password) => {
  	this.setState({password})
  }
  handleLogin=()=>{
    login(this.state.email,this.state.password)
    writeUserData(uid,"fadi",email);
  	this.props.navigation.navigate("ConverterRouteOne")
  }
  render(){
    return(
      <ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/LoginIcon.jpg')}>
      <View style={styles.textView}>
        <Text style={styles.text}> Arab African International Bank </Text>
      </View>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      	<TextInput  style={styles.input} value={this.state.email} onChangeText={this.handleEmailChange} placeholder="email" />
      	<TextInput secureTextEntry={true} keyboardType="numeric" style={styles.input} value={this.state.password} onChangeText={this.handlePasswordChange} placeholder="password"/>
        <Button title="Login" onPress={this.handleLogin}  style={{paddingBottom:10}}/>
      </KeyboardAvoidingView>
      <View style={styles.container}></View>
      </ImageBackground>
      )
  }
}

const styles = StyleSheet.create({
	input:{
		minWidth:250,
		paddingBottom:10,
	},
  text:{
    fontSize:20,
    color:"white"
  },
  textView:{  
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.StatusBarHeight,
  },
})