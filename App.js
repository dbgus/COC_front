import React, {useEffect, useState}from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer/index";

import MapContainer from "./containers/Map/MapContainer";
import GiveContainer from "./containers/give/GiveContainer";
import AUthContainer from "./containers/auth/Auth";

const App = () => {
  const Stack = createStackNavigator();
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="auth"
          // screenOptions={{
          //   headerBackground: () => (

          //   ),
          // }}
        >
          <Stack.Screen
            name="map"
            component={MapContainer}
            options={{
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="Info"
                  color="#00cc00"
                />
              ),
            }}
          />
          <Stack.Screen name="auth" component={AUthContainer} />
          <Stack.Screen name="give" component={GiveContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

