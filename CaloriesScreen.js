import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  page_title_text: {
    margin: 5,
    padding: 5,
    fontSize: 20
  },
  page_title_text_num: {
    margin: 5,
    padding: 5,
    fontSize: 50,
    textAlign: "center"
  },
  page_icon: {
    margin: 5
  }
});

export default class CaloriesScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const out = params ? params.login : null,
      oneM = params ? params.oneM : null,
      allM = params ? params.allM : null;
    return (
      <View style={styles.container}>
        <Image source={require("./img/Logo.png")} style={styles.page_icon} />
        <Text style={styles.page_title_text}>{out.CNAME} 你好</Text>
        <View
          style={{
            flex: 2,
            margin: 50,
            padding: 20,
            backgroundColor: "#999",
            color: "#fff",
            borderRadius: 15,
            alignItems: "stretch"
          }}
        >
          <Text style={styles.page_title_text}>
            {
              new Date()
                .toJSON()
                .split("T")[0]
                .split("-")[1]
            }月累積卡路里
          </Text>
          <Text style={styles.page_title_text_num}>{oneM}</Text>
        </View>
        <View style={{ flex: 2 }} />
      </View>
    );
  }
}
