import React from 'react';
import {  TextInput,Button,KeyboardAvoidingView,StyleSheet,ImageBackground,View ,Text,Switch} from 'react-native';
import {Constants} from 'expo'
import {navigationOptions} from 'react-navigation'
import {addTrans} from "../transaction"

export default class AddTrans extends React.Component{
  static navigationOptions = ({navigation})=>{
    return{
        headerTitle:"Add Transaction"
    }
  }
  state={
    val:0,
    In:true,
    status:'in',
  }
  handleValChange=(val)=>{
    this.setState({val})
  }
  handleInChange=()=>{
    if(this.state.In)
      {this.setState({
              In:false,
              status:'out',
            })}
    else{
      this.setState({
        In:true,
        status:'in'
      })
    }
  }
  handlePress=()=>{
      t = {'In':this.state.In,'val':this.state.val}
      addTrans(this.state.In,this.state.val);
      this.props.navigation.navigate('RouteTwo',{'Trans':t})
  }
  render(){
    return(
      <ImageBackground style={{flex:1,width:'100%',height:'100%'}} 
                 resizeMode='cover' 
                 source={require('../Images/AddIcon.jpg')}>
      <View style={styles.textView}>
        <Text style={styles.text}> Add Transaction </Text>
      </View>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      	<TextInput  style={[styles.input,styles.text]} keyboardType="numeric" value={this.state.val.toString()} onChangeText={this.handleValChange} placeholder="transaction value" />
        <Switch onValueChange={this.handleInChange} value={this.state.In}/>
        <Text style={styles.text}>{this.state.status}</Text>
        <Button title="add transaction" onPress={this.handlePress}  style={{paddingBottom:10}}/>
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