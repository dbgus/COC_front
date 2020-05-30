import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import { postMyLoactionRequest } from "../../reducer/Reducer/Location";

const MapComponents = ({ Lat, Lng, token, speed }) => {

  const [NowLat, setNowLat] = useState(Lat)
  const [NowLng, setNowLng] = useState(Lng)
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, [token])
  useEffect(() => {
    const id = setInterval(() => {
      if (token) {
        console.log(token, speed !== -1);
        if (speed !== -1) {
          const data = {
            token: token,
            longitude: Lng,
            latitude: Lat,
          };
          console.log(data);
          // dispatch(postMyLoactionRequest(data));
        }
      }
    }, 5000);
    return () => clearInterval(id)
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: NowLat,
          longitude: NowLng,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0015,
        }}
      >
        <Marker
          coordinate={{ latitude: NowLat, longitude: NowLng }}
          title="this is a marker"
          description="this is a marker example"
        />

        <Polyline
          coordinates={[
            { latitude: 37.483344119596154, longitude: 126.9792060723688 },
            { latitude: 37.74114790433078, longitude: 126.7770242067987 },
            { latitude: 37.74114790433078, longitude: 126.8770242067987 },
            { latitude: 37.74114790433078, longitude: 126.9770242067987 },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            "#7F0000",
            "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
            "#B24112",
            "#E5845C",
            "#238C23",
            "#7F0000",
          ]}
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  polyline: {
    zIndex: 1000,
  },
});

export default MapComponents;
