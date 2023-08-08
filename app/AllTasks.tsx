import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import TaskCard from "../components/TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AllTasks = () => {
  const tasks = useSelector(
    (state: RootState) => state.TasksSlice.tasks
  );
  return (
    <View
      style={{
        backgroundColor: Colors.dark.background,
        maxHeight: "100%",
        // marginTop: 100,
      }}>
      <ScrollView>
        {tasks.map((task: Task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.name}
            description={task.description}
            priority={task.priority}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AllTasks;

const styles = StyleSheet.create({});
