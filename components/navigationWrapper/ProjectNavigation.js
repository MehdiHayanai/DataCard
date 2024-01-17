import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewProjectScreen from "../NewProjectScreen";
import CreateProjetScreen from "../CreateProjetScreen";
import ProjectScreen from "../ProjectScreen";
import DefinitionScreen from "../Experience/DefinitionScreen";
import BrightnessCard from '../Cards/BrightnessCard';
import ColorCard from '../Cards/ColorCard';
import ContactCard from '../Cards/ContactCard';
import ElevationCard from '../Cards/ElevationCard';
import ForceCard from '../Cards/ForceCard';
import GasCard from '../Cards/GasCard';
import OrientationCard from '../Cards/OrientationCard';
import PositionCard from '../Cards/PositionCard';
import ProximityCard from '../Cards/ProximityCard';
import SoundCard from '../Cards/SoundCard';
import SpeedCard from '../Cards/SpeedCard';
import TemperatureCard from '../Cards/TemperatureCard';
import VibrationCard from '../Cards/VibrationCard';
import HumidityCard from '../Cards/HumidityCard';

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
            <Stack.Screen 
                name="DefinitionScreen"
                component={DefinitionScreen}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen 
                name="Temperature" 
                options={{
                    title: "Temperature",
                }}
                component={TemperatureCard}
            />        
            <Stack.Screen 
                name="Contact"
                component={ContactCard}
                options={{
                    title: "Contact",
                }} 
            />        
            <Stack.Screen 
                name="Gas"
                component={GasCard}
                options={{
                    title: "Gas",
                }} 
            />        
            <Stack.Screen 
                name="Orientation"
                component={OrientationCard}
                options={{
                    title: "Orientation",
                }} 
            />        
            <Stack.Screen 
                name="Force"
                component={ForceCard}
                options={{
                    title: "Force",
                }} 
            />        
            <Stack.Screen 
                name="Brightness"
                component={BrightnessCard}
                options={{
                    title: "Brightness",
                }} 
            />        
            <Stack.Screen 
                name="Elevation"
                component={ElevationCard}
                options={{
                    title: "Elevation",
                }} 
            />        
            <Stack.Screen 
                name="Color"
                component={ColorCard}
                options={{
                    title: "Color",
                }} 
            />        
            <Stack.Screen 
                name="Position"
                component={PositionCard}
                options={{
                    title: "Position",
                }} 
            />        
            <Stack.Screen 
                name="Proximity"
                component={ProximityCard}
                options={{
                    title: "Proximity",
                }} 
            />        
            <Stack.Screen 
                name="Sound"
                component={SoundCard}
                options={{
                    title: "Sound",
                }} 
            />        
            <Stack.Screen 
                name="Vibration"
                component={VibrationCard}
                options={{
                    title: "Vibration",
                }} 
            />        
            <Stack.Screen 
                name="Speed"
                component={SpeedCard}
                options={{
                    title: "Speed",
                }} 
            />        
            <Stack.Screen 
                name="Humidity"
                component={HumidityCard}
                options={{
                    title: "Humidity",
                }} 
            />  

        </Stack.Navigator>
    );
}

