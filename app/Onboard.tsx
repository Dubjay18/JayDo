import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "@rneui/base";
const Onboard = () => {
  return (
    <>
      <Onboarding
        pages={[
          {
            backgroundColor: "#a6e4d0",
            image: (
              <Image
                source={require("../assets/images/connected.png")}
              />
            ),
            title: "Welcome",
            subtitle:
              "Welcome to the first slide of the Onboarding Swiper.",
          },
        ]}
      />
    </>
  );
};

export default Onboard;

const styles = StyleSheet.create({});
