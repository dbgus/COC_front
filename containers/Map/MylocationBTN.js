import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Location from "../../image/myLocation.gif";

const MylocationBTN = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../image/myLocation.gif")}
      />
    </View>
  );
};

export default MylocationBTN;

const styles = StyleSheet.create({
    container: {
        // width: Dimensions.get("window").width,
        width: 50,
        height: 50,
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
      image: {
        flex: 1,
        right: 20,
        width: 70,
        top: 700,
        alignSelf: "flex-end",
      },
});
