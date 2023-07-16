import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import TaskCard from "../components/TaskCard";

const AllTasks = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.dark.background,
        maxHeight: "100%",
        // marginTop: 100,
      }}>
      <ScrollView>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
    </View>
  );
};

export default AllTasks;

const styles = StyleSheet.create({});
