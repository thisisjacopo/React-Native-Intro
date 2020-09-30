import React from "react";
import {  StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 4,
    borderColor: "black",
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textOneStyle: {
    fontSize: 25,
    borderWidth: 3,
    borderColor: "purple",
    backgroundColor: 'green',
    height: 50,
    width: 50,
    flex: 1,
  },
  textTwoStyle: {
    fontSize: 25,
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: 'yellow',
    height: 50,
    width: 50,
    top: 50,
    flex: 1,
  },
  textThreeStyle: {
    fontSize: 25,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: 'pink',
    height: 50,
    width: 50,
    flex: 1,
  },
});

export default BoxScreen;
