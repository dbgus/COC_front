import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import { AsyncStorage } from "react-native";
import * as Location from "expo-location";
import {
  saveMyLoactionReqeust,
  postMyLoactionRequest,
  getConfirmerRequest,
} from "../../reducer/Reducer/Location";
import Hamburger from "../Hamburger";
import MyLocationBTN from "./MylocationBTN";

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
  // const pushToken = useSelector((state) => state.Auth.pushToken);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const option = {
          accuracy: 6,
        };
        const loc = await Location.getCurrentPositionAsync(option);
        const token = await AsyncStorage.getItem("token");

        const data = {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          token,
        };
        dispatch(postMyLoactionRequest(data));
      } catch {
        console.log("failed");
      }
    };
    const getConfirmer = async () => {
      const loc = await Location.getCurrentPositionAsync();
      const token = await AsyncStorage.getItem("token");
      const pushToken = await AsyncStorage.getItem("pushToken");
      try {
        const data = {
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          token,
          pushToken,
        };
        dispatch(getConfirmerRequest(data));
      } catch {
        console.log("fail");
      }
    };
    const currentLocRequest = setInterval(() => {
      getLocation();
    }, 3000);
    const getConfirmerInterval = setInterval(() => {
      getConfirmer();
    }, 3000);
    return () => {
      clearInterval(currentLocRequest);
      clearInterval(getConfirmerInterval);
    };
  }, []);
  const lata = useSelector((state) => state.Location.location.currentLoc);
  const polyLine = useSelector((state) => state.Location.location.polyLine);
  const confirmer = useSelector((state) => state.Location.location.confirmer);
  return (
    <View style={styles.container}>
      <Hamburger />
      <MyLocationBTN style={styles.location} />
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
          <Polyline
            coordinates={[
              {
                latitude: 37.484315,
                longitude: 126.977035,
              },
              {
                latitude: 37.485111,
                longitude: 126.978033,
              },
              {
                latitude: 37.484971,
                longitude: 126.978891,
              },
              {
                latitude: 37.484971,
                longitude: 126.978891,
              },
              {
                latitude: 37.484391,
                longitude: 126.97918,
              },
              {
                latitude: 37.484272,
                longitude: 126.979534,
              },
              {
                latitude: 37.484149,
                longitude: 126.980559,
              },
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={["red"]}
            strokeWidth={5}
          />
          <Polyline
            coordinates={[
              {
                latitude: 37.482831,
                longitude: 126.978775,
              },
              {
                latitude: 37.482784,
                longitude: 126.980508,
              },
              {
                latitude: 37.482744,
                longitude: 126.981813,
              },
              {
                latitude: 37.48034,
                longitude: 126.981724,
              },
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={["red"]}
            strokeWidth={5}
          />
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
  location: {
    zIndex: 100,
  },
});
