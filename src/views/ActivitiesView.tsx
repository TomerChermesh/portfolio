import React from 'react'
import type { JobExperience } from '../types/experience'
import { loadAdditionalActivities } from '../utils/experience'
import { JobCardsSlider } from '../components/JobCardsSlider'


export const ActivitiesView: React.FC = () => {
    const activities: JobExperience[] = loadAdditionalActivities()

    return (
        <JobCardsSlider jobsCardsInfo={activities} title={'additionalActivities'}/>
    )
}
