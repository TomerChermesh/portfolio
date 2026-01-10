import React from 'react'
import type { JobExperience } from '../types/experience'
import { loadProfessionalExperience } from '../utils/experience'
import { JobCardsSlider } from '../components/JobCardsSlider'


export const ExperienceView: React.FC = () => {
    const experiences: JobExperience[] = loadProfessionalExperience()

    return (
        <JobCardsSlider jobsCardsInfo={experiences} title={'professionalExperience'}/>
    )
}
