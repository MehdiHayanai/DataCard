import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
// You can import supported modules from npm
import ExperienceScreen from './components/ExperienceScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProjectScreen from './components/ProjectScreen';
import NewProjectScreen from './components/NewProjectScreen';
import DataCardNavigation from './components/navigationWrapper/DataCardNavigation';
import Header from './components/Header';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



export default function App() {
  

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='DataCardScreen'
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'DataCardNavigation') {
                iconName = 'cube';
              } else if (route.name === 'ExperienceScreen') {
                iconName = 'stats-chart';
              } else if (route.name === 'ProjectScreen') {
                iconName = 'add-circle';
              } else if (route.name === 'NewProjectScreen') {
                iconName = 'book';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={26} color={color} />;
            },
            tabBarActiveTintColor: '#7FB8E1',
            tabBarInactiveTintColor: '#BABEC2',
            tabBarStyle: {
              backgroundColor: '#F5F5F5',
              paddingBottom: 10,
              height: 70,              
            },
            tabBarLabelStyle: {
              fontSize: 12,
              marginTop: -5,
            },
            tabBarHideOnKeyboard : true,
            headerTintColor: '#7FB8E1',
            headerStyle: {
              height: 85, 
            },

          })
        }

      >
        <Tab.Screen name="DataCardNavigation"  component={DataCardNavigation} 
          options={{
            title: 'Data Cards',
            tabBarLabel: 'Data Cards',
            headerTitle: (props) => <Header {...props} title={"Data Cards"} /> 

          }}
        />
        <Tab.Screen name="ExperienceScreen" component={ExperienceScreen} 
          options={{
            title: 'Experience',
            tabBarLabel: 'Experience',
          }}
        />
        <Tab.Screen name="ProjectScreen" component={ProjectScreen} 
          options={{
            title: 'Projects',
            tabBarLabel: 'Projects',
          }}
        />
        <Tab.Screen name="NewProjectScreen" component={NewProjectScreen} 
          options={{
            title: 'Historique',
            tabBarLabel: 'Historique',
          }}
        />
      </Tab.Navigator>
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
