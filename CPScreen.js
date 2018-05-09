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

export default class CPScreen extends Component {
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
              this.props.navigation.navigate("CPDetials", {
                login: out,
                pagetitle: "健身車",
                cptype: "Bike"
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/man-on-motorbike.png")}
            />
            <Text style={styles.main_icon_text}>健身車</Text>
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
              this.props.navigation.navigate("CPDetials", {
                login: out,
                pagetitle: "跑步機",
                cptype: "Treadmill"
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/running-treadmill.png")}
            />
            <Text style={styles.main_icon_text}>跑步機</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_main} />
      </View>
    );
  }
}
