import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefinitionScreen from "../Templates/DefinitionScreen";
import ExperienceScreen from "../ExperienceScreen";



const Stack = createNativeStackNavigator();


export default function ExperienceNavigation() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerTintColor: '#7FB8E1',
                headerStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                },
                headerTitleAlign: 'center',
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
                    title: '',
                }}
                 />          
        </Stack.Navigator>
    );
}

