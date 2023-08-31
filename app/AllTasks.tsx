import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from "../constants/Colors";
import TaskCard from "../components/TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AllTasks = () => {
    const [taskData, setTaskData]  = useState<Task[]>([])
  const tasks = useSelector(
    (state: RootState) => state.TasksSlice.tasks
  );
    console.log(tasks)
    useEffect(()=>{
        setTaskData(tasks)
    },[tasks])
  return (
    <View
      style={{
        backgroundColor: Colors.dark.background,
        maxHeight: "100%",
        // marginTop: 100,
      }}>
      <ScrollView>
        {taskData.map((task: Task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.name}
            description={task.description}
            priority={task.priority}
            done={task.done}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AllTasks;

const styles = StyleSheet.create({});
