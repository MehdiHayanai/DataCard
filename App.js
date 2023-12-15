import { Text, Image, SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import DataCardScreen from './components/DataCardScreen';
import ExperienceScreen from './components/ExperienceScreen';
import TemperatureData from './components/TemperatureData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AccelCard from './components/Cards/AccelCard';
import GraphTest from './components/TestObjects/GraphTest';

const Stack = createNativeStackNavigator();


const HeaderTmp = ({title}) => {
  return (
    <View style={styles.header}>
        <Image
            source={require('./assets/icons/user-rounded-svgrepo-com.png')}
            style={styles.logo}
        />
      <Text style={styles.title}>
        {title}
      </Text>
      <Image
            source={require('./assets/icons/settings-svgrepo-com.png')}
            style={styles.logo}
        />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Temperature'>
        <Stack.Screen name="DataCard" component={DataCardScreen} options={{ headerTitle: (props) => <HeaderTmp title="DataCard" {...props} />, headerTintColor: '#82B4DD',} }/>
        <Stack.Screen name="Experience" component={ExperienceScreen} options={{ headerTitle: (props) => <HeaderTmp title="Expérience" {...props} />}}  />
        <Stack.Screen name="Temperature" component={GraphTest} />        
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
  },
  header: {
    alignItems: 'center', // Aligns children components along the cross-axis (vertically in a row)
    justifyContent: 'space-between', // Aligns children components along the main axis (horizontally in a row)
    flexDirection: "row", // Displays children components in a row
    marginTop: 25,
    width: 300,

  },
  logo: {
    width: 40,
    height: 40,
},

});
