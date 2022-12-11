import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './components/pages/plants/plants.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';

const routes: Routes = [
  {path: 'schedule', component: ScheduleComponent},
  {path: 'plants', component: PlantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
