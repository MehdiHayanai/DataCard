import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Plotly from 'react-native-plotly';

const upData = {
  __id: 'up',
  x: [1, 2, 3, 4, 5, 6],
  y: [20.9, 21.6, 20.5, 21.1, 21.5, 21.4],
  type: 'scatter'
};

export default class GraphTest extends React.Component {
  state = {
    data: [upData],
    layout: { title: 'Temperature graph' },
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.addDataPoint();
    }, 1000); // Add a new data point every 1 second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addDataPoint = () => {
    const newData = { ...this.state.data[0] };
    const lastX = newData.x[newData.x.length - 1] + 1; // Increment last x value
    const signeT = Math.random() < 0.5 ? -1 : 1;
    const newY = signeT*(Math.random()*0.02) + newData.y[newData.y.length - 1]; // Random y value between 1 and 10
    newData.x.push(lastX);
    newData.y.push(newY);
    this.setState({ data: [newData] });
  };

  update = (_, { data, layout, config }, plotly) => {
    plotly.react(data, layout, config);
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.chartRow}>
          <Plotly
            data={this.state.data}
            layout={this.state.layout}
            update={this.update}
            onLoad={() => console.log('loaded')}
            debug
            enableFullPlotly
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row'
  },
  chartRow: {
    flex: 1,
    width: '100%'
  },
  container: {
    paddingTop: 30,
    width: '100%',
    height: '85%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
