import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AsyncStorage } from "react-native";

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
        dispatch(AutoLoginRequest(token));
        navigation.navigate("map");
      }
    };
    getToken();
  }, [token]);

  return (
    <View>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={(Text) => {
          setId(Text);
        }}
      />
      <TextInput
        style={styles.input}
        value={pw}
        onChangeText={(Text) => {
          setPw(Text);
        }}
        secureTextEntry={true}
      />
      <Button title="로그인" onPress={() => dispatch(loginRequest(id, pw))} />
      <Text>{loginStatus === "success" ? "login" : "not"}</Text>
      <Button title="로그아웃" onPress={() => dispatch(logoutRequest())} />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderWidth: 1,
    flex: 1,
  },
});
