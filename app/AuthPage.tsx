import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { View } from "../components/Themed";
import { Button } from "@rneui/base";
import Colors from "../constants/Colors";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { router } from "expo-router";
import {
  MonoText,
  PoppinsBoldText,
} from "../components/StyledText";
import { StatusBar } from "expo-status-bar";
import { Input } from "@rneui/themed";

const AuthPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (authUser) => {
        if (authUser) {
          router.replace("/(tabs)");
        }
      }
    );
    return unsubscribe;
  }, []);

  const signIn = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).catch(
      (err) => {
        alert(err);
        setLoading(false);
      }
    );
    setLoading(false);
  };
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={require("../assets/images/auth_pic.png")}
        style={{
          width: "100%",
          height: 250,
          marginTop: 20,
        }}
      />
      <PoppinsBoldText
        style={{
          color: Colors.dark.text,
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}>
        Create an account or Sign in to your JayDo account
      </PoppinsBoldText>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            placeholder='Email'
            autoFocus
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder='password'
            secureTextEntry
            value={password}
            onChangeText={(text: any) => setPassword(text)}
          />
        </View>

        <Button
          title='Login'
          buttonStyle={styles.button}
          onPress={signIn}
          loading={loading}
          disabled={loading}
        />
        <Button
          buttonStyle={styles.button}
          title='Register'
          onPress={() => router.push("/RegisterScreen")}
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
