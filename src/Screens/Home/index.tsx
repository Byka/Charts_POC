import React from 'react';
import {
  Dimensions,
  processColor,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {
  BarChart,
  BubbleChart,
  CandleStickChart,
  CombinedChart,
  HorizontalBarChart,
  LineChart,
  PieChart,
  RadarChart,
  ScatterChart,
} from 'react-native-charts-wrapper';

const {width} = Dimensions.get('window');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const barData = {
    dataSets: [
      {
        values: [{y: 5}, {y: 40}, {y: 77}, {y: 81}, {y: 43}],
        label: 'Bar dataset',
        config: {
          color: 'teal',
          barShadowColor: 'lightgrey',
          highlightAlpha: 90,
          highlightColor: 'red',
        },
      },
    ],
  };

  const lineData = {
    dataSets: [
      {
        values: [{y: 1}, {y: 2}, {y: 3}, {y: 4}, {y: 5}],
        label: 'Line dataset',
        config: {
          color: 'blue',
          drawFilled: true,
          fillColor: 'lightblue',
          fillAlpha: 50,
          lineWidth: 2,
        },
      },
    ],
  };

  const pieData = {
    dataSets: [
      {
        values: [
          {value: 40, label: 'A'},
          {value: 20, label: 'B'},
          {value: 30, label: 'C'},
        ],
        label: 'Pie dataset',
        config: {
          colors: [
            processColor('red'),
            processColor('green'),
            processColor('blue'),
          ],
          valueTextSize: 20,
          valueTextColor: processColor('white'),
          sliceSpace: 5,
          selectionShift: 13,
        },
      },
    ],
  };

  const scatterData = {
    dataSets: [
      {
        values: [
          {x: 1, y: 2},
          {x: 2, y: 3},
          {x: 3, y: 4},
          {x: 4, y: 5},
        ],
        label: 'Dataset 1',
        config: {
          color: processColor('blue'),
          scatterShape: 'CIRCLE',
        },
      },
      {
        values: [
          {x: 1, y: 5},
          {x: 2, y: 3},
          {x: 3, y: 1},
          {x: 4, y: 7},
        ],
        label: 'Dataset 2',
        config: {
          color: processColor('red'),
          scatterShape: 'SQUARE',
        },
      },
    ],
  };

  const radarData = {
    dataSets: [
      {
        values: [4, 5, 6, 7, 8],
        label: 'Dataset 1',
        config: {
          color: processColor('teal'),
          fillColor: processColor('teal'),
          fillAlpha: 100,
          drawFilled: true,
          lineWidth: 2,
        },
      },
      {
        values: [3, 6, 2, 9, 5],
        label: 'Dataset 2',
        config: {
          color: processColor('purple'),
          fillColor: processColor('purple'),
          fillAlpha: 100,
          drawFilled: true,
          lineWidth: 2,
        },
      },
    ],
  };

  const radarConfig = {
    labels: ['Speed', 'Strength', 'Skill', 'Endurance', 'Agility'],
    labelCount: 5,
    labelColor: processColor('black'),
    axisMinimum: 0,
    axisMaximum: 10,
    drawWeb: true,
  };

  const bubbleData = {
    dataSets: [
      {
        values: [
          {x: 1, y: 2, size: 1.5},
          {x: 2, y: 3, size: 2.5},
          {x: 3, y: 4, size: 3.5},
          {x: 4, y: 5, size: 4.5},
        ],
        label: 'Bubble dataset',
        config: {
          color: processColor('blue'),
        },
      },
    ],
  };

  const candleData = {
    dataSets: [
      {
        values: [
          {shadowH: 10, shadowL: 5, open: 7, close: 8},
          {shadowH: 13, shadowL: 8, open: 11, close: 9},
          {shadowH: 15, shadowL: 10, open: 13, close: 12},
          {shadowH: 20, shadowL: 10, open: 18, close: 15},
        ],
        label: 'Candle dataset',
        config: {
          highlightColor: processColor('darkgray'),
          shadowColor: processColor('black'),
          shadowWidth: 1,
          increasingColor: processColor('green'),
          increasingPaintStyle: 'FILL',
          decreasingColor: processColor('red'),
        },
      },
    ],
  };

  const combinedData = {
    barData: {
      dataSets: [
        {
          values: [5, 10, 15, 20],
          label: 'Bar dataset',
          config: {
            color: processColor('blue'),
          },
        },
      ],
    },
    lineData: {
      dataSets: [
        {
          values: [8, 16, 18, 25],
          label: 'Line dataset',
          config: {
            color: processColor('red'),
            lineWidth: 2,
          },
        },
      ],
    },
  };

  const horizontalBarData = {
    dataSets: [
      {
        values: [5, 10, 15, 20],
        label: 'Horizontal Bar dataset',
        config: {
          color: processColor('purple'),
          barShadowColor: processColor('lightgray'),
          highlightAlpha: 90,
          highlightColor: processColor('red'),
        },
      },
    ],
  };

  const stackedBarData = {
    dataSets: [
      {
        values: [{y: [5, 15]}, {y: [10, 20]}, {y: [15, 25]}],
        label: 'Stacked Bar dataset',
        config: {
          colors: [processColor('green'), processColor('blue')],
          stackLabels: ['Stack 1', 'Stack 2'],
        },
      },
    ],
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View style={styles.container}>
          <Text style={styles.title}>Bar Chart</Text>
          <BarChart
            style={styles.chart}
            data={barData}
            xAxis={{granularity: 1}}
            animation={{durationX: 2000}}
          />

          <Text style={styles.title}>Line Chart</Text>
          <LineChart
            style={styles.chart}
            data={lineData}
            xAxis={{granularity: 1}}
            animation={{durationX: 2000}}
          />

          <Text style={styles.title}>Pie Chart</Text>
          <PieChart
            style={styles.chart}
            data={pieData}
            legend={{
              enabled: true,
              textSize: 14,
              form: 'CIRCLE',
              position: 'BELOW_CHART_CENTER',
            }}
            entryLabelColor={processColor('black')}
            entryLabelTextSize={16}
            rotationEnabled
            rotationAngle={45}
            usePercentValues={false}
            styledCenterText={{
              text: 'Pie Chart',
              color: processColor('pink'),
              size: 20,
            }}
            centerTextRadiusPercent={100}
            holeRadius={40}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={45}
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={360}
          />

          <Text style={styles.title}>Scatter Chart</Text>
          <ScatterChart
            style={styles.chart}
            data={scatterData}
            xAxis={{granularity: 1, position: 'BOTTOM'}}
            yAxis={{left: {granularity: 1}}}
            animation={{durationX: 1500}}
          />

          <Text style={styles.title}>Radar Chart</Text>
          <RadarChart
            style={styles.chart}
            data={radarData}
            xAxis={{valueFormatter: radarConfig.labels}}
            yAxis={{
              axisMinimum: radarConfig.axisMinimum,
              axisMaximum: radarConfig.axisMaximum,
            }}
            chartDescription={{text: 'Radar Chart Example'}}
            webLineWidth={1}
            webLineWidthInner={1}
            webAlpha={100}
            drawWeb={true}
          />

          <Text style={styles.title}>Bubble Chart</Text>
          <BubbleChart
            style={styles.chart}
            data={bubbleData}
            xAxis={{granularity: 1, position: 'BOTTOM'}}
            yAxis={{left: {granularity: 1}}}
            animation={{durationX: 1500}}
          />

          <Text style={styles.title}>Candle Stick Chart</Text>
          <CandleStickChart
            style={styles.chart}
            data={candleData}
            xAxis={{granularity: 1, position: 'BOTTOM'}}
            yAxis={{left: {granularity: 1}}}
            animation={{durationX: 1500}}
          />

          <Text style={styles.title}>Combined Chart</Text>
          <CombinedChart
            style={styles.chart}
            data={combinedData}
            xAxis={{granularity: 1, position: 'BOTTOM'}}
            yAxis={{left: {granularity: 1}}}
            animation={{durationX: 1500}}
          />

          <Text style={styles.title}>Horizontal Bar Chart</Text>
          <HorizontalBarChart
            style={styles.chart}
            data={horizontalBarData}
            xAxis={{granularity: 1, position: 'BOTTOM'}}
            yAxis={{left: {granularity: 1}}}
            animation={{durationX: 1500}}
          />

          <Text style={styles.title}>Stacked Bar Chart</Text>
          <BarChart
            style={styles.chart}
            data={stackedBarData}
            xAxis={{granularity: 1, position: 'BOTTOM'}}
            yAxis={{left: {granularity: 1}}}
            animation={{durationX: 1500}}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  chart: {
    height: 300,
    width: width - 40,
    marginVertical: 20,
  },
});

export default App;
