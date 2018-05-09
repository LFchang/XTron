import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider"; //0.2.4

var Dwidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  Introimage: { width: Dwidth },
  IntroTitle: {
    color: "#fff",
    position: "absolute",
    fontSize: 26
  },
  IntroText: {
    color: "#fff",
    position: "absolute"
  }
});

export default props => (
  <AppIntroSlider
    slides={[
      {
        key: "slides01",
        title: "新創智慧健身",
        titleStyle: styles.IntroTitle,
        text: "讓新創記錄著你的每滴汗水",
        textStyle: styles.IntroText,
        image: require("./img/01.jpg"),
        imageStyle: styles.Introimage,
        backgroundColor: "#50514f"
      },
      {
        key: "slides02",
        title: "新創智慧健身",
        titleStyle: styles.IntroTitle,
        text: "打造一座專屬你的數位健身房",
        textStyle: styles.IntroText,
        image: require("./img/02.jpg"),
        imageStyle: styles.Introimage,
        backgroundColor: "#f25f5c"
      },
      {
        key: "slides03",
        title: "新創智慧健身",
        titleStyle: styles.IntroTitle,
        text: "找出你的健身DNA",
        textStyle: styles.IntroText,
        image: require("./img/03.jpg"),
        imageStyle: styles.Introimage,
        backgroundColor: "#ffe066"
      },
      {
        key: "slides04",
        title: "新創智慧健身",
        titleStyle: styles.IntroTitle,
        text: "多元化健身運動記錄",
        textStyle: styles.IntroText,
        image: require("./img/04.jpg"),
        imageStyle: styles.Introimage,
        backgroundColor: "#247ba0"
      },
      {
        key: "slides05",
        title: "新創智慧健身",
        titleStyle: styles.IntroTitle,
        text: "專業運動數據分析",
        textStyle: styles.IntroText,
        image: require("./img/05.jpg"),
        imageStyle: styles.Introimage,
        backgroundColor: "#70c1b3"
      }
    ]}
    onDone={() => props.navigation.navigate("Login")}
    onSkip={() => props.navigation.navigate("Login")}
    showSkipButton={true}
    bottomButton
  />
);
