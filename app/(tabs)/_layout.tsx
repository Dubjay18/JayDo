import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, router } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { FAB } from "@rneui/base";
import { useEffect } from "react";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome
      size={28}
      // style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: Colors["dark"].background,
        },
      }}>
      <Tabs.Screen
        name='index'
        options={{
          title: "Tab One",
          tabBarLabel: "_",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='home' color={color} />
          ),
          headerShown: false,
          // headerRight: () => (
          //   <Link href='/modal' asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name='info-circle'
          //           size={25}
          //           color={
          //             Colors[colorScheme ?? "light"].text
          //           }
          //           style={{
          //             marginRight: 15,
          //             opacity: pressed ? 0.5 : 1,
          //           }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: "profile",
          tabBarLabel: "_",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='user' color={color} />
          ),
          headerTitle: "My Account",
          // headerLeft: () => (
          //   <FontAwesome
          //     name='chevron-left'
          //     size={20}
          //     color={Colors.dark.text}
          //     style={{
          //       marginHorizontal: 20,
          //     }}
          //     onPress={() => router.back()}
          //   />
          // ),
        }}
      />
    </Tabs>
  );
}
