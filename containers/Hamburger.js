import React from "react";
import { Icon, Header } from "native-base";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {  DrawerActions } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

const Hamburger = () => {
   const navigation = useNavigation();;
  return (
    <View style={styles.container}>
      <Icon
        style={styles.Hamburger}
        name="menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  );
};

export default Hamburger;

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get("window").width,
    width: 40,
    height: 40,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "absolute",
    top: 0,
    // left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  Hamburger: {
    flex: 1,
    top: 50,
    right: 30,
    alignSelf: "flex-end",
  },
});
