import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const people = [
    {
      name: "Numero 1",
      age: 33,
    },
    {
      name: "Numero 2",
      age: 13,
    },
    {
      name: "Numero 3",
      age: 23,
    },
    {
      name: "Numero 4",
      age: 103,
    },
    {
      name: "Numero 5",
      age: 35,
    },
  ];

  return (
    <View>
      <Text style={styles.listStyle}>Hello:</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={(index) => index.name}
        data={people}
        renderItem={({ item }) => {
          return (
            <Text style={styles.space}>
              Your name is {item.name} and your age is {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 80,
    color: "#666",
  },

  space: {
      marginVertical: 15,
      color: '#275'
  }
});

export default ListScreen;
