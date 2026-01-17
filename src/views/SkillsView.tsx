import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { SkillCard } from '../components/SkillsCard'
import { SkillCategory } from '../types/skill'
import {
    AWS_LOGO,
    C_SHARP_LOGO,
    CI_CD_LOGO,
    CSS_LOGO,
    DOCKER_LOGO,
    FASTAPI_LOGO,
    FLASK_LOGO,
    GCP_LOGO,
    GIT_LOGO,
    GRAFANA_LOGO,
    HTML_LOGO,
    JAVA_LOGO,
    JAVASCRIPT_LOGO,
    JIRA_LOGO,
    MICROSOFT_OFFICE_LOGO,
    MONGODB_LOGO,
    PHOTOSHOP_LOGO,
    POSTGRESQL_LOGO,
    PYTHON_LOGO,
    PYQT_LOGO,
    REACT_LOGO,
    REDUX_LOGO,
    SQL_LOGO,
    TRELLO_LOGO,
    TYPESCRIPT_LOGO
} from '../constants/skillsLogos'

const skills: SkillCategory[] = [
    {
        title: 'Programming Languages',
        logos: [
            { id: 'pl-1', icon: PYTHON_LOGO, label: 'Python' },
            { id: 'pl-2', icon: C_SHARP_LOGO, label: 'C#' },
            { id: 'pl-3', icon: JAVA_LOGO, label: 'Java' },
            { id: 'pl-4', icon: JAVASCRIPT_LOGO, label: 'JavaScript' },
            { id: 'pl-5', icon: TYPESCRIPT_LOGO, label: 'TypeScript' },
            { id: 'pl-6', icon: SQL_LOGO, label: 'SQL' }
        ]
    },
    {
        title: 'Frameworks',
        logos: [
            { id: 'fw-1', icon: REACT_LOGO, label: 'React' },
            { id: 'fw-2', icon: FASTAPI_LOGO, label: 'FastAPI' },
            { id: 'fw-3', icon: FLASK_LOGO, label: 'Flask' },
            { id: 'fw-4', icon: REDUX_LOGO, label: 'Redux' },
            { id: 'fw-5', icon: PYQT_LOGO, label: 'PyQt' }
        ]
    },
    {
        title: 'Databases',
        logos: [
            { id: 'db-1', icon: POSTGRESQL_LOGO, label: 'PostgreSQL' },
            { id: 'db-2', icon: MONGODB_LOGO, label: 'MongoDB' }
        ]
    },
    {
        title: 'Cloud & DevOps',
        logos: [
            { id: 'dc-1', icon: DOCKER_LOGO, label: 'Docker' },
            { id: 'dc-2', icon: AWS_LOGO, label: 'AWS' },
            { id: 'dc-3', icon: GCP_LOGO, label: 'GCP' },
            { id: 'dc-4', icon: CI_CD_LOGO, label: 'CI/CD' }
        ]
    },
    {
        title: 'Web Development & Design',
        logos: [
            { id: 'wd-1', icon: HTML_LOGO, label: 'HTML' },
            { id: 'wd-2', icon: CSS_LOGO, label: 'CSS' },
            { id: 'wd-3', icon: PHOTOSHOP_LOGO, label: 'Photoshop' }
        ]
    },
    {
        title: 'Project Management & Collaboration Tools',
        logos: [
            { id: 't-1', icon: GIT_LOGO, label: 'Git' },
            { id: 't-2', icon: GRAFANA_LOGO, label: 'Grafana' },
            { id: 't-3', icon: JIRA_LOGO, label: 'Jira' },
            { id: 't-4', icon: TRELLO_LOGO, label: 'Trello' },
            { id: 't-5', icon: MICROSOFT_OFFICE_LOGO, label: 'Microsoft Office' }
        ]
    }
]


export const SkillsView: React.FC = () => {
    const [activeId, setActiveId] = useState<string | null>(null)

    const handleHover = (id: string) => {
        setActiveId(id)
    }

    const handleLeave = () => {
        setActiveId(null)
    }

    const activeSkill = skills
        .flatMap(category => category.logos)
        .find(logo => logo.id === activeId)

    return (
        <Box sx={{ width: '100%', pb: {xs: 8, sm: 0}, pt: {xs: 0, sm: 6} }}>
            <Typography 
                variant='h6'
                sx={{
                    position: 'fixed',
                    bottom: {xs: 180, sm: 140},
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    fontFamily: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'].join(','),
                    color: '#e5e7eb',
                    opacity: activeSkill ? 1 : 0,
                    transition: 'opacity 0.2s ease',
                    pointerEvents: 'none',
                    width: 'auto',
                }}
            >
                {activeSkill?.label}
            </Typography>
            
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr'},
                    columnGap: {xs: 0.5, sm: 1},
                    rowGap: {xs: 0.75, sm: 2},
                    justifyItems: 'center',
                    maxWidth: {xs: '100%', sm: '600px', md: '900px'},
                    mx: 'auto',
                    px: {xs: 0.5, sm: 0},
                    pt: {xs: 3, sm: 6},
                }}
            >
                {skills.map(category => (
                    <SkillCard
                        key={category.title}
                        title={category.title}
                        logos={category.logos}
                        onHover={handleHover}
                        onLeave={handleLeave}
                    />
                ))}
            </Box>
        </Box>
    )
}
