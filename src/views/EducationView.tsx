import React from 'react'
import type { JobExperience } from '../types/experience'
import { loadEducation } from '../utils/experience'
import { CardsSlider } from '../components/CardsSlider'


export const EducationView: React.FC = () => {
    const experiences: JobExperience[] = loadEducation()

    return (
        <CardsSlider cardsInfo={experiences} title={'education'}/>
    )
}
