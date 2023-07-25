import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { View } from "../components/Themed";
import { Button } from "@rneui/base";
import Colors from "../constants/Colors";
const image = {
  uri: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

const AuthPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container2}>
          <Button
            buttonStyle={{
              backgroundColor: Colors.dark.tint,
              borderRadius: 20,
              paddingHorizontal: 70,
            }}>
            Login with Google
          </Button>
          <Button
            buttonStyle={{
              backgroundColor: Colors.dark.tint,
              borderRadius: 20,
              paddingHorizontal: 60,
              marginTop: 20,
            }}>
            Login with Facebook
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  button: {
    backgroundColor: Colors.dark.tint,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  container2: {
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 5,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.01)",
    marginHorizontal: 50,
    paddingVertical: 70,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
