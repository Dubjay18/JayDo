import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";
import { MonoText } from "./StyledText";
import CatgoryCard from "./CatgoryCard";
import Colors from "../constants/Colors";
import { Text, View } from "../components/Themed";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setCategories } from "../redux/TasksSlice";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
const CategoryList = () => {
  const categories = useSelector(
    (state: RootState) => state.TasksSlice.categories
  );
  const dispatch = useDispatch();

  return (
    <>
      <View
        lightColor={Colors.light.text}
        darkColor={Colors.dark.background}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
          paddingVertical: 10,
          flex: 0.1,
        }}>
        <MonoText style={styles.subTitle}>
          Categories
        </MonoText>
        <MonoText
          style={styles.subText}
          onPress={() => router.push("AllTasks")}>
          see all
        </MonoText>
      </View>
      <View style={{ height: 140 }}>
        <ScrollView
          horizontal={true}
          style={{
            flex: 0.1,
            backgroundColor: Colors.dark.background,
            paddingHorizontal: 20,
            gap: 4,
          }}>
          {categories.map((category, i) => (
            <CatgoryCard
              key={i}
              name={category.name}
              taskLength={category.tasks.length}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
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
});
