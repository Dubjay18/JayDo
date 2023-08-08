import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { View } from "../components/Themed";
import { Button } from "@rneui/base";
import Colors from "../constants/Colors";

import { auth } from "../firebase";
import { router } from "expo-router";
import {
  MonoText,
  PoppinsBoldText,
} from "../components/StyledText";
import { StatusBar } from "expo-status-bar";
import { Input } from "@rneui/themed";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice";

const AuthPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const createUser = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(
        setUser({
          name,
          email,
        })
      );
      setLoading(false);
      router.push("/");
    }, 1000);
  };
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>
      <StatusBar style='light' />

      <PoppinsBoldText
        style={{
          color: Colors.dark.text,
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}>
        Create an account
      </PoppinsBoldText>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Name'
            value={name}
            style={{ color: "white" }}
            onChangeText={(text: any) => setName(text)}
          />
          <Input
            placeholder='Email'
            // autoFocus
            value={email}
            style={{ color: "white" }}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <Button
          title='Get Started'
          buttonStyle={styles.button}
          loading={loading}
          disabled={loading}
          onPress={createUser}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    backgroundColor: Colors.dark.background,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.dark.background,
    alignItems: "center",
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
    marginTop: 50,
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

    paddingVertical: 70,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});
