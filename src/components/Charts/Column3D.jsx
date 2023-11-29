import React from 'react';
import ReactDOM from 'react-dom';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Chart from 'fusioncharts/fusioncharts.charts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        theme: 'fusion',
        caption: 'Most Popular Language',
        yAxisName: 'Stars',
        xAsixName: 'Repos',
        xAsixNameFontSize: '16px',
        yAsixNameFontSize: '16px',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs}></ReactFC>;
};

export default ChartComponent;
