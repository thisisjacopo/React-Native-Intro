import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={styles.text}>Text Screen:</Text>
      <Text>INSERT YOUR TEXT BELOW:</Text>

      {/* //text input doesnt have any defult style to it, we need to add some all the time// */}
      <TextInput
        autoCapitalize="none" // prevents the text you input to have the first letter capitalized
        autoCorrect={false} // prevents autocorrect to show and change the input
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />

      {name.length < 4 ? (
        <Text style={styles.alert}>Your text has to be min. 4 characters long.</Text>
      ) : null}
      <Text style={styles.result}>Your text is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: "rgb(20, 20, 20)",
  },

  result: {
    fontSize: 20,
    color: "rgb(20, 20, 20)",
  },

  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 20,
  },
  alert: {
      color: 'red',
      fontSize: 14
  }
});

export default TextScreen;
