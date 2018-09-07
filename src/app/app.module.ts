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


@NgModule({
  declarations: [
    AppComponent,
    TrendsComponent,
    TrendDetailComponent,
    HeaderComponent,
    RadarComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
