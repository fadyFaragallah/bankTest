import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Constants} from 'expo';

export default class Report extends React.Component{
	static navigationOptions = ({navigation}) =>{
		return{
			headerTitle:"Report Screen"
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<Text>Report</Text>
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
