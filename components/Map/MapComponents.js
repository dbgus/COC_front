import React from 'react'
import { View, Text,StyleSheet, Dimensions } from 'react-native'
import MapView, {Polyline, Marker} from 'react-native-maps';


const points = [
    { latitude: 11.56813, longitude: 104.91037 },
    { latitude: 11.56779, longitude: 104.90666 },
    { latitude: 11.56711, longitude: 104.90673 },
    { latitude: 11.56582, longitude: 104.90688 },
    { latitude: 11.5644, longitude: 104.90704 },
    { latitude: 11.56354, longitude: 104.90715 },
    { latitude: 11.56321, longitude: 104.90716 },
    { latitude: 11.56318, longitude: 104.90743 },
    { latitude: 11.56289, longitude: 104.90892 },
    { latitude: 11.56254, longitude: 104.91068 },
    { latitude: 11.56234, longitude: 104.91186 }
  ];


const MapComponents = ({MLat, MLon}) => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
            initialRegion={{
            latitude: MLat,
            longitude: MLon,
            latitudeDelta: 0.0015,
            longitudeDelta: 0.0015,
            }}
        >
            <Marker
                coordinate={{latitude: MLat, longitude: MLon}}
                title="this is a marker"
                description="this is a marker example"
            />

            <Polyline
              coordinates={[
                { latitude: 37.483344119596154, longitude: 126.9792060723688 },
                { latitude: 37.74114790433078, longitude: 126.7770242067987 },
                { latitude: 37.74114790433078, longitude: 126.8770242067987 },
                { latitude: 37.74114790433078, longitude: 126.9770242067987 }
              ]}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                '#B24112',
                '#E5845C',
                '#238C23',
                '#7F0000'
              ]}
              strokeWidth={2}
            />
        </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    map: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    polyline: {
        zIndex:1000
    }
  });
  
export default MapComponents