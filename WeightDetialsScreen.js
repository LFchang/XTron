import React, { Component } from "react";
import { View, Text, Picker, ScrollView, ListView } from "react-native";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view"; //0.8.0
import Echarts from "native-echarts"; //0.4.0

export default class WeightDetialsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.pagetitle : "重量訓練"
    };
  };
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      days: "",
      weeks: "",
      months: "",
      dataSource: ds.cloneWithRows([
        { deviceName: "繩索上胸推舉訓練", weight: "37.5", counter: "15" },
        { deviceName: "繩索上胸推舉訓練", weight: "22.5", counter: "12" },
        { deviceName: "繩索上胸推舉訓練", weight: "35.5", counter: "15" },
        { deviceName: "繩索上胸推舉訓練", weight: "20.5", counter: "20" },
        { deviceName: "繩索上胸推舉訓練", weight: "15.5", counter: "25" }
      ])
    };
    _renderRow = function(rowData, sectionID, rowID) {
      return (
        <View>
          <Text>{rowData.deviceName}</Text>
          <Text>{rowData.weight}</Text>
          <Text>{rowData.counter}</Text>
        </View>
      );
    };
  }
  render() {
    //const { params } = this.props.navigation.state;
    //const phone = params ? params.phone : null;
    return (
      <ScrollableTabView
        // style={{ marginTop: 10 }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <ScrollView tabLabel="日">
          <Picker
            selectedValue={this.state.days}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ days: itemValue })
            }
          >
            <Picker.Item
              label={new Date().toLocaleDateString()}
              value={new Date().toLocaleDateString()}
            />
            <Picker.Item
              label={new Date().toLocaleDateString()}
              value={new Date().toLocaleDateString()}
            />
            <Picker.Item
              label={new Date().toLocaleDateString()}
              value={new Date().toLocaleDateString()}
            />
          </Picker>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
        </ScrollView>
        <ScrollView tabLabel="週">
          <Picker
            selectedValue={this.state.weeks}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ weeks: itemValue })
            }
          >
            <Picker.Item label={"第一週"} value={"1"} />
            <Picker.Item label={"第二週"} value={"2"} />
            <Picker.Item label={"第三週"} value={"3"} />
          </Picker>
          <Echarts
            option={{
              title: {
                text: "依器材統計"
              },
              tooltip: {},
              legend: {
                data: ["器材"]
              },
              xAxis: {
                data: [
                  "腹部捲曲訓練",
                  "腹部旋轉訓練",
                  "後肩訓練-2用式",
                  "肩部推舉-2用式",
                  "側肩上舉訓練",
                  "大腿推舉訓練"
                ]
              },
              yAxis: {},
              series: [
                {
                  name: "次數",
                  type: "pie",
                  data: [23, 20, 16, 8, 10, 20]
                }
              ]
            }}
            height={300}
          />
          <Echarts
            option={{
              title: {
                text: "依肌肉統計"
              },
              tooltip: {},
              legend: {
                data: ["肌肉"]
              },
              xAxis: {
                data: [
                  "三角肌",
                  "腿後腱肌群",
                  "股四頭肌",
                  "闊背肌",
                  "胸大肌",
                  "肱三頭肌"
                ]
              },
              yAxis: {},
              series: [
                {
                  name: "次數",
                  type: "pie",
                  data: [18, 25, 11, 20, 5, 30]
                }
              ]
            }}
            height={300}
          />
        </ScrollView>
        <ScrollView tabLabel="月">
          <Picker
            selectedValue={this.state.months}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ months: itemValue })
            }
          >
            <Picker.Item label={"一月"} value={"1"} />
            <Picker.Item label={"二月"} value={"2"} />
            <Picker.Item label={"三月"} value={"3"} />
            <Picker.Item label={"四月"} value={"4"} />
            <Picker.Item label={"五月"} value={"5"} />
            <Picker.Item label={"六月"} value={"6"} />
            <Picker.Item label={"七月"} value={"7"} />
            <Picker.Item label={"八月"} value={"8"} />
            <Picker.Item label={"九月"} value={"9"} />
            <Picker.Item label={"十月"} value={"10"} />
            <Picker.Item label={"十一月"} value={"11"} />
            <Picker.Item label={"十二月"} value={"12"} />
          </Picker>
          <Echarts
            option={{
              title: {
                text: "依器材統計"
              },
              tooltip: {},
              legend: {
                data: ["器材"]
              },
              xAxis: {
                data: [
                  "腹部捲曲訓練",
                  "腹部旋轉訓練",
                  "後肩訓練-2用式",
                  "肩部推舉-2用式",
                  "側肩上舉訓練",
                  "大腿推舉訓練"
                ]
              },
              yAxis: {},
              series: [
                {
                  name: "次數",
                  type: "pie",
                  data: [23, 20, 16, 8, 10, 20]
                }
              ]
            }}
            height={300}
          />
          <Echarts
            option={{
              title: {
                text: "依肌肉統計"
              },
              tooltip: {},
              legend: {
                data: ["肌肉"]
              },
              xAxis: {
                data: [
                  "三角肌",
                  "腿後腱肌群",
                  "股四頭肌",
                  "闊背肌",
                  "胸大肌",
                  "肱三頭肌"
                ]
              },
              yAxis: {},
              series: [
                {
                  name: "次數",
                  type: "pie",
                  data: [18, 25, 11, 20, 5, 30]
                }
              ]
            }}
            height={300}
          />
        </ScrollView>
        <ScrollView tabLabel="肌肉" />
      </ScrollableTabView>
    );
  }
}
