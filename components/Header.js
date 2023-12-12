import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function Header({title}) {
    return (
        <View style={styles.header}>
        <Image
            source={require('../assets/icons/user-rounded-svgrepo-com.png')}
            style={styles.logo}
        />
        <Text style={styles.title}>
          {title}
        </Text>
        <Image
            source={require('../assets/icons/settings-svgrepo-com.png')}
            style={styles.logo}
        />
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        marginTop: 10,
    },
    logo: {
        width: 40,
        height: 40,
    },
    title: {
      color: "#82B4DD",
      fontWeight: "bold",
      fontSize: 25,
    }
});
