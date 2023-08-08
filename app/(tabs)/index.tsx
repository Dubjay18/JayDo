import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";
import {
  MonoText,
  PoppinsBoldText,
} from "../../components/StyledText";
import { Avatar, FAB, Input } from "@rneui/base";
import TaskCard from "../../components/TaskCard";
import { router } from "expo-router";
import CatgoryCard from "../../components/CatgoryCard";
import CategoryList from "../../components/CategoryList";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function TabOneScreen() {
  const input = React.createRef();
  const tasks = useSelector(
    (state: RootState) => state.TasksSlice.tasks
  );
  return (
    <View
      style={styles.container}
      lightColor={Colors.light.text}
      darkColor={Colors.dark.text}>
      <View style={{ flex: 0.1 }}></View>
      <View
        style={{ flex: 0.2 }}
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
          <PoppinsBoldText style={styles.title}>
            You have got 4 tasks today to complete
          </PoppinsBoldText>
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
      <View
        style={{ flex: 0.7, width: "100%" }}
        lightColor={Colors.light.text}
        darkColor={Colors.dark.background}>
        <CategoryList />
        <View
          lightColor={Colors.light.text}
          darkColor={Colors.dark.background}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
            flex: 0.1,
          }}>
          <MonoText style={styles.subTitle}>
            Today's Tasks
          </MonoText>
          <MonoText
            style={styles.subText}
            onPress={() => router.push("AllTasks")}>
            see all
          </MonoText>
        </View>
        <ScrollView style={{ flex: 0.5 }}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.name}
              description={task.description}
              priority={task.priority}
            />
          ))}
        </ScrollView>
      </View>
      {/* <EditScreenInfo path='app/(tabs)/index.tsx' /> */}
      <StatusBar style='light' />
      <FAB
        style={{
          position: "absolute",
          bottom: 20,
          right: 10,
          backgroundColor: Colors.dark.tint,
          zIndex: 20,
        }}
        color={Colors.dark.tint}
        loading={false}
        visible={true}
        icon={{ name: "add", color: "white" }}
        size='small'
        onPress={() => router.push("AddTask")}
      />
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
    // fontWeight: "bold",
    color: Colors.dark.text,
    maxWidth: "90%",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark.text,
    marginHorizontal: 20,
  },
  subText: {
    fontSize: 15,
    color: Colors.dark.tint,
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
