import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import { Button, Input, Switch } from "@rneui/base";
import { MonoText, PoppinsText } from "./StyledText";
import CustomCalendar from "./CustomCalender";

const TaskCreationForm = () => {
  const [checked, setChecked] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] =
    useState("");
  const [priority, setPriority] = useState("");

  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}>
      {/* <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        TaskCreationForm
      </Text> */}
      <CustomCalendar />
      <Input
        labelStyle={{
          marginHorizontal: 20,
          marginVertical: 5,
        }}
        style={styles.input}
        label='Task Name'
        placeholder='Name'
        value={taskName}
        onChangeText={(e) => setTaskName(e)}
        inputContainerStyle={{
          borderBottomWidth: 0,
          backgroundColor: Colors.dark.inputBackground,
          paddingHorizontal: 20,
          borderRadius: 20,
        }}

        // lightColor={Colors.light.text}
        // darkColor={Colors.dark.background}
      />
      <Input
        multiline={true}
        numberOfLines={4}
        labelStyle={{
          marginHorizontal: 20,
          marginVertical: 5,
        }}
        style={styles.input}
        label='Task description'
        placeholder='description'
        value={taskDescription}
        onChangeText={(text) => setTaskDescription(text)}
        inputContainerStyle={{
          borderBottomWidth: 0,
          backgroundColor: Colors.dark.inputBackground,
          paddingHorizontal: 20,
          borderRadius: 20,
        }}

        // lightColor={Colors.light.text}
        // darkColor={Colors.dark.background}
      />

      <MonoText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        Priority
      </MonoText>
      <View
        style={{
          backgroundColor: Colors.dark.background,
          flexDirection: "row",
          paddingHorizontal: 30,
          paddingVertical: 10,
          gap: 5,
          width: "100%",
          justifyContent: "space-evenly",
        }}>
        <Button
          onPress={() => setPriority("low")}
          containerStyle={{
            borderRadius: 30,
            paddingHorizontal: 60,
            width: 200,
          }}
          buttonStyle={{
            backgroundColor:
              priority == "low"
                ? Colors.dark.tint
                : Colors.todo.low,
            borderRadius: 30,
          }}>
          Low
        </Button>
        <Button
          onPress={() => setPriority("medium")}
          containerStyle={{
            borderRadius: 30,
            paddingHorizontal: 60,
            width: 200,
          }}
          buttonStyle={{
            backgroundColor:
              priority == "medium"
                ? Colors.dark.tint
                : Colors.todo.medium,
            borderRadius: 30,
          }}>
          Medium
        </Button>
        <Button
          onPress={() => setPriority("high")}
          containerStyle={{
            borderRadius: 30,
            paddingHorizontal: 60,
            width: 200,
          }}
          buttonStyle={{
            backgroundColor:
              priority == "high"
                ? Colors.dark.tint
                : Colors.todo.high,
            borderRadius: 30,
          }}>
          High
        </Button>
      </View>
      <View
        style={{
          backgroundColor: Colors.dark.background,
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 10,
          gap: 5,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 120,
        }}>
        <PoppinsText
          style={{
            color: Colors.dark.text,
            fontSize: 20,
          }}>
          Get alert for this task
        </PoppinsText>
        <View
          style={{
            backgroundColor: Colors.dark.background,
          }}>
          <Switch
            value={checked}
            onValueChange={(value) => setChecked(value)}
            color={Colors.dark.tint}
            // style={{
            //   backgroundColor: Colors.dark.inputBackground,
            // }}
          />
        </View>
      </View>
      <Button
        containerStyle={{
          borderRadius: 30,

          paddingVertical: 30,
          width: "100%",
        }}
        buttonStyle={{
          backgroundColor: Colors.dark.tint,
          paddingVertical: 10,
          borderRadius: 10,
          paddingHorizontal: 60,
        }}
        titleStyle={{
          color: Colors.dark.text,
          fontSize: 25,
        }}
        title='Create Task'
        onPress={() => console.log("Create Task")}>
        Create Task
      </Button>
    </View>
  );
};

export default TaskCreationForm;

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    flex: 1,
    color: Colors.dark.text,
    backgroundColor: Colors.dark.background,
  },
  input: {
    backgroundColor: Colors.dark.inputBackground,
    color: Colors.dark.text,
    // borderColor: Colors.dark.text,
    // borderWidth: 1,
    borderRadius: 10,

    paddingVertical: 2,
    marginHorizontal: 2,
    marginVertical: 5,
    width: 200,
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
    color: Colors.dark.text,
  },
  timeInput: {
    backgroundColor: Colors.dark.inputBackground,
    color: Colors.dark.text,
    // borderColor: Colors.dark.text,
    // borderWidth: 1,
    borderRadius: 10,

    paddingVertical: 2,
    marginHorizontal: 2,
    marginVertical: 5,
    width: "50%",
  },
});
