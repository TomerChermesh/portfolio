import React from 'react'
import type { EducationExperience } from '../types/experience'
import { loadEducation } from '../utils/experience'
import { EducationCardsSlider } from '../components/EducationCardsSlider'


export const EducationView: React.FC = () => {
    const education: EducationExperience[] = loadEducation()

    return (
        <EducationCardsSlider educationCardsInfo={education} title={'education'}/>
    )
}
