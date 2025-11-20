import React from 'react'
import { Box } from '@mui/material'
import FPL_PROJECT_IMG from '../assets/images/fpl_mld_img.svg'
import STADIUMAP_PROJECT_IMG from '../assets/images/stadiumap_logo.svg'

import { openExternal } from '../utils/external'
import { BubbleGraph } from './BubbleGraph'
import { BubbleConfig } from '../types/bubble'
import { PROJECT_FPL_MLI, PROJECT_STADIUMAP } from '../constants/links'


export const ProjectsBubbleGraph: React.FC = () => {
  const bubbles: BubbleConfig[] = [
    {
      id: 'fpl',
      icon: (
        <Box
          component='img'
          src={FPL_PROJECT_IMG}
          alt='FPL Mini-League Insights'
          sx={{
            width: 90,
            height: 60,
            borderRadius: '50%',
            transition: 'transform 0.2s ease-out',
            '&:hover': {
              transform: 'scale(1.15)',
            }
          }}
        />
      ),
      label: 'FPL Mini-Leagues Data',
      onClick: () => openExternal(PROJECT_FPL_MLI)
    },
    {
      id: 'stadiumap',
      icon: (
        <Box
          component='img'
          src={STADIUMAP_PROJECT_IMG}
          alt='Stadiumap'
          sx={{
            width: 90,
            height: 60,
            borderRadius: '50%',
            transition: 'transform 0.2s ease-out',
            '&:hover': {
              transform: 'scale(1.15)',
            },
          }}
        />
      ),
      label: 'Stadiumap (with Gemini 3 Pro)',
      onClick: () => openExternal(PROJECT_STADIUMAP)
    }
  ]

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BubbleGraph bubbles={bubbles} />
    </Box>
  )
}
