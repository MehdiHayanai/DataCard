import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import DataCardObject from '../ui/DataCardObject';
import ExperienceObject from '../ui/ExperienceObject';

const ConfrontationTemplate = ({navigation, route}) => {
    const {datacard, experience} = route.params;
    const [confrontation, onChangeConfrontation] = useState("");
    const placeholder = "Confronter l'expérience de " + experience.experience + " avec la carte de données " + datacard.name  + "."
    console.log(experience)
    return (

        <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView keyboardDismissMode="on-drag" style={styles.ScrollView}>
                <View style={styles.center}>
                    <Text style={{fontSize: 25, fontWeight: "bold", margin: 15, color: "#82B4DD"}}>Confrontation</Text>
                </View>
                <View style={styles.confrontationContainer}>
                        <DataCardObject key={datacard.id + "dataCard"} item={datacard} navigation={navigation}/>
                        <Entypo name="cross" size={50} color="#7FB8E1" />
                        <ExperienceObject key={experience.id} item={experience} navigation={navigation}/>
                </View>
                <View style={styles.inputContainer}>
                    <ScrollView keyboardDismissMode="on-drag" style={{height: 250}}>
                    <TextInput
                            style={[styles.input]}
                            onChangeText={onChangeConfrontation}
                            value={confrontation}
                            placeholder={placeholder}
                            multiline={true}
                            />
                    </ScrollView>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.aiButton}>
                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <MaterialCommunityIcons name="robot-excited" size={35} color="white" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
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
      display: "flex",
      alignItems: "center",
    },
    confrontationContainer: {
        flexDirection: "row",
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },
    inputContainer : {
        alignItems: "center",
        margin: 20,
        minHeight: 250,
    },
    ScrollView: {
        flex: 2,
    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        width: 300,
        borderRadius: 5,
        borderColor: "#c0c4c1",
        textAlignVertical: "top",
        minHeight: 300,
    },
    aiButton: {
        position: "absolute",
        backgroundColor: "#6759F4",
        borderRadius: 200,
        height: 65,
        width: 65,
        justifyContent: "center",
        alignItems: "center",
        alignItems: "center",
        bottom: 10,
        right: 20,
        padding: 0,
        margin: 0,
        paddingBottom: 5,
    }
    
});

export default ConfrontationTemplate;