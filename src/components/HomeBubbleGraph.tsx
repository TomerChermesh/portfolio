import React from 'react'
import { Box } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import SchoolIcon from '@mui/icons-material/School'
import InterestsIcon from '@mui/icons-material/Interests'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

import { downloadCv, openExternal } from '../utils/external'
import { BubbleGraph } from './BubbleGraph'
import { BubbleConfig, HomeBubbleGraphProps } from '../types/bubble'
import { CV_FILE_PATH, GITHUB_PROFILE, LINKEDIN_PROFILE } from '../constants/links'
import { ICON_STYLE } from '../constants/style'


export const HomeBubbleGraph: React.FC<HomeBubbleGraphProps> = ({ onChangeView }) => {
    const bubbles: BubbleConfig[] = [
    {
      id: 'cv',
      label: 'CV',
      icon: <DescriptionIcon sx={ICON_STYLE} />,
      onClick: () => downloadCv(CV_FILE_PATH)
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      icon: <LinkedInIcon sx={ICON_STYLE} />,
      onClick: () => openExternal(LINKEDIN_PROFILE)
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      icon: <GitHubIcon sx={ICON_STYLE} />,
      onClick: () => openExternal(GITHUB_PROFILE)
    },
    {
      id: 'interests',
      label: 'Interests',
      icon: <InterestsIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView('interests')
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: <FitnessCenterIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView('skills'),
    },
    {
      id: 'education',
      label: 'Education',
      icon: <SchoolIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView('education'),
    },
    {
      id: 'activities',
      label: 'Additional Activities',
      icon: <AutoAwesomeIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView('activities')
    },
    {
      id: 'experience',
      label: 'Professional Experience',
      icon: <WorkOutlineIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView('experience'),
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <FolderSpecialIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView('projects'),
    }
  ]

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BubbleGraph bubbles={bubbles} toChangeCenterIcon={true}/>
    </Box>
  )
}
