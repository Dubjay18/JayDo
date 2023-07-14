import { StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { View } from "./Themed";
import { MonoText } from "./StyledText";

const TaskCard = () => {
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.text}
      darkColor={Colors.dark.background}>
      <MonoText style={styles.title}>Mobile app</MonoText>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark.text,
    maxWidth: "90%",
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Colors.dark.inputBackground,
    borderLeftWidth: 5,
    borderLeftColor: Colors.todo.done,
  },
});
