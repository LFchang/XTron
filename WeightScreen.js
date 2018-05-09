import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container_main: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  button_main: {
    margin: 8,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  main_icon: {
    margin: 10,
    width: 65,
    height: 65
  },
  main_icon_text: {
    color: "#fff",
    fontSize: 20
  },
  page_title_text: {
    margin: 5,
    padding: 5,
    fontSize: 20
  },
  page_icon: {
    margin: 5
  }
});

export default class WeightScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const out = params ? params.login : null;
    return (
      <View style={styles.container}>
        <Image source={require("./img/Logo.png")} style={styles.page_icon} />
        <Text style={styles.page_title_text}>{out.CNAME} 你好</Text>
        <View style={styles.container_main}>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 1,
                backgroundColor: "#FF6A4D"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("WeightDetials", {
                login: out,
                pagetitle: "滑輪繩索"
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/Weight/Cable.png")}
            />
            <Text style={styles.main_icon_text}>滑輪繩索</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 1,
                backgroundColor: "#5BD3F4"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("WeightDetials", {
                login: out,
                pagetitle: "啞鈴"
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/Weight/Dumbbell.png")}
            />
            <Text style={styles.main_icon_text}>啞鈴</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_main}>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 3,
                alignItems: "flex-start",
                backgroundColor: "#FFAE43"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("WeightDetials", {
                login: out,
                pagetitle: "掛槓片式器材"
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/Weight/FREE_WEIGHT.png")}
            />
            <Text style={styles.main_icon_text}>掛槓片式器材</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_main}>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 1,
                backgroundColor: "#5AFFEB"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("WeightDetials", {
                login: out,
                pagetitle: "史密斯"
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/Weight/Smith.png")}
            />
            <Text style={[styles.main_icon_text, { color: "#999" }]}>
              史密斯
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 1,
                backgroundColor: "#C25AFF"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("WeightDetials", {
                login: out,
                pagetitle: "機械式器材"
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/Weight/Mechanical.png")}
            />
            <Text style={styles.main_icon_text}>機械式器材</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
