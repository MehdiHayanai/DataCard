import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import DataCardScreen from './components/DataCardScreen';
import ExperienceScreen from './components/ExperienceScreen';
import TemperatureData from './components/TemperatureData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './components/Navigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DataCard'>
        <Stack.Screen name="DataCard" component={DataCardScreen} />
        <Stack.Screen name="Expérience" component={ExperienceScreen} />
        <Stack.Screen name="Temperature" component={TemperatureData} />        
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
