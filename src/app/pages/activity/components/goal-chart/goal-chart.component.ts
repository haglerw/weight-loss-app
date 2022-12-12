import { Component, OnInit } from '@angular/core';
import { ChartType } from '../../../model';
import { goalChart } from '../../../data';

@Component({
  selector: 'app-goal-chart',
  templateUrl: './goal-chart.component.html',
  styleUrls: ['./goal-chart.component.scss']
})
export class GoalChartComponent implements OnInit {
  goalChart!: ChartType;

  constructor() { }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.goalChart = goalChart;
  }

}
