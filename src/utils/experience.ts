import professionalExperienceJson from '../assets/cardsInfo/professionalExperience.json'
import additionalActivitiesJson from '../assets/cardsInfo/additionalActivities.json'
import educationJson from '../assets/cardsInfo/education.json'
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
