import { Component, OnInit } from '@angular/core';
import { CV, Skill } from '../interfaces';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: Array<Skill> = [];
  skillLevels: Array<string> = [];

  constructor(private timelineService: TimelineService) { }

  ngOnInit(): void {
    this.getCV();
  }

  getCV() {
    this.timelineService.getCV()
      .subscribe((data: CV) => {
        this.skills = data.skills;
        this.skillLevels = data.skillLevels;
     });
  }

}
