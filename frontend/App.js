/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const server1 = "http://localhost:3000";
const server2 = "http://localhost:3001";
const googleTimeoutUrl = "https://www.google.com:81";
const test500 = "https://httpstat.us/500";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ""
    };
  }
  hitServers() {
    const FETCH_TIMEOUT = 5000;
    let didTimeOut = false;

    new Promise(function(resolve, reject) {
      const timeout = setTimeout(function() {
        didTimeOut = true;
        reject(new Error("Request timed out"));
      }, FETCH_TIMEOUT);

      fetch(googleTimeoutUrl)
        .then(function(response) {
          clearTimeout(timeout);
          if (!didTimeOut) {
            resolve(response);
          }
        })
        .catch(function(err) {
          if (didTimeOut) return;
          reject(err);
        });
    })
      .then(function(res) {
        if (res.status == 200 && res.ok) {
          this.setState({
            dataSource: res._bodyText
          });
        }
        throw "Server returned status code other than 200";
      })
      .catch(err => {
        console.log("Trying Server2: ", err);
        this.hitServer2();
      });
  }
  hitServer2() {
    fetch(server2).then(
      res => {
        if (res.status == 200 && res.ok) {
          this.setState({
            dataSource: res._bodyText
          });
        }
      },
      rej => {
        this.setState({
          dataSource: "Both servers are down"
        });
      }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title="Get Response" onPress={() => this.hitServers()} />
        <Text style={styles.response}>{this.state.dataSource}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  response: {
    fontSize: 24
  }
});
