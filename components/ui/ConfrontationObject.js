import {useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, DeviceEventEmitter} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import ExperienceObject from './ExperienceObject';
import DataCardObject from './DataCardObject';
import { StaticDataCards, StaticExperiences } from '../staticVariables/CommonVaribales';


const ConfrontationObject = (props) => {
  const {item, navigation} = props;
  const values = item.values;
  const experience = StaticExperiences.find((el) => el.experience === values[0]);
  const datacard = StaticDataCards.find((el) => el.name === values[1]);



  useEffect(() => {
    console.log("ConfrontationObject");
    console.log(values);
  }, []);
  
  return (
    <View style={styles.confrontationContainer}>
        <ExperienceObject key={experience.id} item={experience} navigation={navigation}/>
        <Entypo name="cross" size={30} color="#7FB8E1" />
        <DataCardObject key={datacard.id + "dataCard"} item={datacard} navigation={navigation}/>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("ConfrontationTemplate", {datacard: datacard, experience: experience, item: item})}>
          <Ionicons name="chevron-forward-outline" size={30} color="white" />
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    confrontationContainer: {
        flexDirection: "row",
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 10,
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        elevation:1,
        borderRadius: 10,
        shadowOffset: { width: 1, height: 1 },
    },
    nextButton: {
        marginHorizontal: 10,
        backgroundColor: "#6759F4",
        borderRadius: 200,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    }
    });


export default ConfrontationObject;
