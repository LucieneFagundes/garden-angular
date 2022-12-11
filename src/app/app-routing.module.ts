import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PlantsComponent } from './components/pages/plants/plants.component';
import { ScheduleComponent } from './components/pages/schedule/schedule.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'plants', component: PlantsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
