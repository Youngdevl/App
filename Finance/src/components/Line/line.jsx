/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Chart from "react-apexcharts";
import './line.css'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        type: 'line',
        data: [630,40,50,160,70,80,490]
      }, {
        type: 'column',
        data: [100,200,300,400,500,600,700,900,1000]
      }]
    };
  }

  render() {
    return (
      <div className="app" id="jm">
        <div className="row">
          <div className="mixed-chart">
          <Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="600"
  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;