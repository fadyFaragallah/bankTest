import React from 'react';
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native'
import {Constants} from 'expo'
import Expo from 'expo'


const heliopolisBanks=
[
  {latitude:30.098981,longitude:31.323306},
  {latitude:30.089222,longitude:31.338694},
  {latitude:30.07880631,longitude:31.339528},
]

const heliopolisATMs=
[
  {latitude:30.072616,longitude:31.286761},
  {latitude:30.078806,longitude:31.339528},
  {latitude:30.091917,longitude:31.328361},
]

const RamadanBanks=
[
  {latitude:30.3035,longitude:31.201333},
]

const RamadanATMs=
[
  {latitude:30.244476,longitude:31.767305},
  {latitude:30.064286,longitude:31.022559},
]

const OctoberBanks=
[
  {latitude:29.946333,longitude:30.898222},
  {latitude:30.020389,longitude:31.003583},
]

const OctoberATMs=
[
  {latitude:29.965723,longitude:31.016255},
  {latitude:30.030332,longitude:30.995168},
]

let id =0;
export default class MapScreen extends React.Component {

  state={
    location:null,
    markers:[],
  }
  _getLocationAsync=async()=>{
    let {status} =await Expo.Permissions.askAsync(Expo.Permissions.LOCATION);
    if(status !== 'granted')
    {
      return;
    }
    let location =await Expo.Location.getCurrentPositionAsync({});
    this.setState({location:location,
    });
    const obj=this.props.navigation.getParam("KEY");
    const type = obj.type;
    const place = obj.location;
    console.log(type+place);
    if((type==="Bank")){
      if(place==="Heliopolis"){
        this.setState({markers:heliopolisBanks})
      }
      else if(place==="10 of Ramadan"){
        this.setState({markers:RamadanBanks})
      }
      else{
        this.setState({markers:OctoberBanks})
      }
    }
    else{
      if(place==="Heliopolis"){
        this.setState({markers:heliopolisATMs})
      }
      else if(place==="10 of Ramadan"){
        this.setState({markers:RamadanATMs})
      }
      else{
        this.setState({markers:OctoberATMs})
      }
    }
  }

  componentDidMount(){
    this._getLocationAsync();
  }

  render() {
    if(this.state.location==null)
    return(
      <View>
      </View>
    )
    return (
      <Expo.MapView style={{flex:1}}
       provider={Expo.MapView.PROVIDER_GOOGLE}
       initialRegion={{
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude,
        latitudeDelta: 1.5,
        longitudeDelta: 1.5,
      }}>


      <Expo.MapView.Marker
      coordinate={this.state.location.coords}
      title="you are here!"
      pinColor="crimson"
      />
      
     {this.state.markers.map((mark)=>{return(
       <Expo.MapView.Marker 
        coordinate={{
          latitude:mark.latitude,
          longitude:mark.longitude
        }}
        pinColor="blue"
        key={id++}

       />
      )
     })}
      
      </Expo.MapView>
    );
  }
}
/*
        <Expo.MapView.Marker
      coordinate={{
        latitude:30.020389,
        longitude:31.003583}}
      title="bank branch"
      description="bank"
      pinColor="blue"
      />
      */