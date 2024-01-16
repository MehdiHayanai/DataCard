import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import DefinitionScreen from '../Experience/DefinitionScreen';
import DataCardScreen from "../DataCardScreen";

const Stack = createNativeStackNavigator();

export default function DataCardNavigation() {
    return (
        <Stack.Navigator 
            
        >
            <Stack.Screen
                 name="DataCardScreen"
                 component={DataCardScreen} 
                 options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}