import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { Avatar } from "@rneui/base";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

export default function TabTwoScreen() {
  const tasks = useSelector(
    (state: RootState) => state.TasksSlice.tasks
  );
  return (
    <View style={styles.container}>
      <Avatar
        size={160}
        rounded
        source={require("../../assets/images/bg-image.jpg")}
      />
      <View
        style={{
          backgroundColor: Colors.dark.background,

          justifyContent: "space-evenly",
          gap: 10,
          marginVertical: 20,
        }}>
        <View
          style={{
            backgroundColor: Colors.dark.inputBackground,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={styles.title}>
            Total Tasks completed: 0
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.dark.inputBackground,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={styles.title}>
            Pending Task: {tasks.length || 0}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark.text,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
