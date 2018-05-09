import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";

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
  bottmContainer: {
    height: 60,
    flexDirection: "row"
  },
  background: {
    height: 700,
    width: 500,
    position: "absolute"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  },
  style_input: {
    backgroundColor: "#cccccccc",
    marginTop: 20,
    borderRadius: 15,
    borderColor: "rgba(118, 218, 246, 1)",
    borderWidth: 1,
    height: 40,
    width: 250
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
  },
  page_text: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    height: 30,
    //padding: 5,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  page_text_detail_left: {
    color: "#fff",
    fontSize: 24,
    flex: 1
  },
  page_text_detail_right: {
    color: "#ccc",
    fontSize: 24,
    textAlign: "right",
    flex: 2
  }
});
export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      tel: "",
      id4: ""
    };
  }
  render() {
    return (
      <ImageBackground
        style={styles.container}
        imageStyle={styles.background}
        source={require("./img/background.jpg")}
      >
        <View style={styles.container}>
          <Image
            source={require("./img/Logo.png")}
            style={{
              width: 250
              /*shadowColor: "#ccc",
                shadowRadius: 5,
                shadowOpacity: 1*/
            }}
          />
          <Text
            style={{
              backgroundColor: "transparent",
              color: "#066",
              //fontWeight: 200,
              fontSize: 36,
              padding: 20,
              textShadowColor: "#ccc",
              textShadowRadius: 5,
              textShadowOffset: { width: 2, height: 2 }
            }}
          >
            新創智慧健身
          </Text>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.style_input}
            keyboardType="phone-pad"
            returnKeyType="done"
            placeholder="Phone Number"
            numberOfLines={1}
            //autoFocus={true}
            maxLength={10}
            underlineColorAndroid={"transparent"}
            textAlign="center"
            enablesReturnKeyAutomatically={true}
            onChangeText={tel => this.setState({ tel })}
            value={this.state.tel}
            //onFocus={() => this.onFocus()}
            //onBlur={() => this.onBlur()}
          />
          <TextInput
            style={styles.style_input}
            keyboardType="phone-pad"
            returnKeyType="done"
            placeholder="Password"
            numberOfLines={1}
            maxLength={4}
            underlineColorAndroid={"transparent"}
            secureTextEntry={true}
            textAlign="center"
            onChangeText={id4 => this.setState({ id4 })}
            value={this.state.id4}
            //onFocus={() => this.onFocus()}
            //onBlur={() => this.onBlur()}
          />
        </View>
        <View style={styles.bottmContainer}>
          <TouchableOpacity
            style={[styles.container, { backgroundColor: "#6495ed" }]}
            onPress={() =>
              fetch("http://xcode.dyndns.info:8010/equips.svc/Auth", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  id4: this.state.id4,
                  tel: this.state.tel
                }),
                cache: "no-cache"
              })
                .then(res => res.json())
                .then(resJ => {
                  if (JSON.parse(resJ.d).length > 0) {
                    var out = JSON.parse(resJ.d)[0];
                    Alert.alert(
                      "登入成功",
                      out.CNAME + " 您好！",
                      [
                        {
                          text: "取消",
                          onPress: () => null,
                          style: "cancel"
                        },
                        {
                          text: "進入系統",
                          onPress: () =>
                            this.props.navigation.navigate("Main", {
                              login: out
                            })
                        }
                      ],
                      { cancelable: false }
                    );
                    /*alert(
                        "會員編號\n" +
                          out.Member_ID +
                          "\n會員有效日期\n" +
                          out.MemberDate +
                          "\n身分證字號\n" +
                          out.ID_NO +
                          "\n會員生日\n" +
                          out.Birthday +
                          "\nE-mail\n" +
                          out.E_mail +
                          "\n地址\n" +
                          out.Address +
                          "\n方案編號\n" +
                          out.Contract_ID +
                          "\n方案名稱\n" +
                          out.Contract_NAME
                      );*/
                    //AsyncStorage.setItem("@app:session", out);
                  } else alert("帳密錯誤！");
                })
                .catch(error => {
                  alert(error);
                })
            }
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
