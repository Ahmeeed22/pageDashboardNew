import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements  OnInit {
  @Input() data:  any;

  public chart: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  // public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: this.data.map((dataset: any) => ({
          ...dataset,
          tension: 0.4, // Set tension to 0 for straight lines
          borderColor: dataset.color,
        }))
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            display: true,
            position: 'left',
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            }
          },
          x: {
            display: true,
            position: 'bottom', // Specify position as 'bottom' for x-axis
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            }
          }
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            bodyFont: {
              size: 14,
            },
            titleFont: {
              size: 16,
              weight: 'bold',
            }
          },
          legend: {
            position :'bottom',
            labels: {
              font: {
                size: 14,
              },
            }
          }
        }
      }
    });
  }
  
  
}

