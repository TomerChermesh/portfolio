import React from 'react'
import type { JobExperience } from '../types/experience'
import { loadAdditionalActivities } from '../utils/experience'
import { CardsSlider } from '../components/CardsSlider'


export const ActivitiesView: React.FC = () => {
    const activities: JobExperience[] = loadAdditionalActivities()

    return (
        <CardsSlider cardsInfo={activities} title={'additionalActivities'}/>
    )
}
