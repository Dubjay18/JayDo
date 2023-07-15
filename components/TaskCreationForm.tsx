import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import { Button, Input, Switch } from "@rneui/base";
import { MonoText, PoppinsText } from "./StyledText";

const TaskCreationForm = () => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}>
      <Text
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        TaskCreationForm
      </Text>
      <Input
        labelStyle={{
          marginHorizontal: 20,
          marginVertical: 5,
        }}
        style={styles.input}
        label='Task Name'
        placeholder='Name'
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
        labelStyle={{
          marginHorizontal: 20,
          marginVertical: 5,
        }}
        style={styles.input}
        label='Task description'
        placeholder='description'
        inputContainerStyle={{
          borderBottomWidth: 0,
          backgroundColor: Colors.dark.inputBackground,
          paddingHorizontal: 20,
          borderRadius: 20,
        }}

        // lightColor={Colors.light.text}
        // darkColor={Colors.dark.background}
      />
      <View
        style={{
          backgroundColor: Colors.dark.background,
          flexDirection: "row",
          gap: 5,
          maxWidth: "50%",
        }}>
        <Input
          labelStyle={{
            marginHorizontal: 20,
            marginVertical: 5,
          }}
          style={styles.timeInput}
          label='Start time'
          placeholder='9.00am'
          inputContainerStyle={{
            borderBottomWidth: 0,
            backgroundColor: Colors.dark.inputBackground,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          leftIcon={{
            type: "font-awesome",
            name: "clock-o",
            color: Colors.dark.tint,
          }}
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.background}
        />
        <Input
          labelStyle={{
            marginHorizontal: 20,
            marginVertical: 5,
          }}
          style={styles.timeInput}
          label='End time'
          placeholder='9.00pm'
          inputContainerStyle={{
            borderBottomWidth: 0,
            backgroundColor: Colors.dark.inputBackground,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          leftIcon={{
            type: "font-awesome",
            name: "clock-o",
            color: Colors.dark.tint,
          }}
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.background}
        />
      </View>
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
          containerStyle={{
            borderRadius: 30,
            paddingHorizontal: 60,
            width: 220,
          }}
          buttonStyle={{
            backgroundColor: Colors.todo.low,
            borderRadius: 30,
          }}>
          Low
        </Button>
        <Button
          containerStyle={{
            borderRadius: 30,
            paddingHorizontal: 60,
            width: 220,
          }}
          buttonStyle={{
            backgroundColor: Colors.todo.medium,
            borderRadius: 30,
          }}>
          Medium
        </Button>
        <Button
          containerStyle={{
            borderRadius: 30,
            paddingHorizontal: 60,
            width: 220,
          }}
          buttonStyle={{
            backgroundColor: Colors.todo.high,
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
