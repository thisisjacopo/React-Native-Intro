import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hola World</Text>
      <Button
        onPress={() => {navigation.navigate("Components"), console.log('console log messages show on your local terminal')}}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />

<Button
        onPress={() => navigation.navigate("Images")}
        title="Go to List Image Screen Demo"
      />

<Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Demo"
      />
<Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Colors Demo"
      />
<Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Sqare Demo"
      />

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Another way to link to List Component</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems:'center',
    marginTop: 20
  },
  text: {
    fontSize: 70,
    color: "#149",
    backgroundColor: "#939",
  },
});

export default HomeScreen;
