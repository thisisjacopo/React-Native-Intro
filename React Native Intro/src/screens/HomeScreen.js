import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>Hola Baby</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Demo"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
    color: "#959",
    backgroundColor: "#699",
  },
});

export default HomeScreen;
