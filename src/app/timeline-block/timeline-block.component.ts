import { Component, Host, Input, OnInit } from '@angular/core';
import { Stage } from '../interfaces';

@Component({
  selector: 'app-timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['./timeline-block.component.css'],
  host: {'class': 'row'}
})
export class TimelineBlockComponent implements OnInit {

  @Input() stage: Stage = {} as Stage
  constructor() { }

  ngOnInit(): void {
  }

}
