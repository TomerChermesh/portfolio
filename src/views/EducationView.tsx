import React from 'react'
import type { JobExperience } from '../types/experience'
import { loadEducation } from '../utils/experience'
import { EducationCardsSlider } from '../components/EducationCardsSlider'


export const EducationView: React.FC = () => {
    const experiences: JobExperience[] = loadEducation()

    return (
        <EducationCardsSlider educationCardsInfo={experiences} title={'education'}/>
    )
}
