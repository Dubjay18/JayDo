import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import React, { useEffect } from "react";
import { useColorScheme, Image } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import SplashScreen from "../components/SplashScreen";
import * as SecureStore from "expo-secure-store";
import Onboarding from "react-native-onboarding-swiper";

import {
  MonoText,
  PoppinsBoldText,
} from "../components/StyledText";
import { Button, Icon } from "@rneui/base";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "AuthPage",
};

export default function RootLayout() {
  const [firstLaunch, setFirstLaunch] = React.useState<
    null | boolean
  >(true);
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    ...FontAwesome.font,
  });
  const Next = ({ ...props }) => (
    <>
      {/* {console.log(props.onPress)} */}
      <Button
        onPress={props.onPress}
        buttonStyle={{
          backgroundColor: "transparent",
          borderWidth: 4,
          borderColor: Colors.dark.tint,
          borderRadius: 200,
          width: 50,
          height: 50,
          marginRight: 20,
        }}>
        <Icon
          name='arrow-right'
          size={25}
          color={Colors.dark.tint}
        />
      </Button>
    </>
  );
  const Dots = ({ selected }: any) => {
    let backgroundColor;
    backgroundColor = selected ? Colors.dark.tint : "gray";
    return (
      <>
        <View
          style={{
            width: selected ? 30 : 10,
            height: 10,
            marginHorizontal: 3,
            borderRadius: 10,
            backgroundColor,
          }}
        />
      </>
    );
  };
  React.useEffect(() => {
    async function setData() {
      const appData = await await SecureStore.getItemAsync(
        "appLaunched-jaydo"
      );
      if (appData == null) {
        setFirstLaunch(true);
        SecureStore.setItemAsync(
          "appLaunched-jaydo",
          "false"
        );
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded &&
        (firstLaunch ? (
          <Onboarding
            onDone={() => setFirstLaunch(false)}
            DotComponent={Dots}
            NextButtonComponent={Next}
            showSkip={false}
            pages={[
              {
                backgroundColor: Colors.dark.background,
                image: (
                  <Image
                    source={require("../assets/images/tasks2.png")}
                    style={{ height: 200, width: 200 }}
                  />
                  // <SvgUri
                  //   width='200'
                  //   height='200'
                  //   source={{
                  //     uri: require("../assets/images/tasks.svg"),
                  //   }}
                  // />
                ),
                title: (
                  <PoppinsBoldText
                    style={{
                      fontSize: 25,
                      color: Colors.dark.text,
                      paddingHorizontal: 20,
                      textAlign: "center",
                    }}>
                    Manage your tasks very easy!
                  </PoppinsBoldText>
                ),
                subtitle: (
                  <MonoText
                    style={{ color: Colors.dark.text }}>
                    Let's explore
                  </MonoText>
                ),
              },
              {
                backgroundColor: Colors.dark.background,
                image: (
                  <Image
                    source={require("../assets/images/rocket.png")}
                    style={{ height: 200, width: 200 }}
                  />
                ),
                title: (
                  <PoppinsBoldText
                    style={{
                      fontSize: 25,
                      color: Colors.dark.text,
                      paddingHorizontal: 20,
                      textAlign: "center",
                    }}>
                    Get ready to boost your productivity
                    with JayDo
                  </PoppinsBoldText>
                ),

                subtitle: (
                  <MonoText
                    style={{ color: Colors.dark.text }}>
                    Let's get started!
                  </MonoText>
                ),
              },
            ]}
          />
        ) : (
          <RootLayoutNav />
        ))}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  // colorScheme === 'dark' ? DarkTheme : DefaultTheme
  return (
    <>
      <ThemeProvider value={DarkTheme}>
        <Stack>
          <Stack.Screen
            name='AuthPage'
            options={{
              headerStyle: {
                backgroundColor: Colors.dark.tint,
              },
              headerTitle: "Sign In",
            }}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name='(tabs)'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='AddTask'
            options={{
              presentation: "transparentModal",
              gestureEnabled: true,
              headerTitle: "Create New Task",
              headerStyle: {
                backgroundColor: "#000",
              },
              headerLeft: ({}) => (
                <FontAwesome
                  name='close'
                  size={25}
                  color={Colors.dark.text}
                  style={{
                    marginLeft: 25,
                    marginRight: 55,
                  }}
                  onPress={() => router.back()}
                />
              ),
              // headerBackground: () => (
              //   <View
              //     style={{
              //       backgroundColor: "transparent",
              //     }}
              //   />
              // ),
            }}
          />
          <Stack.Screen
            name='AllTasks'
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name='TaskModal'
            options={{
              presentation: "modal",
              gestureEnabled: true,
              // headerTitle: "Task Details",
              headerStyle: {
                backgroundColor: "#000",
              },
              headerTintColor: Colors.dark.text,
              headerTitleStyle: {
                fontWeight: "bold",
              },
              // ...TransitionPresets.ModalPresentationIOS,
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}
