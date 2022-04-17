import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColorPalette, CV, EventType, Stage } from '../interfaces';
import { TimelineService } from '../timeline.service';

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

  eventTypeOptions: Array<EventType> = [];

  eventTypeColorPalette = {} as ColorPalette;

  constructor(
    private formBuilder: FormBuilder,
    private timelineService: TimelineService
  ) { }

  get events() {
    return this.timelineForm.get("events") as FormArray;
  }

  showTimeline() {
    this.timelineService.getCV()
      .subscribe((data: CV) => {
        this.timelineStages = data.timeline.stages;
        this.eventTypeOptions = data.timeline.eventTypes;
        data.timeline.eventTypes.forEach(ele => this.eventTypeColorPalette[ele.name] = ele.color);
     });
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
    this.showTimeline();
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
