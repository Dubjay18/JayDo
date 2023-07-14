import { StyleSheet } from "react-native";
import React from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { MonoText } from "../../components/StyledText";
import { Avatar, Input } from "@rneui/base";

export default function TabOneScreen() {
  const input = React.createRef();
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.text}
      darkColor={Colors.dark.text}>
      <View style={{ flex: 0.1 }}></View>
      <View
        style={{ flex: 0.2, paddingVertical: 20 }}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.background}>
        <View
          lightColor={Colors.light.text}
          darkColor={Colors.dark.background}
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 20,
            paddingHorizontal: 20,
          }}>
          <MonoText style={styles.title}>
            You have got 4 tasks today to complete
          </MonoText>
          <Avatar
            size={40}
            rounded
            source={{
              uri: "https://randomuser.me/api/portraits/men/36.jpg",
            }}
          />
        </View>
      </View>
      <View
        style={{ flex: 0.1, width: "100%" }}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.background}>
        <Input
          style={styles.input}
          placeholder='Search'
          inputContainerStyle={{
            borderBottomWidth: 0,
            backgroundColor: Colors.dark.inputBackground,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}
          leftIcon={{
            type: "font-awesome",
            name: "search",
            color: Colors.dark.text,
          }}
          // lightColor={Colors.light.text}
          // darkColor={Colors.dark.background}
        />
      </View>
      <View style={{ flex: 0.7 }}></View>
      {/* <EditScreenInfo path='app/(tabs)/index.tsx' /> */}
      <StatusBar style='light' />
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
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.dark.text,
    maxWidth: "90%",
  },
  input: {
    backgroundColor: Colors.dark.inputBackground,
    color: Colors.dark.text,
    // borderColor: Colors.dark.text,
    // borderWidth: 1,
    borderRadius: 10,

    paddingVertical: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    width: 200,
  },
});
