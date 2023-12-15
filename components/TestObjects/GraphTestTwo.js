import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, Dimensions} from "react-native";
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'






export default GraphTestTwo = () => {
    const data = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];

    return (
        <View style={styles.container}>
            <Text>Hello world test </Text>
            <Chart
                style={{ height: 200, width: 400 }}
                data={[
                    { x: -2, y: 15 },
                    { x: -1, y: 10 },
                    { x: 0, y: 12 },
                    { x: 1, y: 7 },
                    { x: 2, y: 6 },
                    { x: 3, y: 8 },
                    { x: 4, y: 10 },
                    { x: 5, y: 8 },
                    { x: 6, y: 12 },
                    { x: 7, y: 14 },
                    { x: 8, y: 12 },
                    { x: 9, y: 13.5 },
                    { x: 10, y: 18 },
                ]}
                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                xDomain={{ min: -2, max: 10 }}
                yDomain={{ min: 0, max: 20 }}
                >
            </Chart>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 0,
        margin: 0,
    },


});
