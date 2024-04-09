import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels'; 

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.scss']
})
export class HorizontalBarChartComponent implements OnInit {
  @Input() data: any[] = [];
  public chart: any;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  createChart() {
    const labels = this.data.map(item => item.label);
    const values = this.data.map(item => item.value);
    const colors = this.data.map(item => item.color);

    this.chart = new Chart(`MyHorizontalBarChart${this.data[0].id}`, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
          borderWidth: 1, // Increase the border width
          borderRadius : 7,
          borderColor: 'red', // Set border color for bars
          borderSkipped: false, // Draw borders for all bars
          barThickness: 10,

        }]
      },
      options: {
        aspectRatio: 3,
        indexAxis: 'y',
        
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Set the color of the grid lines
              lineWidth: 1.5, // Set the width of the grid lines
            }
          }
        },
        plugins: {
          legend: {
            display: false // Hide legend labels
          },
          
        }
      }
    });
  }
  
}