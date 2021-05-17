import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import Login from "./login.js";
import Todo from "./todo.js";

export default class App extends Component {
  render() {
    return (
      <View>
        <Login />
        <Todo />
      </View>
    );
  }
}
