import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { createStore, applyMiddleware } from "redux";

import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { savePushTokenRequest, savePushToken } from "./reducer/Reducer/Auth";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import { Provider, useDispatch } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer/index";
import CollapsibleList from "react-native-collapsible-list";

import MapContainer from "./containers/Map/MapContainer";
import GiveContainer from "./containers/give/GiveContainer";
import AuthContainer from "./containers/auth/Auth";
import Hamburger from "./containers/Hamburger";
import up from "./image/up-arrow.png";
import down from "./image/down-arrow.png";

const Collapsible = () => {
  return (
    <CollapsibleList
      numberOfVisibleItems={0}
      wrapperStyle={styles.wrapperCollapsibleList}
      buttonPosition="top"
      buttonContent={
        <View style={styles.button}>
          <Text style={styles.navFont}>마이페이지</Text>
        </View>
      }
    >
      <View style={styles.collapsibleItem1}>
        <Text style={styles.navFont}>프로필 수정</Text>
      </View>
      <View style={styles.collapsibleItem}>
        <Text style={styles.navFont}>알림 설정</Text>
      </View>
      <View style={styles.collapsibleItem}>
        <Text style={styles.navFont}>개인정보 및 데이터</Text>
      </View>
    </CollapsibleList>
  );
};
const Give = () => {
  return (
    <CollapsibleList
      numberOfVisibleItems={0}
      wrapperStyle={styles.wrapperCollapsibleList}
      buttonPosition="top"
      buttonContent={
        <View style={styles.button}>
          <Text style={styles.navFont}>기부</Text>
        </View>
      }
    >
      <View style={styles.collapsibleItem1}>
        <Text style={styles.navFont}>기부하기</Text>
      </View>
      <View style={styles.collapsibleItem}>
        <Text style={styles.navFont}>기부내역</Text>
      </View>
    </CollapsibleList>
  );
};
const Setting = () => {
  return (
    <CollapsibleList
      numberOfVisibleItems={0}
      // wrapperStyle={styles.wrapperCollapsibleList}
      buttonPosition="top"
      buttonContent={
        <View style={styles.button}>
          <Text style={styles.navFont}>마이페이지</Text>
        </View>
      }
    >
      <View style={styles.collapsibleItem1}>
        <Text style={styles.navFont}>이용약관</Text>
      </View>
      <View style={styles.collapsibleItem}>
        <Text style={styles.navFont}>개인정보 처리방침</Text>
      </View>
      <View style={styles.collapsibleItem}>
        <Text style={styles.navFont}>반경처리</Text>
      </View>
    </CollapsibleList>
  );
};
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.collapBox}>
        <DrawerItem label={(scene) => <Collapsible />} />
        <DrawerItem label={(scene) => <Give />} />
        <DrawerItem label={(scene) => <Setting />} />
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerBox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPushToken = async () => {
      if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(
          Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Permissions.askAsync(
            Permissions.NOTIFICATIONS
          );
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Failed to get push token for push notification!");
          return;
        }
        const token = await Notifications.getExpoPushTokenAsync();
        // console.log(token);
        dispatch(savePushTokenRequest(token))
       
      } else {
        alert("Must use physical device for Push Notifications");
      }

      if (Platform.OS === "android") {
        Notifications.createChannelAndroidAsync("default", {
          name: "default",
          sound: true,
          priority: "max",
          vibrate: [0, 250, 250, 250],
        });
      }
    };

    getPushToken();
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName="give"
      drawerPosition={"right"}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="map" component={MapContainer} />
      <Drawer.Screen name="auth" component={AuthContainer} />
      <Drawer.Screen name="give" component={GiveContainer} />
    </Drawer.Navigator>
  );
};
const Stack = createStackNavigator();
const StackBox = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="map" component={MapContainer} /> */}
    </Stack.Navigator>
  );
};

const App = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerBox />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  wrapperCollapsibleList: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 18,
  },
  collapsibleItem: {
    flex: 1,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 18,
  },
  collapsibleItem1: {
    flex: 1,
    marginTop: 10,

    borderColor: "#CCC",
    padding: 10,
  },
  navFont: {
    fontSize: 18,
  },
  collapBox: {
    marginTop: 50,
  },
});

export default App;
