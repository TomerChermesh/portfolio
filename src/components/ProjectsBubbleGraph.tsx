import React from 'react'
import { Box } from '@mui/material'
import FPL_PROJECT_IMG from '../assets/fpl_mld_img.svg'

import { openExternal } from '../utils/external'
import { BubbleGraph } from './BubbleGraph'
import { BubbleConfig } from '../types/bubble'
import { PROJECT_FPL_MLD } from '../constants/links'


export const ProjectsBubbleGraph: React.FC = () => {
  const bubbles: BubbleConfig[] = [
    {
      id: 'fpl',
      icon: (
        <Box
          component='img'
          src={FPL_PROJECT_IMG}
          alt='FPL Mini-Leagues Data'
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
      label: 'FPL Mini-Leagues Data',
      onClick: () => openExternal(PROJECT_FPL_MLD)
    }
  ]

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BubbleGraph bubbles={bubbles} />
    </Box>
  )
}
