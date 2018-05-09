import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Card from "./Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class xtronboardScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    //const { params } = this.props.navigation.state;
    //const out = params ? params.login : null;
    return (
      <View style={styles.container}>
        <Card
          title={"別在家自己做仰臥起坐"}
          image={require("./img/card/45175313_xxl.jpg")}
          subTitle={
            "美國維吉尼亞大學研究：「無其他外力因素狀況下，人類起碼要做25萬個仰臥起坐，才能減去半公斤脂肪」"
          }
          imagePosition={"right"}
          backgroundColor={"#5BD3F4"}
          color={"#fff"}
        />
        <Card
          title={"小時候就做過的健身運動- 🍀跳繩🍀"}
          image={require("./img/card/22046909_1966217470372443_9222216502313747061_n.jpg")}
          subTitle={"今天小編來介紹大多數人小時候就做過的健身運動- 🍀跳繩 🍀"}
          imagePosition={"left"}
          backgroundColor={"#FF6A4D"}
          color={"#fff"}
        />
      </View>
    );
  }
}
