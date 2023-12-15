import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
        <Image
            source={require('../assets/icons/user-rounded-svgrepo-com.png')}
            style={styles.logo}
        />
        <Image
            source={require('../assets/icons/settings-svgrepo-com.png')}
            style={styles.logo}
        />
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
      
    },
    logo: {
        width: 30,
        height: 30,
    },
    title: {
      color: "#82B4DD",
      fontWeight: "bold",
      fontSize: 25,
      marginLeft: 10,
    }
});
