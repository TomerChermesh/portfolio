import { loadJsonFile } from './files'
import { JobExperience } from '../types/experience'

export const loadProfessionalExperience = async (): Promise<JobExperience[]> => {
  return loadJsonFile<JobExperience[]>('../assets/professionalExperience.json')
}
