import React from 'react'
import type { JobExperience } from '../types/experience'
import { loadProfessionalExperience } from '../utils/experience'
import { CardsSlider } from '../components/CardsSlider'


export const ExperienceView: React.FC = () => {
    const experiences: JobExperience[] = loadProfessionalExperience()

    return (
        <CardsSlider cardsInfo={experiences} title={'professionalExperience'}/>
    )
}
