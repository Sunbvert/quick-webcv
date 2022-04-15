export interface Event {
    type: "Study" | "Work" | "Project" | "Personal" | "Experience",
    date: Date,
    title: string,
    detail?: string
  }
  
export interface Stage {
    date: Date,
    dateString: string,
    events: [Event]
  }