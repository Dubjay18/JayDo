import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { Avatar } from "@rneui/base";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Avatar
        size={160}
        rounded
        source={{
          uri: "https://randomuser.me/api/portraits/men/36.jpg",
        }}
      />
      <View
        style={{
          backgroundColor: Colors.dark.background,
          flexDirection: "row",
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
          <Text style={styles.title}>Tab Two</Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.dark.inputBackground,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={styles.title}>Tab Two</Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.dark.inputBackground,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Text style={styles.title}>Tab Two</Text>
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
