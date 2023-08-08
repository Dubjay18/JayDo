import {
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { PoppinsText } from "../../components/StyledText";
import { Text } from "../../components/Themed";
import { Button } from "@rneui/base";
import { router, useLocalSearchParams } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function TaskModal() {
  const local = useLocalSearchParams();

  if (!local.id) {
    return (
      <View>
        <ActivityIndicator
          size='large'
          color={Colors.dark.tint}
        />
      </View>
    );
  }
  const task: any = useSelector(
    (state: RootState) => state.TasksSlice.tasks
  ).find((t: Task) => t.id == local.id);

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
        {task.description}
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
          backgroundColor:
            task.priority == "low"
              ? Colors.todo.low
              : task.priority == "medium"
              ? Colors.todo.medium
              : Colors.todo.high,
          width: 100,
          fontSize: 20,
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 10,
        }}>
        {task.priority}
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
