import { Component, Host, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['./timeline-block.component.css'],
  host: {'class': 'row'}
})
export class TimelineBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
