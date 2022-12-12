import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyActivityComponent } from './activity/components/my-activity/my-activity.component';
import { HistoryComponent } from './history/components/history/history.component';

const routes: Routes = [
  { path: '', redirectTo: 'my-activity', pathMatch: 'full' },
  { path: 'my-activity', component: MyActivityComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
