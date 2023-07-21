import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { PoppinsText } from "../components/StyledText";
import { Text } from "../components/Themed";
import { Button } from "@rneui/base";

export default function TaskModal() {
  return (
    <View style={styles.container}>
      <PoppinsText style={{ fontSize: 25 }}>
        Description
      </PoppinsText>
      <Text
        darkColor={Colors.dark.text}
        style={{
          color: Colors.dark.text,
          marginBottom: 20,
        }}>
        Build mobile app
      </Text>
      <PoppinsText style={{ fontSize: 25 }}>
        Due Date
      </PoppinsText>
      <Text
        darkColor={Colors.dark.text}
        style={{
          color: Colors.dark.text,
          marginBottom: 20,
        }}>
        2023-01-01
      </Text>
      <PoppinsText style={{ fontSize: 25 }}>
        Priority
      </PoppinsText>
      <Text
        darkColor={Colors.dark.text}
        style={{
          color: Colors.dark.text,
          marginBottom: 20,
          backgroundColor: Colors.todo.high,
          width: 100,
          fontSize: 20,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        High
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 20,
  },
});
