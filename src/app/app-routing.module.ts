import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsComponent } from './trends/trends.component';
import { RadarComponent } from './radar/radar.component';
import { AboutComponent } from './about/about.component';
import { TrendDetailComponent } from './trend-detail/trend-detail.component';

const routes: Routes = [
  {path:'Trends', component: TrendsComponent },
  {path:'Dashboard', component: RadarComponent },
  {path: 'About', component: AboutComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:description', component: TrendDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

