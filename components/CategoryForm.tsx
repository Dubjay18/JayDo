import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";
import { View } from "./Themed";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setCategories } from "../redux/TasksSlice";
import { v4 as uuidv4 } from "uuid";
const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();
  const createCategory = () => {
    if (categoryName !== "") {
      dispatch(
        setCategories({
          id: uuidv4(),
          name: categoryName,
          tasks: [],
        })
      );
    }
  };
  return (
    <View
      style={{ backgroundColor: Colors.dark.background }}>
      <Input
        labelStyle={{
          marginHorizontal: 20,
          marginVertical: 5,
          color: Colors.dark.text,
        }}
        style={styles.input}
        label='Category Name'
        placeholder='Name'
        value={categoryName}
        onChangeText={(e) => setCategoryName(e)}
        inputContainerStyle={{
          borderBottomWidth: 0,
          backgroundColor: Colors.dark.inputBackground,
          paddingHorizontal: 20,
        }}

        // lightColor={Colors.light.text}
        // darkColor={Colors.dark.background}
      />
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
          fontSize: 16,
        }}
        title='Create Category'
        onPress={createCategory}>
        Create Category
      </Button>
    </View>
  );
};

export default CategoryForm;

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.dark.inputBackground,
    color: Colors.dark.text,
    // borderColor: Colors.dark.text,
    // borderWidth: 1,

    paddingVertical: 2,
    marginHorizontal: 2,
    marginVertical: 5,
    width: 200,
  },
});
