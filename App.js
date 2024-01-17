import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import ExperienceNavigation from './components/navigationWrapper/ExperienceNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProjectScreen from './components/CreateProjetScreen';
import DataCardNavigation from './components/navigationWrapper/DataCardNavigation';
import ProjectNavigation from './components/navigationWrapper/ProjectNavigation';
import HistoryScreens from './components/HistoryScreens';
import Header from './components/ui/Header';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



export default function App() {
  

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='ProjectNavigation'
        screenOptions={
          ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'DataCardNavigation') {
                iconName = 'cube';
              } else if (route.name === 'ExperienceNavigation') {
                iconName = 'stats-chart';
              } else if (route.name === 'ProjectNavigation') {
                iconName = 'add-circle';
              } else if (route.name === 'HistoriqueScreen') {
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
              height: 100, 
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
        <Tab.Screen name="ExperienceNavigation" component={ExperienceNavigation} 
          options={{
            title: 'Experience',
            tabBarLabel: 'Experience',
            headerTitle: (props) => <Header {...props} title={"Experience"} /> 

          }}
        />
        <Tab.Screen name="ProjectNavigation" component={ProjectNavigation} 
          options={{
            title: 'Projects',
            tabBarLabel: 'Projects',
            headerTitle: (props) => <Header {...props} title={"Nouveau projet"} /> 

          }}
        />
        <Tab.Screen name="HistoriqueScreen" component={HistoryScreens} 
          options={{
            title: 'Historique',
            tabBarLabel: 'Historique',
            headerTitle: (props) => <Header {...props} title={"Historique"} /> 
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
