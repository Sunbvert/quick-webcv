export interface Event {
    type: "Study" | "Work" | "Project" | "Personal" | "Experience",
    title: string,
    detail?: string
  }
  
export interface Stage {
    date: Date,
    events: [Event]
  }

export interface Timeline {
  eventTypes: [EventType],
  stages: [Stage]
}

export interface EventType {
  name: string,
  color: string
}

export interface CV {
  name: string,
  timeline: Timeline
}

export interface ColorPalette {
  [key: string]: string
}