import { Component, OnInit } from '@angular/core';
import { CV } from '../interfaces';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  name: string = "Your Name";
  jobTitle: string = "Your Job Title";
  statement: string = "Statement";

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
    this.getCV();
  }

  getCV() {
    this.timelineService.getCV()
      .subscribe((data: CV) => {
        this.name = data.name;
        this.jobTitle = data.jobTitle;
        this.statement = data.statement;
     });
  }
}
