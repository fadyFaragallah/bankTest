import React, { Component } from 'react';
import { Button, Text, View, TouchableWithoutFeedback, StyleSheet,Picker } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';
import {Constants} from 'expo';

import "prop-types"; // 15.5.10

export default class OptionsScreen extends Component {
  state = {
    selectedOption: 'none',
    from:"Heliopolis",
  }
  handlePress = () =>{
    const obj={location:this.state.selectedOption,type:this.state.from,};
    console.log(obj);
    this.props.navigation.setParams({"KEY":obj})
    this.props.navigation.navigate('RouteTwo');
  }
  render() {
    const options = ['ATM', 'Bank'];

    function setSelectedOption(selectedOption) {
      this.setState({
        selectedOption,
      });
    }

    function renderOption(option, selected, onSelect, index) {
      const style = selected ? { fontWeight: 'bold' } : {};

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }

    function renderContainer(optionNodes) {
      return <View>{optionNodes}</View>;
    }

    return (
      <View style={{ margin: 50 }}>
        <RadioButtons
          options={options}
          onSelection={setSelectedOption.bind(this)}
          selectedOption={this.state.selectedOption}
          renderOption={renderOption}
          renderContainer={renderContainer}
        />
        <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
        <Text style={styles.text}> choose a location </Text>
          <Picker selectedValue={this.state.from}
              onValueChange={ (value) => {this.setState({from:value})}}
              style={{ height: 50, width: 100 }}>
            <Picker.Item label="Heliopolis" value="Heliopolis"/>
            <Picker.Item label="10 of Ramadan" value="10 of Ramadan"/>
            <Picker.Item label="6 of October" value="6 of October"/>
          </Picker>
          <Button title="find locations" onPress={this.handlePress}/>
      </View>
    );
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
    justifyContent:'space-between'
  },
  text:{
    alignItems:'center',
    fontSize:18,
    flex:1,
    justifyContent:'space-between'
  },
  button:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:"center"
  }
});
