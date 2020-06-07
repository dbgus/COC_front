import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStore, applyMiddleware } from "redux";

import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer/index";

import MapContainer from "./containers/Map/MapContainer";
import GiveContainer from "./containers/give/GiveContainer";
import AuthContainer from "./containers/auth/Auth";
import Hamburger from './containers/Hamburger'

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text>asdasd</Text>
      {/* <DrawerItemList {...props} /> */}
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </DrawerContentScrollView>
  );
}


const App = () => {
  const Drawer = createDrawerNavigator();
  const store = createStore(reducer, applyMiddleware(thunk));
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
        drawerCongtent={props => <CustomDrawerContent {...props} />}
        initialRouteName="auth"
          drawerPosition={"right"}
          // headerMode="false"
        >
          <Drawer.Screen name="map" component={MapContainer} />
          <Drawer.Screen name="auth" component={AuthContainer} />
          <Drawer.Screen name="give" component={GiveContainer} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
