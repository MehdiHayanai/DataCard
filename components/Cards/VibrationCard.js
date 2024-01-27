import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Accelerometer } from "expo-sensors";
import Plotly from "react-native-plotly";

export default VibrationCard = ({ navigation }) => {
  const [accelerationData, setAccelerationData] = useState([]);
  const transformationVariable = 9.81; // mm/s²

  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [zData, setZData] = useState([]);

  const layout = {
    template: "plotly_dark",
    margin: {
      t: 25,
      b: 25,
      l: 25,
      r: 25,
    },
  };
  const [subscription, setSubscription] = useState(null);

  const accelerationTomPerSecSquare = (data) => {
    return {
      x: data.x * transformationVariable,
      y: data.y * transformationVariable,
      z: (data.z - 1) * transformationVariable,
    };
  };
  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(handleAcceleration));
    Accelerometer.setUpdateInterval(500);
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const handleAcceleration = (acceleration) => {
    setAccelerationData((prevData) => [
      ...prevData,
      accelerationTomPerSecSquare(acceleration),
    ]);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    const dataLength = accelerationData.length;
    const startIndex = dataLength > 100 ? dataLength - 100 : 0;

    const slicedAccelerationData = accelerationData.slice(startIndex);

    const xDataPoints = slicedAccelerationData.map((_, index) => index);

    setXData({
      x: xDataPoints,
      y: slicedAccelerationData.map((data) => data.x),
      type: "scatter",
      mode: "lines",
      marker: { color: "blue" },
      name: "X-axis",
    });

    setYData({
      x: xDataPoints,
      y: slicedAccelerationData.map((data) => data.y),
      type: "scatter",
      mode: "lines",
      marker: { color: "red" },
      name: "Y-axis",
    });

    setZData({
      x: xDataPoints,
      y: slicedAccelerationData.map((data) => data.z),
      type: "scatter",
      mode: "lines",
      marker: { color: "green" },
      name: "Z-axis",
    });
  }, [accelerationData]);

  return (
    <View style={styles.container}>
      <View style={styles.plotContainer}>
        <Text>Accélération X</Text>
        <Plotly data={[xData]} layout={layout} style={styles.plot} />
      </View>
      <View style={styles.plotContainer}>
        <Text>Accélération Y</Text>
        <Plotly data={[yData]} layout={layout} style={styles.plot} />
      </View>
      <View style={styles.plotContainer}>
        <Text>Accélération Z</Text>
        <Plotly data={[zData]} layout={layout} style={styles.plot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  plotContainer: {
    flex: 0.3,
    marginVertical: 5,
  },
  plot: {
    flex: 1,
  },
});
