import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { View } from "./Themed";
import { MonoText, PoppinsBoldText } from "./StyledText";
import { CheckBox } from "@rneui/themed";
import { Link, router } from "expo-router";

interface ITaskCardProps {
  title?: string;
  description?: string;
  priority?: string;
  id: string;
}
const TaskCard = ({
  title = "Mobile app",
  description = "build a mobile app",
  priority = "low",
  id,
}: ITaskCardProps) => {
  const [selectedIndex, setIndex] = React.useState(false);
  // priority == 'low' ?Colors.todo.low : priority == 'medium' ? Colors.todo.medium : Colors.todo.high,
  return (
    <TouchableOpacity
      onPress={() => router.push(`/TaskModal/${id}`)}>
      <View
        style={[
          styles.container,
          {
            borderLeftColor:
              priority == "low"
                ? Colors.todo.low
                : priority == "medium"
                ? Colors.todo.medium
                : Colors.todo.high,
          },
        ]}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.background}>
        <View
          style={{
            width: "90%",
            backgroundColor: "transparent",
          }}
          lightColor={Colors.light.text}
          darkColor={Colors.dark.inputBackground}>
          <PoppinsBoldText style={styles.title}>
            {title}
          </PoppinsBoldText>
          <MonoText style={styles.subTitle}>
            {description}
          </MonoText>
        </View>
        <CheckBox
          checked={selectedIndex}
          onPress={() => setIndex(!selectedIndex)}
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          size={25}
          containerStyle={{
            backgroundColor: Colors.dark.inputBackground,
          }}
        />
      </View>
    </TouchableOpacity>
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
    borderRadius: 5,
    backgroundColor: Colors.dark.inputBackground,
    borderLeftWidth: 5,

    flexDirection: "row",
    width: "90%",
    overflow: "hidden",
  },
  subTitle: {
    fontSize: 15,
    color: "gray",
  },
});
