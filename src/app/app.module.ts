import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TrendsComponent } from './trends/trends.component';
import { TrendDetailComponent } from './trend-detail/trend-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendsComponent,
    TrendDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
