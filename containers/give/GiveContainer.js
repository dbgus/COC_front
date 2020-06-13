import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  ScrollView,
  Switch,
} from "react-native";
import { Icon } from "native-base";

import Hamburger from "../Hamburger";

const GiveContainer = () => {
  const [isEnabled, setisEnabled] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>둘러보기 </Text>
      </View>
      <ScrollView>
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/10.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>사당 A식당</Text>
            <Text style={styles.content}>사당역에 위치한 작은 음식점</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/20.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>낙성대 B카페</Text>
            <Text style={styles.content}>낙성대에 위치한 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/30.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>방배 C체육관</Text>
            <Text style={styles.content}>방배동에 위치한 미용실</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/40.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>동작 D카페</Text>
            <Text style={styles.content}>동작에 위치한 작은 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/10.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>사당 A식당</Text>
            <Text style={styles.content}>사당역에 위치한 작은 음식점</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/20.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>낙성대 B카페</Text>
            <Text style={styles.content}>낙성대에 위치한 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/30.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>방배 C체육관</Text>
            <Text style={styles.content}>방배동에 위치한 체육관</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/40.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>동작 D카페</Text>
            <Text style={styles.content}>동작에 위치한 작은 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/40.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>동작 D카페</Text>
            <Text style={styles.content}>동작에 위치한 작은 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/40.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>동작 D카페</Text>
            <Text style={styles.content}>동작에 위치한 작은 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/40.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>동작 D카페</Text>
            <Text style={styles.content}>동작에 위치한 작은 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/40.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>동작 D카페</Text>
            <Text style={styles.content}>동작에 위치한 작은 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.shopCard}>
          <Image style={styles.image} source={require("../../image/40.jpeg")} />
          <View style={styles.subtitleZone}>
            <Text style={styles.title}>동작 D카페</Text>
            <Text style={styles.content}>동작에 위치한 작은 카페</Text>
          </View>
        </View>
        <View style={styles.line} />
      </ScrollView>
      <View style={styles.infoBox}>
        <Text style={styles.infoTtile}>내 주변 소상공인</Text>
        <View style={styles.line} />
        <View style={styles.autoGive}>
          <Text>자동 기부</Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#767577", true: "skyblue" }}
            thumbColor={isEnabled ? "white" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setisEnabled(!isEnabled)}
            value={isEnabled}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.money}>나의 예치금: </Text>
          <Text style={styles.money}>100,000원 </Text>
        </View>
        <View style={styles.breakdown}>
          <Text>기부 내역 ></Text>
        </View>
        <View style={styles.precautionBox}>
          <Text style={styles.precaution}>기부 유의사항 ></Text>
          <Text style={styles.precaution}>자동 기부 안내 ></Text>
        </View>
      </View>
    </View>
  );
};

export default GiveContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    alignItems: "center",
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
  },
  shopCard: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    width: Dimensions.get("window").width - 250,
    height: 80,
  },
  subtitleZone: {
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
  },
  content: {
    marginTop: 10,
  },
  BTN: {
    marginTop: 10,
  },
  line: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  infoBox: {
    width: Dimensions.get("window").width,
    height: 230,
    backgroundColor: "white",
    position: "absolute",
    padding: 10,
    flex: 1,
    borderTopColor: "#737373",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopWidth: 3,
    bottom: 0,
    zIndex: 10,
  },
  infoTtile: {
    fontSize: 16,
    width: 200,
  },
  autoGive: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 2,
    right: 10,
  },
  switch: {
    marginLeft: 10,
  },
  userInfo: {
    flexDirection: "row",
  },
  money: {
    fontSize: 15,
  },
  precautionBox: {
    position: "absolute",
    bottom: 30,
    right: 15,
  },
  breakdown: {
    marginTop: 20,
  },
  precaution: {
    fontSize: 15,
    color: "gray",
    marginBottom: 10,
  },
  Hamburger: {
    position: "absolute",
    right: 15,
    alignSelf: "flex-end",
    marginTop: -3,
  },
});
