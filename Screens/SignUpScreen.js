import React from 'react';
import {  TextInput,Button,KeyboardAvoidingView,StyleSheet } from 'react-native';
import {signup} from "../api"

export default class SignUpScreen extends React.Component{
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
  handleSignup=()=>{
    signup(this.state.email,this.state.password)
  	this.props.navigation.navigate("RouteTwo")
  }
  render(){
    return(
      <KeyboardAvoidingView behavior='padding'>
      	<TextInput  style={styles.input} value={this.state.email} onChangeText={this.handleEmailChange} placeholder="email" />
      	<TextInput keyboardType="numeric" style={styles.input} value={this.state.password} onChangeText={this.handlePasswordChange} placeholder="password"/>
        <Button title="SignUp" onPress={this.handleSignup} style={{paddingBottom:10}}/>
        <Button title="already have an account" onPress={()=> this.props.navigation.navigate("RouteThree")} />
      </KeyboardAvoidingView>
      )
  }
}

const styles = StyleSheet.create({
	input:{
		minWidth:250,
		paddingBottom:10,
	}
})