import { Component, Input, OnInit } from '@angular/core';
import { ColorPalette, Stage } from '../interfaces';

@Component({
  selector: 'app-timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['./timeline-block.component.css'],
  host: {'class': 'row'}
})
export class TimelineBlockComponent implements OnInit {

  @Input() stage: Stage = {} as Stage
  @Input() eventColorPalette: ColorPalette = {}
  constructor() { }

  ngOnInit(): void {
  }

}
