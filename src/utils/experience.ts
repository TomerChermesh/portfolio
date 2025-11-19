import professionalExperienceJson from '../assets/professionalExperience.json'
import additionalActivitiesJson from '../assets/additionalActivities.json'
import educationJson from '../assets/education.json'
import { JobExperience } from '../types/experience'

export const loadProfessionalExperience = (): JobExperience[] => {
  return professionalExperienceJson as JobExperience[]
}

export const loadAdditionalActivities = (): JobExperience[] => {
  return additionalActivitiesJson as JobExperience[]
}

export const loadEducation = (): JobExperience[] => {
  return educationJson as JobExperience[]
}
