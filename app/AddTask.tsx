import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { MonoText } from "../components/StyledText";
import TaskCreationForm from "../components/TaskCreationForm";
import CustomCalendar from "../components/CustomCalender";

export default function ModalScreen() {
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.background}
      darkColor={Colors.dark.background}>
      <MonoText
        style={styles.title}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}>
        Schedule
      </MonoText>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar
        style={Platform.OS === "ios" ? "light" : "auto"}
      /> */}
      <TaskCreationForm />
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 20,
    // fontWeight: "bold",
    color: Colors.dark.text,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
