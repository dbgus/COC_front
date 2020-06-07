import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import { AsyncStorage } from "react-native";
import * as Location from "expo-location";
import {
  saveMyLoactionReqeust,
  postMyLoactionRequest,
} from "../../reducer/Reducer/Location";
import Hamburger from "../Hamburger";

const MapContainer = () => {
  const dispatch = useDispatch();
  const [once, setOnce] = useState(false);

  useEffect(() => {
    const _GPSPermisson = async () => {
      try {
        await Location.requestPermissionsAsync();
      } catch {}
    };
    _GPSPermisson();
  }, []);
  useEffect(() => {
    const getLocation = async () => {
      try {
        const loc = await Location.getCurrentPositionAsync();
        const token = await AsyncStorage.getItem("token");
        const data = {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          token,
        };
        if (!once) {
          dispatch(postMyLoactionRequest(data));
          setOnce(true);
        }
        // console.log(loc.coords.speed)
        if (loc.coords.speed !== -1) {
          dispatch(postMyLoactionRequest(data));
        }
      } catch {
        // console.log("failed");
      }
    };

    const currentLocRequest = setInterval(() => {
      getLocation();
    }, 2000);
    return () => clearInterval(currentLocRequest);
  }, []);
  const lata = useSelector((state) => state.Location.location.currentLoc);
  const polyLine = useSelector((state) => state.Location.location.polyLine);

  return (
    <View style={styles.container}>
      <Hamburger />
      {lata ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lata.latitude,
            longitude: lata.longitude,
            latitudeDelta: 0.0015,
            longitudeDelta: 0.0015,
          }}
        >
          <Marker
            coordinate={{ latitude: lata.latitude, longitude: lata.longitude }}
            title="this is a marker"
            description="this is a marker example"
          />
          {/* my polyline */}
          {polyLine.length > 0 ? (
            <Polyline
              coordinates={
                [...polyLine]
                // { latitude: 37.483344119596154, longitude: 126.9792060723688 },
                // { latitude: 37.74114790433078, longitude: 126.7770242067987 },
                // { latitude: 37.74114790433078, longitude: 126.8770242067987 },
                // { latitude: 37.74114790433078, longitude: 126.9770242067987 },
              }
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={["green"]}
              strokeWidth={2}
            />
          ) : null}
        </MapView>
      ) : (
        <Text>loading</Text>
      )}
    </View>
  );
};

export default MapContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    zIndex: 10,
  },
  map: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
