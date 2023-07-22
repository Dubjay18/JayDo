import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import SplashScreen from "../components/SplashScreen";
import * as SecureStore from "expo-secure-store";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "@rneui/base";
import {
  MonoText,
  PoppinsBoldText,
} from "../components/StyledText";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
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

  // React.useEffect(() => {
  //   async function setData() {
  //     const appData = await await SecureStore.getItemAsync(
  //       "appLaunched"
  //     );
  //     if (appData == null) {
  //       setFirstLaunch(true);
  //       SecureStore.setItemAsync("appLaunched", "false");
  //     } else {
  //       setFirstLaunch(false);
  //     }
  //   }
  //   setData();
  // }, []);

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
            pages={[
              {
                backgroundColor: Colors.dark.background,
                image: (
                  <Image
                    source={require("../assets/images/connected.png")}
                  />
                ),
                title: (
                  <PoppinsBoldText
                    style={{
                      fontSize: 25,
                      color: Colors.dark.text,
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
                    source={require("../assets/images/connected.png")}
                  />
                ),
                title:
                  "Get ready to boost your productivity with JayDo",
                subtitle: "Let's get started!",
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
          {/* <Stack.Screen
          name="onboard"
          options={{ headerShown: false }}
          
          /> */}
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
