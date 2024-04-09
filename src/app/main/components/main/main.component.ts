import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  pieChartData = [
    { label: 'Category A', value: 98, color: '#00A36C' , id: "a" },
    { label: 'Category A2', value: 2, color: '#eee' , id: "a" }
  ] ;
  pieChartData2 = [
    { label: 'Category B', value: 65, color: '#00A36C' , id: "b" },
    { label: 'Category B2', value: 35, color: '#eee' , id: "a" }
  ] ;
  pieChartData3 = [
    { label: 'Category C', value: 54, color: '#00A36C' , id: "c" },
    { label: 'Category C2', value: 46, color: '#eee' , id: "a" }
  ] ;
  pieChartData4 = [
    { label: 'Category D', value: 37, color: 'red' , id: "d"},
    { label: 'Category D2', value: 63, color: '#eee' , id: "a" }
  ] ;

  lineChartData = [
    { label: 'January', data: [0,0,0, 59, 80, 81, 56, 55, 0,0,0,0], color: '#00A36C' },
    { label: 'February', data: [0,0,0, 48, 40, 19, 86, 27, 0,0,0,0], color: 'blue' },
    { label: 'March', data: [0,0,0, 48, 77, 9, 100, 27, 0,0,0,0], color: 'red' }
  ];

  horizontalBarChartData = [
    { id :"tt1" ,label: 'Category A', value: 10, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category B', value: 20, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category C', value: 15, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category D', value: 0, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category E', value: 17, color: 'rgba(255, 10, 13, 0.8)' },
  ];
  horizontalBarChartData2 = [
    { id: "tt2" ,label: 'Category A', value: 10, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category B', value: 20, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category C', value: 15, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category D', value: 0, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category E', value: 17, color: 'rgba(255, 10, 13, 0.8)' },
  ];
  horizontalBarChartData3 = [
    { id: "tt3" ,label: 'Category A', value: 10, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category B', value: 20, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category C', value: 15, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category D', value: 0, color: 'rgba(255, 10, 13, 0.8)' },
    { label: 'Category E', value: 17, color: 'rgba(255, 10, 13, 0.8)' },
  ];
  constructor() {
     
   }

  
}
