import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import Plotly from 'react-native-plotly';

export default AccelCard = () => {
  const [accelerationData, setAccelerationData] = useState([]);

  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [zData, setZData] = useState([]);

  const [layout, setLayout] = useState({
    title: 'Accelerometer Data',
    grid: { rows: 3, columns: 1 },
  });

  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(1000);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(handleAcceleration));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const handleAcceleration = (acceleration) => {
    setAccelerationData((prevData) => [...prevData, acceleration]);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    const xDataPoints = accelerationData.map((_, index) => index);

    setXData({
      x: xDataPoints,
      y: accelerationData.map((data) => data.x),
      type: 'scatter',
      mode: 'lines',
      marker: { color: 'blue' },
      name: 'X-axis',
    });

    setYData({
      x: xDataPoints,
      y: accelerationData.map((data) => data.y),
      type: 'scatter',
      mode: 'lines',
      marker: { color: 'red' },
      name: 'Y-axis',
    });

    setZData({
      x: xDataPoints,
      y: accelerationData.map((data) => data.z),
      type: 'scatter',
      mode: 'lines',
      marker: { color: 'green' },
      name: 'Z-axis',
    });

    setLayout({
      ...layout,
      yaxis: { title: 'X-axis' },
      yaxis2: { title: 'Y-axis' },
      yaxis3: { title: 'Z-axis' },
      height: 300, // Adjust the height of the graphs
      width: 500, // Adjust the width of the graphs (100% of parent container)
    });
  }, [accelerationData]);

  return (
    <View style={styles.container}>
      <View style={styles.plotContainer}>
        <Plotly
          data={[xData]}
          layout={layout}
          debug
          enableFullPlotly
          style={styles.plot}
        />
      </View>
      <View style={styles.plotContainer}>
        <Plotly
          data={[yData]}
          layout={layout}
          debug
          enableFullPlotly
          style={styles.plot}
        />
      </View>
      <View style={styles.plotContainer}>
        <Plotly
          data={[zData]}
          layout={layout}
          debug
          enableFullPlotly
          style={styles.plot}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  plotContainer: {
    flex: 1,
    marginVertical: 5,
  },
  plot: {
    flex: 1,
  },
});
