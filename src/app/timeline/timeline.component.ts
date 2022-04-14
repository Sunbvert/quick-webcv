import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

interface Event {
  type: "Study" | "Work" | "Project" | "Info" | "Experience",
  title: string,
  detail: string
}

interface Stage {
  date: string,
  events: [Event]
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timelineForm = this.formBuilder.group({
    date: "",
    events: this.formBuilder.array([])
  })


  constructor(
    private formBuilder: FormBuilder
  ) { }

  get events() {
    return this.timelineForm.get("events") as FormArray;
  }

  addEvent() {
    this.events.push(this.formBuilder.group({
      type: "Study",
      title: "",
      detail: ""
    }))
  }

  ngOnInit(): void {
    this.addEvent();
  }

  onSubmit(): void {
    console.log("adding new timeline");
    this.timelineForm.reset();
  }

}
