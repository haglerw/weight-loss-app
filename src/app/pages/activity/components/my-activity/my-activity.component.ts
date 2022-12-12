import { Component, OnInit } from '@angular/core';
import { Stat } from '../../../model';
import { statData } from '../../../data';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.scss']
})
export class MyActivityComponent implements OnInit {

  statData!: Stat[];

  constructor() { }

  ngOnInit(): void {
    this._fetchData();
  }

  private _fetchData() {
    this.statData = statData;
  }

}
