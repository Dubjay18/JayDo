import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text } from "@rneui/themed";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import Colors from "../constants/Colors";
import { PoppinsBoldText } from "../components/StyledText";
import { router } from "expo-router";

const RegisterScreen = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (authUser) => {
        if (authUser) {
          router.push("/index");
        }
      }
    );
    return unsubscribe;
  }, []);
  const register = async () => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(user, {
      displayName: name,
      photoURL:
        imageUrl ||
        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
    });
  };
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>
      <StatusBar style='light' />
      <PoppinsBoldText
        style={{
          marginBottom: 50,
          color: Colors.dark.text,
          fontSize: 30,
        }}>
        Create a JayDo account
      </PoppinsBoldText>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          autoFocus
          style={{ color: Colors.dark.text }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder='Email'
          value={email}
          style={{ color: Colors.dark.text }}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder='Password'
          secureTextEntry
          style={{ color: Colors.dark.text }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder='Profile Picture URL (optional)'
          value={imageUrl}
          style={{ color: Colors.dark.text }}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        buttonStyle={styles.button}
        raised
        onPress={register}
        title='Register'
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: Colors.dark.background,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,

    height: 50,
    backgroundColor: Colors.dark.tint,
  },
});
