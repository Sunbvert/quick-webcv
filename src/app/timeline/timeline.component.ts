import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stage } from '../interfaces';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {

  timelineStages: Array<Stage> = [];

  timelineForm = this.formBuilder.group({
    dateString: ["", Validators.required],
    date: [new Date(), Validators.required],
    events: this.formBuilder.array([])
  })

  openTimelineEdit = false;

  eventTypeOptions = [
    { name: "Study", color: "primary" },
    { name: "Work", color: "primary" },
    { name: "Project", color: "primary" },
    { name: "Personal", color: "primary" },
    { name: "Experience", color: "primary" }
  ];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  get events() {
    return this.timelineForm.get("events") as FormArray;
  }

  addEvent() {
    this.events.push(this.formBuilder.group({
      type: ["Study", Validators.required],
      date: [new Date(), Validators.required],
      title: ["", Validators.required],
      detail: ""
    }))
  }

  ngOnInit(): void {
    this.addEvent();
  }

  onOpenNewStageEntryEdit(): void {
    this.openTimelineEdit = true;
  }

  onCancelStageEdit(): void {
    this.timelineForm.reset();
    this.openTimelineEdit = false;
  }

  onSubmit(): void {
    if (this.timelineForm.valid) {
      console.log("adding new stage");
      this.timelineStages.push(this.timelineForm.value);
      this.openTimelineEdit = false;
    }
    this.timelineForm.reset();
  }

}
