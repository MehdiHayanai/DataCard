import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';




export const ProjectObject = ({ project }) => {
    const {  name, description } = project;
    const navigation = useNavigation();

    return (
        <View style={styles.project}>
        <TouchableOpacity onPress={() => navigation.navigate('ProjectScreen', { project })}>
            <Text style={styles.projectName}>{name}</Text>
        </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    project: {
        backgroundColor: '#F8F8F8',
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 1,
        shadowOffset: { width: 1, height: 1 },
    },
    projectName: {
        fontSize: 18,
        fontFamily: "Roboto",
        color: "#7FB8E1",
    },
    projectDescription: {
        fontSize: 14,
        fontFamily: "Roboto",
        color: "#BABEC2",
    },
});