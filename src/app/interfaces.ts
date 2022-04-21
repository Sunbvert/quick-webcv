export interface Skill {
  name: string,
  level: number
}

export interface ContactInfo {
  method: string,
  value: string,
  link?: string
}

export interface Language {
  name: string,
  level: string
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

export interface Portfolio {
  name: string,
  enable: boolean,
  projects: [Project]
}

export interface Project {
  title: string,
  description?: string,
  image?: string,
  page?: string
}

export interface CV {
  name: string,
  jobTitle: string,
  statements: [string],
  languages: [Language],
  contactInfos: [ContactInfo],
  skills: [Skill],
  skillLevels: [string],
  timeline: Timeline,
  portfolio: Portfolio
}

export interface ColorPalette {
  [key: string]: string
}