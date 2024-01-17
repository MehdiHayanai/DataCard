import * as React from 'react';
import { View, Image, StyleSheet, Text, useWindowDimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function Header({props, title}) {
    // use hook to get the size of the screen
    const { width, height } = useWindowDimensions();
    // use use navigation hook to get access to the navigation object
    const navigation = useNavigation();
    // calculate the safe area for the header
    const halfSafeArea = width *0.05;

    return (
        <View style={[styles.header, {width: width, marginLeft: -halfSafeArea}]}>
            <TouchableOpacity onPress={() => navigation.navigate('DataCardNavigation')}>
                <FontAwesome5 name="user-alt" size={25} color="#7FB8E1" />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>
                {title}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('DataCardNavigation')}>
                <FontAwesome name="gear" size={28} color="#7FB8E1" />
            </TouchableOpacity>
        </View>
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
      fontFamily: "Roboto",
      fontSize: 25,
      fontWeight: "bold",
    }
});
