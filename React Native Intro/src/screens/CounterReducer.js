import React, {useReducer} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) =>{
    //state = {count : num}
    // action = {type: 'increment' || 'decrement', payload: 1}

    switch(action.type){
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}

        defult:
        return state; 
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <View>
      <Button style={styles.button} title="ADD TO COUNTER" onPress={() => {
          dispatch({type: 'increment', payload: 1})
      }} />
      <Button style={styles.button} title="SUBTRACT FROM COUNTER" onPress={() => {
          dispatch({type: 'decrement', payload: 1})
      }}/>
      <Text style={styles.text}>Current Count: {state.count}</Text>
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
