import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import { PieChartDataItem } from '../../context/DTOs';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit , AfterViewInit, OnDestroy {
  @Input() data: PieChartDataItem[] = [];

  public chart: any;

  constructor() { }

  ngOnInit(): void {
  }

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
    let values = this.data.map(item => item.value);
    console.log(values);
    
    let colors = this.data.map(item => item.color);
    
    this.chart = new Chart(`MyChart${this.data[0].id}`, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: values, // Use the values array here
          backgroundColor: colors,
          hoverOffset: 1,
        }],
      },
      options: {
        aspectRatio: 1,
        cutout: '90%',
      }
    });
  }
  
  
}


