import professionalExperienceJson from '../assets/professionalExperience.json'
import { JobExperience } from '../types/experience'

export const loadProfessionalExperience = (): JobExperience[] => {
  return professionalExperienceJson as JobExperience[]
}
