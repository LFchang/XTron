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

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      oneM: "",
      allM: ""
    };
  }
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
                flex: 2,
                backgroundColor: "#FF6A4D"
              }
            ]}
            onPress={() =>
              this.props.navigation.navigate("MemberValue", {
                login: out
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/dumbbell.png")}
            />
            <Text style={styles.main_icon_text}>運動數據</Text>
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
              this.props.navigation.navigate("Member", {
                login: out
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/folder.png")}
            />
            <Text style={styles.main_icon_text}>會員資料</Text>
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
              this.props.navigation.navigate("board", {
                login: out
              })
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/write-board.png")}
            />
            <Text style={styles.main_icon_text}>新創公佈欄</Text>
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
            onPress={
              () => {
                alert("功能建置中！");
              }
              /*this.props.navigation.navigate("Member", {
                  login: out
                })*/
            }
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/hand-holding-up-a-book.png")}
            />
            <Text style={[styles.main_icon_text, { color: "#999" }]}>
              新創課程
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button_main,
              {
                flex: 2,
                backgroundColor: "#C25AFF"
              }
            ]}
            onPress={() => {
              var oneM = 0,
                allM = 0;
              //....................取當月.......................................
              fetch(
                "http://xcode.dyndns.info:8035/MemberApi.asmx/MemberCPMonthRangeAllStatistics",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=utf-8"
                  },
                  body: JSON.stringify({
                    telnumber: out.TEL,
                    code: (out.ID_NO + "").substring(6, 10),
                    DateE: new Date(
                      new Date(
                        new Date().setMonth(new Date().getMonth() + 1)
                      ).setDate(1)
                    )
                      .toJSON()
                      .split("T")[0]
                      .replace(/-/g, "/"),
                    count: "2",
                    layer: "2"
                  }),
                  cache: "no-cache"
                }
              )
                .then(res => res.json())
                .then(resJ => {
                  var val = JSON.parse(resJ.d),
                    valD = JSON.parse(val.Data);
                  for (i in valD) {
                    if (valD[i].Way == "Fitness Machine")
                      oneM += parseInt(valD[i].Calories, 10);
                  }
                  //this.setState({ oneM: oneM });
                  this.props.navigation.navigate("Calories", {
                    login: out,
                    //oneM: this.state.oneM,
                    oneM: oneM,
                    allM: 0 //this.state.allM
                  });
                })
                .catch(error => {
                  alert(error);
                });
              //....................跑步機............................
              /*
              fetch(
                "http://210.68.95.241:8035/MemberApi.asmx/MemberCPstatistics",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=utf-8"
                  },
                  body: JSON.stringify({
                    telnumber: tel,
                    code: id4,
                    dat1: new Date(
                      new Date().setFullYear(new Date().getFullYear() - 10)
                    )
                      .toJSON()
                      .split("T")[0]
                      .replace(/-/g, "/"),
                    dat2: new Date()
                      .toJSON()
                      .split("T")[0]
                      .replace(/-/g, "/"),
                    cls: "CP",
                    way: "Fitness Machine",
                    eqp: "Treadmill"
                  }),
                  cache: "no-cache"
                }
              )
                .then(res => res.json())
                .then(resJ => {
                  var val = JSON.parse(resJ.d),
                    valD = JSON.parse(val.Data);
                  allM += parseInt(valD[0].Calories, 10);
                  //......................腳踏車..................................
                  fetch(
                    "http://210.68.95.241:8035/MemberApi.asmx/MemberCPstatistics",
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=utf-8"
                      },
                      body: JSON.stringify({
                        telnumber: tel,
                        code: id4,
                        dat1: new Date(
                          new Date().setFullYear(new Date().getFullYear() - 10)
                        )
                          .toJSON()
                          .split("T")[0]
                          .replace(/-/g, "/"),
                        dat2: new Date()
                          .toJSON()
                          .split("T")[0]
                          .replace(/-/g, "/"),
                        cls: "CP",
                        way: "Fitness Machine",
                        eqp: "Bike"
                      }),
                      cache: "no-cache"
                    }
                  )
                    .then(res => res.json())
                    .then(resJ => {
                      var val = JSON.parse(resJ.d),
                        valD = JSON.parse(val.Data);
                      allM += parseInt(valD[0].Calories, 10);
                      this.setState({ allM: allM });
                      this.props.navigation.navigate("Calories", {
                        login: out,
                        oneM: this.state.oneM,
                        allM: this.state.allM
                      });
                    })
                    .catch(error => {
                      alert(error);
                    });
                })
                .catch(error => {
                  alert(error);
                });
                */
            }}
          >
            <Image
              style={styles.main_icon}
              source={require("./img/icon/fire-flames.png")}
            />
            <Text style={styles.main_icon_text}>卡路里平台</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
