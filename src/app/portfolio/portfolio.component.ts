import { Component, OnInit } from '@angular/core';
import { CV, Portfolio, Project } from '../interfaces';
import { TimelineService } from '../timeline.service';

interface ProjectWithHover extends Project {
  hovering?: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private timelineService: TimelineService) { }

  portfolio: Portfolio | undefined;
  projects: Array<ProjectWithHover> = [];

  ngOnInit(): void {
    this.getCV()
  }

  getCV() {
    this.timelineService.getCV()
      .subscribe((data: CV) => {
        this.portfolio = data.portfolio;
        this.projects = data.portfolio.projects;
     });
  }

}
