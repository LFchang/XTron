import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation"; // 1.4.0

import IntroScreen from "./IntroScreen";
import LoginScreen from "./LoginScreen";
import MainScreen from "./MainScreen";
import MemberValueScreen from "./MemberValueScreen";
import MemberScreen from "./MemberScreen";
import WeightScreen from "./WeightScreen";
import WeightDetialsScreen from "./WeightDetialsScreen";
import CaloriesScreen from "./CaloriesScreen";
import CPScreen from "./CPScreen";
import CPDetialsScreen from "./CPDetialsScreen";
import xtronboardScreen from "./xtronboardScreen";

const RootStack = StackNavigator(
  {
    Intro: {
      //廣告頁
      screen: IntroScreen,
      navigationOptions: ({ navigation }) => ({
        title: "X-TRON 新創智慧健身"
      })
    },
    Login: {
      //登入
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        title: "X-TRON 新創智慧健身"
      })
    },
    Main: {
      //功能主頁
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        title: "X-TRON 新創智慧健身",
        headerLeft: null,
        headerRight: (
          <TouchableOpacity onPress={() => alert("QRCode功能未開放")}>
            <Image
              source={require("./img/qr-code.png")}
              style={{ margin: 5 }}
            />
          </TouchableOpacity>
        )
      })
    },
    MemberValue: {
      //運動數據
      screen: MemberValueScreen,
      navigationOptions: ({ navigation }) => ({
        title: "運動數據"
      })
    },
    Member: {
      //會員資料
      screen: MemberScreen,
      navigationOptions: ({ navigation }) => ({
        title: "會員資料"
      })
    },
    Weight: {
      //重量訓練
      screen: WeightScreen,
      navigationOptions: ({ navigation }) => ({
        title: "重量訓練"
      })
    },
    WeightDetials: {
      //重量訓練詳細資料
      screen: WeightDetialsScreen
    },
    Calories: {
      //卡路里平台
      screen: CaloriesScreen,
      navigationOptions: ({ navigation }) => ({
        title: "卡路里平台"
      })
    },
    CP: {
      //心肺運動
      screen: CPScreen,
      navigationOptions: ({ navigation }) => ({
        title: "心肺運動"
      })
    },
    CPDetials: {
      //心肺運動詳細資料
      screen: CPDetialsScreen
    },
    board: {
      //心肺運動
      screen: xtronboardScreen,
      navigationOptions: ({ navigation }) => ({
        title: "新創公佈欄"
      })
    }
  },
  {
    initialRouteName: "Intro"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
