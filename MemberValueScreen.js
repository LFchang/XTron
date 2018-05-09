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

export default class MemberValueScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const out = params ? params.login : null,
      tel = params ? params.tel : null,
      id4 = params ? params.id4 : null;
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
            onPress={
              () => {
                alert("功能建置中！");
              }
              /*
                this.props.navigation.navigate("MemberValue", {
                  phone: "0955000111"
                })*/
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/scale.png")}
            />
            <Text style={styles.main_icon_text}>Inbody</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 2,
                backgroundColor: "#5BD3F4"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("CP", {
                login: out
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/running-on-a-treadmill.png")}
            />
            <Text style={styles.main_icon_text}>心肺運動</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_main}>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 2,
                backgroundColor: "#FFAE43"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("Weight", {
                login: out
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/male-gymnast-flexing-arms.png")}
            />
            <Text style={[styles.main_icon_text]}>重量訓練</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 1,
                backgroundColor: "#C25AFF"
              }
            ]}
            onPress={
              () => {
                alert("功能建置中！");
              }
              /*
                this.props.navigation.navigate("Weight", {
                  phone: "0955000111"
                })*/
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/lifeline-in-a-heart-outline.png")}
            />
            <Text style={styles.main_icon_text}>心率/血壓</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
