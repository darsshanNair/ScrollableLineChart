/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { LineChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';

class App extends React.PureComponent {

  calibrateChartWidth(dataLength) {
    var factoredLength = dataLength.length * 20;
    var calibratedChartWidth = factoredLength + 400;
    return calibratedChartWidth;
  }

  render() {
    // Increase data length to see how the dynamic scaling works
    const data = [
      50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
      50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80,
    ];

    const contentInset = { top: 20, bottom: 20 };

    return (
      <SafeAreaView>
        <View style={styles.chartWrapperView}>
          <YAxis
            style={{ height: 400, width: 35 }}
            data={data}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => `${value}ºC`}
          />
          <ScrollView
            horizontal="true"
            contentInsetAdjustmentBehavior="automatic"
            indicatorStyle="black"
            style={styles.scrollView}>
            <LineChart
              style={[styles.lineChart, { width: this.calibrateChartWidth(data) }]}
              data={data}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={{ top: 20, bottom: 20 }}
            >
              <Grid />
            </LineChart>
            <XAxis
              data={data}
              formatLabel={(value, index) => index}
              contentInset={{ left: 10, right: 10 }}
              svg={{ fontSize: 10, fill: 'black' }}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flexDirection: 'row',
    marginRight: 20,
  },
  chartWrapperView: {
    flexDirection: 'row',
  },
  lineChart: {
    height: 400,
  },
});

export default App;
