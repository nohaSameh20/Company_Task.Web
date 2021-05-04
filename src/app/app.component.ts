import { Component } from '@angular/core';
import { ChartDataSets,ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ConsumptionService } from './consumption.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  constructor(public consumptionService:ConsumptionService) {
    this.getConsumptions();
    
  }
TotalConsumption:number;
AvgConSumption:number;
MaxConSumption:number;
MinConSumption:number;
MaxVoltage:number;
AvgVoltage:number;
MaxCurrent:number;
AvgCurrent:number;

getConsumptions(){
  this.consumptionService.totalConSumption().subscribe(res => {
    this.TotalConsumption = res;
  });
  this.consumptionService.avgConSumption().subscribe(res => {
    this.AvgConSumption = res;
  });
  this.consumptionService.maxConSumption().subscribe(res => {
    this.MaxConSumption = res;
  });
  this.consumptionService.minConSumption().subscribe(res => {
    this.MinConSumption = res;
  });
  this.consumptionService.maxVoltage().subscribe(res => {
    this.MaxVoltage = res;
  });
  this.consumptionService.avgVoltage().subscribe(res => {
    this.AvgVoltage = res;
  });
  this.consumptionService.maxCurrent().subscribe(res => {
    this.MaxCurrent = res;
  });
  this.consumptionService.avgCurrent().subscribe(res => {
    this.AvgCurrent = res;
  });
  
}

public lineChartData: ChartDataSets[] = [
  { data: [0, 4, 3, 5.5, 3, 4.7, 0], label: 'Total', },
];
public lineChartLabels: Label[] = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
public lineChartOptions: (ChartOptions & { annotation: any });
public lineChartColors: Color[] = [
  {
    borderColor: 'black',
    backgroundColor: 'rgba(255,0,0,0.3)',
    pointBackgroundColor: "rgba(250,205,137,1)",
    pointBorderWidth: 2,
    pointRadius: 4,
    
  },
];

public lineChartLegend = true;
public lineChartType = 'line';
public lineChartPlugins = [];


l
}
