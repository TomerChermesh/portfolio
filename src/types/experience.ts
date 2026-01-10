export interface Role = {
  name: string
  years: string
  description: string
}

export interface Course = {
    name: string
    grade: int
}

interface Experience {
    name: string

    isCurrent: boolean
    location: string
    roles: Role[]
    link: string
    logo: string
}

export interface JobExperience extends Experience = {
    intro: string
    roles: Role[]
}

export interface EducationExperience extends Experience {
    degree: string
    years: string
    gpa?: int
    courses: Course[]
    additionalInfo: string
    additionalInfoLink: string
}
