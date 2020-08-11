import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
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

export default ColorCounter;
