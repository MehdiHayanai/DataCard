import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
// You can import supported modules from npm
import DataCardScreen from './components/DataCardScreen';
import ExperienceScreen from './components/ExperienceScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BrightnessCard from './components/Cards/BrightnessCard';
import ColorCard from './components/Cards/ColorCard';
import ContactCard from './components/Cards/ContactCard';
import ElevationCard from './components/Cards/ElevationCard';
import ForceCard from './components/Cards/ForceCard';
import GasCard from './components/Cards/GasCard';
import OrientationCard from './components/Cards/OrientationCard';
import PositionCard from './components/Cards/PositionCard';
import ProximityCard from './components/Cards/ProximityCard';
import SoundCard from './components/Cards/SoundCard';
import SpeedCard from './components/Cards/SpeedCard';
import TemperatureCard from './components/Cards/TemperatureCard';
import VibrationCard from './components/Cards/VibrationCard';
import HumidityCard from './components/Cards/HumidityCard';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Vibration'>
        <Stack.Screen name="DataCard" component={DataCardScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen}  />
        <Stack.Screen name="Temperature" component={TemperatureCard} />        
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 0,
    margin: 0,
  },
  center: {
    margin: 0,
    flex: 1,
    display: "flex",
    alignItems: "center",
  }

});
