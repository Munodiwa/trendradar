import { Component, OnInit } from '@angular/core';
import { Trend } from '../trend';
import { TRENDS } from '../mock-trends';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  trends = TRENDS;

  selectedTrend: Trend;

  onSelect(trend: Trend): void{
    this.selectedTrend = trend;
  }
/*
  trend: Trend={
    name: 'Natural Language Generation',
    description: 'Producing text from computer data. Currently used in customer service, report generation, and summarizing business intelligence insights. Sample vendors: Attivio, Automated Insights, Cambridge Semantics, Digital Reasoning, Lucidworks, Narrative Science, SAS, Yseop.',
    trend_stage: 'Collected'
  }
*/
  constructor() { }

  ngOnInit() {
  }

}
