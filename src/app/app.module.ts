import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrendsComponent } from './trends/trends.component';
import { TrendDetailComponent } from './trend-detail/trend-detail.component';
import { HeaderComponent } from './header/header.component';
import { RadarComponent } from './radar/radar.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found-component/not-found-component.component';

const appRoutes: Routes = [
  {path: 'dashboard', component: RadarComponent },
  {path: 'trends',
   component: TrendsComponent,
   data:{title: 'Trends List'}},
  {path: 'about', component: AboutComponent},
   {path:'***', component: NotFoundComponent}
   
]

@NgModule({
  declarations: [
    AppComponent,
    TrendsComponent,
    TrendDetailComponent,
    HeaderComponent,
    RadarComponent,
    AboutComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
