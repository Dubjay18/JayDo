import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
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
            name='(tabs)'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='AddTask'
            options={{
              presentation: "modal",
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
        </Stack>
      </ThemeProvider>
    </>
  );
}
