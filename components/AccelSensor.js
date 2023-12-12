import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';
// import { LineChart } from 'react-native-chart-wrapper';

// const barData = [
//     {value: 250, label: 'M'},
//     {value: 500, label: 'T', frontColor: '#177AD5'},
//     {value: 745, label: 'W', frontColor: '#177AD5'},
//     {value: 320, label: 'T'},
//     {value: 600, label: 'F', frontColor: '#177AD5'},
//     {value: 256, label: 'S'},
//     {value: 300, label: 'S'},
// ];




export default function AccelSensor() {
  const [accelerationData, setAccelerationData] = useState({
    x: [],
    y: [],
    z: [],
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(handleAcceleration));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const handleAcceleration = (acceleration) => {
    setAccelerationData((prevData) => ({
      x: [...prevData.x, acceleration.x],
      y: [...prevData.y, acceleration.y],
      z: [...prevData.z, acceleration.z],
    }));
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  // const chartData = [
  //   {
  //     data: accelerationData.x,
  //     color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
  //   },
  //   {
  //     data: accelerationData.y,
  //     color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
  //   },
  //   {
  //     data: accelerationData.z,
  //     color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
  //   },
  // ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
      <Text style={styles.text}>x: {accelerationData.x.length > 0 ? accelerationData.x.slice(-1)[0] : 0}</Text>
      <Text style={styles.text}>y: {accelerationData.y.length > 0 ? accelerationData.y.slice(-1)[0] : 0}</Text>
      <Text style={styles.text}>z: {accelerationData.z.length > 0 ? accelerationData.z.slice(-1)[0] : 0}</Text>


      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
  },
  chart: {
    height: 200,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});
