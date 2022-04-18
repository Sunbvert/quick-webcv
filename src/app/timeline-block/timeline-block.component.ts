import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ColorPalette, Event, Stage } from '../interfaces';

@Component({
  selector: 'app-timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['./timeline-block.component.css'],
  host: {'class': 'row'},
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ transform: 'translateY(-100%)', opacity: 0 }),
            animate('0.5s ease-out', 
                    style({ transform: 'translateY(0)', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ transform: 'translateY(0)', opacity: 1 }),
            animate('0.5s ease-in', 
                    style({ transform: 'translateY(-100%)', opacity: 0 }))
          ]
        )
      ]
    )
  ],
})
export class TimelineBlockComponent implements OnInit {

  @Input() stage: Stage = {} as Stage
  @Input() eventColorPalette: ColorPalette = {}
  @Input() selectedEventTypes: Set<string> = new Set()
  constructor(public sanitizer: DomSanitizer) { }

  eventSelected = (event: Event) => this.selectedEventTypes.has(event.type);

  ngOnInit(): void {
  }

}
