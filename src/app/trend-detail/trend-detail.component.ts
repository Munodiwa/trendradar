import { Component, OnInit, Input } from '@angular/core';
import { Trend } from '../trend';

@Component({
  selector: 'app-trend-detail',
  templateUrl: './trend-detail.component.html',
  styleUrls: ['./trend-detail.component.css']
})
export class TrendDetailComponent implements OnInit {
  @Input() trend: Trend;

  constructor() { }

  ngOnInit() {
  }

}
