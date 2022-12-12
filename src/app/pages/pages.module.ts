import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MyActivityComponent } from './activity/components/my-activity/my-activity.component';
import { AddWeightComponent } from './weight/components/add-weight/add-weight.component';
import { HistoryComponent } from './history/components/history/history.component';
import { ActivityHeaderComponent } from './activity/components/activity-header/activity-header.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { StatComponent } from './activity/components/stat/stat.component';
import { GoalChartComponent } from './activity/components/goal-chart/goal-chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WorkoutComponent } from './activity/components/workout/workout.component';
import { HistoryHeaderComponent } from './history/components/history-header/history-header.component';


@NgModule({
  declarations: [
    MyActivityComponent,
    AddWeightComponent,
    HistoryComponent,
    ActivityHeaderComponent,
    StatComponent,
    GoalChartComponent,
    WorkoutComponent,
    HistoryHeaderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbProgressbarModule,
    NgApexchartsModule
  ]
})
export class PagesModule { }
