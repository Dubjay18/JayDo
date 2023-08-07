import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";

const CatgoryCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MonoText style={styles.taskText}>1 tasks</MonoText>
        <Text style={styles.text}>CatgoryCard</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CatgoryCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: Colors.dark.inputBackground,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    marginHorizontal: 30,
  },
  text: {
    color: Colors.dark.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  taskText: {
    color: "gray",
  },
});
