import React from "react";
import { View, StyleSheet, Text } from "react-native";
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
import DataCardScreen from "../DataCardScreen";
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();
const CustomHeader = ({props, title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.titleStyle}>
                {title}
            </Text>
        </View>
    );
}

export default function DataCardNavigation() {
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
                 name="DataCardScreen"
                 component={DataCardScreen} 
                 options={{ headerShown: false }}

            />
            <Stack.Screen 
                name="Temperature" 
                component={TemperatureCard}
            />        
            <Stack.Screen name="Contact" component={ContactCard} />        
            <Stack.Screen name="Gas" component={GasCard} />        
            <Stack.Screen name="Orientation" component={OrientationCard} />        
            <Stack.Screen name="Force" component={ForceCard} />        
            <Stack.Screen name="Brightness" component={BrightnessCard} />        
            <Stack.Screen name="Elevation" component={ElevationCard} />        
            <Stack.Screen name="Color" component={ColorCard} />        
            <Stack.Screen name="Position" component={PositionCard} />        
            <Stack.Screen name="Proximity" component={ProximityCard} />        
            <Stack.Screen name="Sound" component={SoundCard} />        
            <Stack.Screen name="Vibration" component={VibrationCard} />        
            <Stack.Screen name="Speed" component={SpeedCard} />        
            <Stack.Screen name="Humidity" component={HumidityCard} />          
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingBottom: 10,
    },
    logo: {
        width: 40,
        height: 40,
    },
    titleStyle: {
      color: "#82B4DD",
      fontSize: 20,
      fontWeight: "bold",
    }
});