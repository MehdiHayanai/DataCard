import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewProjectScreen from "../NewProjectScreen";
import CreateProjetScreen from "../CreateProjetScreen";
import ProjectScreen from "../ProjectScreen";

const Stack = createNativeStackNavigator();


export default function ProjectNavigation() {
    return (
        <Stack.Navigator initialRouteName="CreateProjetScreen"
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
                name="CreateProjetScreen"
                component={CreateProjetScreen}
                options={{
                    headerShown: false,
                }}
            />        
            <Stack.Screen 
                name="NewProjectScreen"
                component={NewProjectScreen}
                options={{
                    headerShown: false,

                }}
            />        
            <Stack.Screen 
                name="ProjectScreen"
                component={ProjectScreen}
                options={{
                    headerShown: false,

                }}
            />        
        </Stack.Navigator>
    );
}

