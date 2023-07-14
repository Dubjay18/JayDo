import { StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { View } from "./Themed";
import { MonoText } from "./StyledText";
import { CheckBox } from "@rneui/themed";

const TaskCard = () => {
  const [selectedIndex, setIndex] = React.useState(0);
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.text}
      darkColor={Colors.dark.background}>
      <View
        style={{
          width: "90%",
          backgroundColor: "transparent",
        }}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.inputBackground}>
        <MonoText style={styles.title}>Mobile app</MonoText>
        <MonoText style={styles.subTitle}>
          Mobile app
        </MonoText>
      </View>
      <CheckBox
        checked={selectedIndex === 0}
        onPress={() => setIndex(0)}
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        containerStyle={{
          backgroundColor: Colors.dark.inputBackground,
        }}
      />
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
    flexDirection: "row",
    width: "90%",
  },
  subTitle: {
    fontSize: 15,
    color: "gray",
  },
});
