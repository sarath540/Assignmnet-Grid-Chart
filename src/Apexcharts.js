import React, { Component } from "react";
import Chart from 'react-apexcharts'
import Task from './Task'
import axios from 'axios';

class ApexChartsData extends Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.state = {
      headingText: 'Time Details',
      options: {
        colors: ['#ccc', '#0000FF', '#87ceeb', '#00ffff'],
        chart: {
          id: "basic-bar",
          type: "line",
          height: 350,
          width: 10,
          stacked: true,
          toolbar: {
            show: true
          },
         
          
          title: {
            text: 'React Charts',
         },
        },
        plotOptions: {
          bar: {
            
            columnWidth: '25%',
            
          }
        },
        noData: {
          text: 'Loading...'
        },
        xaxis: {
          categories: ['12/1', '12/2', '12/3', '12/4', '12/5', '12/6']
        },

      },

      series: [],
    };
  }

  fetchData() {
    axios.get('data.json').then(
      res => {
        console.log(res.data.defaultReport.charts);
        this.setState({
          series: res.data.defaultReport.charts
        });

      }
    ).catch(err => console.log(err))
  };

  componentDidMount = () => {
    // api calls , variable decalaration , object decalaration
    this.fetchData();
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <h1 className="heading-text">{this.state.headingText}</h1>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="1000"
            />

            <Task />
          </div>
        </div>
      </div>
    );
  }
}

export default ApexChartsData;