import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefinitionScreen from "../Templates/DefinitionScreen";
import ExperienceScreen from "../ExperienceScreen";
import SettingScreen from "../SettingScreen";

const Stack = createNativeStackNavigator();

export default function ExperienceNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#7FB8E1",
        headerStyle: {
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="ExperienceScreen"
        component={ExperienceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DefinitionScreen"
        component={DefinitionScreen}
        options={{
          title: "",
        }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: "",
        }}
      />
    </Stack.Navigator>
  );
}
