import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { View } from "../components/Themed";
import { Button } from "@rneui/base";
import Colors from "../constants/Colors";
import {
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase";
import { router } from "expo-router";
import {
  MonoText,
  PoppinsBoldText,
} from "../components/StyledText";
const image = {
  uri: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1600",
};
const provider = new GoogleAuthProvider();
const signinWithGoogle = () => {
  console.log("hi", signInWithRedirect);

  signInWithRedirect(auth, provider)
    .then((result) => {
      console.log("result", result);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential =
        GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      //   const user = result?.user;
      router.push("/(tabs)");
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential =
        GoogleAuthProvider.credentialFromError(error);

      // ...
    });
};
const AuthPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <PoppinsBoldText
          style={{
            color: Colors.dark.text,
            fontSize: 20,
            textAlign: "center",
          }}>
          Create an account or Sign in to your JayDo account
        </PoppinsBoldText>
        <View style={{ marginTop: 20, borderRadius: 10 }}>
          <Button
            onPress={signinWithGoogle}
            buttonStyle={{
              backgroundColor: "white",
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image
              source={require("../assets/images/google-icon.png")}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </Button>
        </View>
      </View>
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
    backgroundColor: Colors.dark.background,
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
    backgroundColor: Colors.dark.background,
    marginTop: 100,
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
