import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Image } from "@rneui/base";
import { PoppinsBoldText } from "./StyledText";

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.dark.background,
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text
        style={{ fontSize: 25, color: Colors.dark.text }}>
        JayDo
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
