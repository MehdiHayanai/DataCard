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
        margin: {
            t: 25,
            b: 25,
            l: 25,
            r: 25,
          },
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
            <View style={styles.plotContainer}>
                <Plotly data={data} layout={layout}/>
            </View>
            <View style={styles.plotContainer}>
                <Plotly data={data} layout={layout}/>
            </View>
            <View style={styles.plotContainer}>
                <Plotly data={data} layout={layout}/>
            </View>
            <Navigation active={"Datacard"} navigation={navigation}/> 

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 0,
        marginTop: 5,

    },
    plotContainer : {
        flex: 0.1,
        backgroundColor: '#ecf0f1',
        padding: 0,
        margin: 0,
    },

});
