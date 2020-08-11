import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state = {red: number, blue: number: green: numer}
  //action = {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
  // type is colorToChange and payload is the amount
  switch (action.type) {
    case "change_red":
      //can't change the first argument directly, that is why we spread the current state first
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, green, blue } = state;

  return (
    <View style={styles.view}>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
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
