export interface Skill {
  name: string,
  level: number
}

export interface Event {
  type: string,
  title: string,
  detail?: string,
  page?: string
}

export interface Stage {
  date: string,
  location: string,
  events: [Event]
}

export interface Timeline {
  eventTypes: [EventType],
  stages: [Stage]
}

export interface EventType {
  name: string,
  color: string,
  enable: boolean
}

export interface CV {
  name: string,
  jobTitle: string,
  statement: string,
  skills: [Skill],
  skillLevels: [string],
  timeline: Timeline
}

export interface ColorPalette {
  [key: string]: string
}