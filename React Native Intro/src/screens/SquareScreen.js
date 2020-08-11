import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";
const SquareScreen = () => {
  //WE USUALLY CREATE A STATE BIND IN THE MOST PARENT COMPONENT
  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));

  const COLOR_INCREMENT = 10;
  const setColor = (color, change) => {
    // color  === 'red', 'green' or 'blue'
    // change === +10 or -10
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

        defult: return;
    }
  };

  return (
    <View style={styles.view}>
      <ColorCounter
        onIncrease={() => {
          setColor("red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("red", -1 * COLOR_INCREMENT);
        }}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => {
          setColor("blue", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("blue", -1 * COLOR_INCREMENT);
        }}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => {
          setColor("green", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("green", -1 * COLOR_INCREMENT);
        }}
        color="Blue"
      />
      <View
        style={{
          height: 280,
          width: 350,
          backgroundColor: `rgb(${red}, ${blue}, ${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: "rgb(20, 20, 20)",
  },
  view: {
    display: "flex",
    alignItems: "center",
  },
});

export default SquareScreen;
