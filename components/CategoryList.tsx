import { StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
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
import { Button, Dialog } from "@rneui/base";
import { FontAwesome } from "@expo/vector-icons";
import CategoryForm from "./CategoryForm";
const CategoryList = () => {
  const categories = useSelector(
    (state: RootState) => state.TasksSlice.categories
  );
  const [visible1, setVisible1] = useState(false);
  const dispatch = useDispatch();
  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  useEffect(() => {
    console.log(categories);
  }, []);
  return (
    <>
      <Dialog
        isVisible={visible1}
        onBackdropPress={toggleDialog1}>
        <Dialog.Title title='Dialog Title' />
        <CategoryForm toggle={toggleDialog1} />
      </Dialog>
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
      <View
        lightColor={Colors.light.background}
        darkColor={Colors.dark.background}
        style={{
          height: categories.length > 0 ? 140 : 90,
          backgroundColor: Colors.dark.background,
        }}>
        {categories.length > 0 ? (
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
        ) : (
          <View
            style={{
              backgroundColor: Colors.dark.background,
              paddingHorizontal: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}>
            <Button
              onPress={toggleDialog1}
              containerStyle={{
                borderRadius: 30,
                width: "10%",
                paddingVertical: 30,
              }}
              buttonStyle={{
                backgroundColor: Colors.dark.tint,
                paddingVertical: 10,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              titleStyle={{
                color: Colors.dark.text,
                fontSize: 15,
              }}
              title={
                <FontAwesome
                  name='plus'
                  color={Colors.dark.text}
                />
              }
            />
          </View>
        )}
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
