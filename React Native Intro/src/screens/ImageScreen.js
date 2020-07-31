import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.mainTitle}>Hello World</Text>
      <ImageDetail
        score={8}
        title="Forest"
        imagePath={require("../../assets/forest.jpg")}
      ></ImageDetail>
      <ImageDetail
        score={9}
        title="Beach"
        imagePath={require("../../assets/beach.jpg")}
      ></ImageDetail>
      <ImageDetail
        score={10}
        title="Mountain"
        imagePath={require("../../assets/mountain.jpg")}
      ></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 50,
    color: "#629",
    backgroundColor: "#121",
  },
});

export default ImageScreen;
