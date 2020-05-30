import React, { Component, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapComponent from '../../components/Map/MapComponents'
import * as Loaction from 'expo-location';
export default class MapContainer extends Component {
  
    async UNSAFE_componentWillMount() {
        try {
            this._getGPSPermisson();
            const loc = await Loaction.getCurrentPositionAsync();
            this.setState({
                latitude: loc.coords.latitude,
                longitude:loc.coords.longitude
            })
        } catch {
            console.log('fuck');
        }
    }
    async _getGPSPermisson() {
        await Loaction.requestPermissionsAsync()
    }
  render() {
    return (
          <View style={styles.container} >
              {this.state ? <MapComponent MLat={this.state.latitude} MLon={this.state.longitude} /> : <Text>loading</Text>}
          </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
  });
  
