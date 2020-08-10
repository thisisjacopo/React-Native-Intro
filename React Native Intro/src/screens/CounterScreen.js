import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
  return (
    <View>
      <Button style={styles.button} title="ADD TO COUNTER" onPress={() => {
          //using setCounter hook to updated counter
          setCounter(counter + 1)
      }} />
      <Button style={styles.button} title="SUBTRACT FROM COUNTER" onPress={() => {
          setCounter(counter - 1)
      }}/>
      <Text style={styles.text}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    color: "#322",
  },

  button: {
    backgroundColor: "#555",
    fontSize: 25,
    color: "#121",
  },
});

export default CounterScreen;
