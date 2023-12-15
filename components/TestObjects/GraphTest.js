import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, Dimensions} from "react-native";
import Plotly from "react-native-plotly";





export default GraphTest = () => {
    const initialWindowWidth = Dimensions.get('window').width;  
    const [windowWith, setwindowWith] = useState(initialWindowWidth);
    const data = [{
        x : [1, 2, 3, 4, 5, 8, 9, 10],
        y : [1, 2, 3, 4, 5, 8, 9, 10],
        type : 'scatter',
        mode: 'markers+lines',
        marker: { color: 'blue' },
        name: 'X-axis',
    }]
    const layout = {
        width: windowWith*1.3,
    }
    
    useEffect(() => {
        const onChange = () => {
            setwindowWith(Dimensions.get('window').width);
            console.log(windowWith);
        }
        Dimensions.addEventListener("change", onChange);

        return () => {
            Dimensions.removeEventListner("change", onChange);
        }

    }, [])
    return (
        <View style={styles.container}>
            <Text>Hello world test </Text>
            <Plotly data={data} layout={layout} style={styles.plotContainer}/>
            <Text>Hello world test</Text>

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
    plotContainer : {
        paddingTop: -50,
        marginHorizontal: 20,
    },

});
