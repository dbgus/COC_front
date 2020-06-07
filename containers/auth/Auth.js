import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AsyncStorage, Image } from "react-native";

import {
  loginRequest,
  AutoLoginRequest,
  logoutRequest,
} from "../../reducer/Reducer/Auth";

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const token = useSelector((state) => state.Auth.token);
  const loginStatus = useSelector((state) => state.Auth.status);
  useEffect(() => {
    const getToken = async () => {
      if (await AsyncStorage.getItem("token")) {
        // dispatch(AutoLoginRequest(token));
        // navigation.navigate("map");
      }
    };
    getToken();
  }, [token]);

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../../image/icon.png")} />
      <View style={styles.inputView}>
        <View style={styles.inputDiv}>
          <Text style={styles.label1}>ID</Text>
          <TextInput
            style={styles.input}
            value={id}
            onChangeText={(Text) => {
              setId(Text);
            }}
          />
        </View>
        <View style={styles.inputDiv}>
          <Text style={styles.label}>PW</Text>
          <TextInput
            style={styles.input}
            value={pw}
            onChangeText={(Text) => {
              setPw(Text);
            }}
            secureTextEntry={true}
          />
        </View>
      </View>

      <Button title="로그인" onPress={() => dispatch(loginRequest(id, pw))} />
      <Button title="로그아웃" onPress={() => dispatch(logoutRequest())} />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  input: {
    height: 30,
    marginBottom: 30,
    width: 200,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inputView: {
    marginTop: -100,
  },
  label: {
    position: "absolute",
    marginLeft: 42,
    fontSize: 23,
    fontWeight: "bold",
  },
  label1: {
    position: "absolute",
    marginLeft: 52,
    fontSize: 23,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 350,
    height: 350,
    marginTop: -100,
  },
});
