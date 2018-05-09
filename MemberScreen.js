import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view"; //0.8.0

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
var Dwidth = Dimensions.get("window").width;

export default class MemberScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    const out = params ? params.login : null;
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.container_main,
            {
              backgroundColor: "#FF6A4D",
              flexDirection: "flex",
              justifyContent: "space-evenly",
              width: Dwidth * 0.9,
              marginBottom: 10,
              position: "relative"
            }
          ]}
        >
          <View
            style={[
              styles.container,
              {
                flex: 1,
                position: "relative"
              }
            ]}
          >
            <Image
              source={{
                uri: "http://xcode.dyndns.info:8033/MEMB_PHOTO/{0}.jpg".replace(
                  "{0}",
                  out.Member_ID
                )
              }}
              style={{
                borderRadius: 15,
                width: 150,
                height: 200
              }}
            />
            <Text
              style={[
                styles.page_text_detail_left,
                {
                  position: "absolute",
                  bottom: 10,
                  right: 10
                }
              ]}
            >
              {out.CNAME}
            </Text>
          </View>
          <ScrollableTabView
            style={{ flex: 2 }}
            initialPage={0}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <ScrollView tabLabel="個人資料">
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>性別</Text>
                <Text style={styles.page_text_detail_right}>??</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>生日</Text>
                <Text style={styles.page_text_detail_right}>
                  {out.Birthday}
                </Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>身高</Text>
                <Text style={styles.page_text_detail_right}>__ cm</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>體重</Text>
                <Text style={styles.page_text_detail_right}>__ kg</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>血型</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>體脂肪</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>肌肉量</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>BMI</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>安靜心率</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
            </ScrollView>
            <ScrollView tabLabel="會籍">
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>會籍編號</Text>
                <Text style={styles.page_text_detail_right}>
                  {out.Member_ID}
                </Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>有效日期</Text>
                <Text style={styles.page_text_detail_right}>
                  {out.MemberDate}
                </Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>專屬顧問</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>客服留言</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
              <View style={styles.page_text}>
                <Text style={styles.page_text_detail_left}>預約私教</Text>
                <Text style={styles.page_text_detail_right}>__</Text>
              </View>
            </ScrollView>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}
