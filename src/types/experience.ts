export type Role = {
  name: string
  years: string
  description: string
}

export type JobExperience = {
  company: string
  intro: string
  isCurrentJob: boolean
  location: string
  roles: Role[]
  links: string[]
}