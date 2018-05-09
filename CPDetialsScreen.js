import React, { Component } from "react";
import { Picker, ScrollView } from "react-native";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view"; //0.8.0
import Echarts from "native-echarts"; //0.4.0

async function getDataApi(url, bodyjson, thisState) {
  try {
    let response = await fetch(
      "http://xcode.dyndns.info:8035/MemberApi.asmx/" + url,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8"
        },
        body: bodyjson,
        cache: "no-cache"
      }
    );
    let responseJson = await response.json();

    if (JSON.parse(responseJson.d).Result == 1)
      alert(JSON.parse(responseJson.d).Message);
    else {
      var ds = JSON.parse(JSON.parse(responseJson.d).Data),
        option = thisState.state.option;
      option.xAxis.data = [];
      option.series[0].data = [];
      option.series[1].data = [];
      option.series[2].data = [];
      for (let i in ds) {
        option.xAxis.data.push(ds[i].WorkoutTime.split("T")[0]);
        option.series[0].data.push(ds[i].Duration);
        option.series[1].data.push(ds[i].Distance);
        option.series[2].data.push(ds[i].Calories);
      }
      thisState.setState({ option: option });
    }
  } catch (error) {
    alert(error);
  }
}
/*
async function setWeeksApi() {
  let wks = [];
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  for (let i = 0; i <= 52; i++) {
    const one = new Date(new Date().getFullYear(), 0, 1),
      two = new Date(new Date().getFullYear(), 0, 1),
      ones = new Date(one.setDate(i * 7 + 1)),
      twos = new Date(two.setDate(i * 7 + 7)),
      oneS = ones.toLocaleDateString("en-US", options).split("/"),
      twoS = twos.toLocaleDateString("en-US", options).split("/"),
      oneT = ones.toLocaleDateString("zh-TW", options),
      twoT = twos.toLocaleDateString("zh-TW", options),
      oneE = "{0}/{1}/{2}"
        .replace("{0}", oneS[2])
        .replace("{1}", oneS[0])
        .replace("{2}", oneS[1]),
      twoE = "{3}/{4}/{5}"
        .replace("{3}", twoS[2])
        .replace("{4}", twoS[0])
        .replace("{5}", twoS[1]);
    wks.push(
      JSON.stringify({
        key: oneE,
        val: oneE + "," + twoE,
        lab: oneT + "~" + twoT
      })
    );
  }
  return wks;
  //thisState.setState({ weekeds: wks });
}
*/
export default class CPDetialsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    /* week: new Date()
        .toJSON()
        .split("T")[0]
        .replace(/-/g, "/"),*/
    return {
      title: params ? params.pagetitle : "心肺運動"
    };
  };
  constructor() {
    super();
    this.state = {
      weeks: "",
      weekeds: [],
      option: {
        title: {
          text: ""
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["時間", "距離", "卡路里"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
          //data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "時間",
            type: "line",
            stack: "每日",
            data: []
            //data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "距離",
            type: "line",
            stack: "每日",
            data: []
          },
          {
            name: "卡路里",
            type: "line",
            stack: "每日",
            data: []
          }
        ]
      }
    };
  }
  render() {
    const { params } = this.props.navigation.state,
      out = params ? params.login : null,
      type = params ? params.cptype : null,
      bodyjson = JSON.stringify({
        telnumber: out.TEL,
        code: (out.ID_NO + "").substring(6, 10),
        dat1: "2018/01/01",
        dat2: "2018/03/31",
        cls: "CP",
        way: "Fitness Machine",
        eqp: type
      });
    getDataApi("MemberCPdetails", bodyjson, this);

    //setWeeksApi(this);
    /*let Items = setWeeksApi().map((s, i) => {
      return <Picker.Item key={s.key} value={s.val} label={s.lab} />;
    });*/
    return (
      <ScrollableTabView
        // style={{ marginTop: 10 }}
        initialPage={0}
        renderTabBar={() => <ScrollableTabBar />}
      >
        <ScrollView tabLabel="週">
          <Picker
            selectedValue={this.state.weeks}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ weeks: itemValue })
            }
          />
          <Echarts option={this.state.option} height={300} />
        </ScrollView>
        <ScrollView tabLabel="月" />
      </ScrollableTabView>
    );
  }
}
