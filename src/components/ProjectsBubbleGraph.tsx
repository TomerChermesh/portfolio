import React from 'react'
import {Box, SvgIcon} from '@mui/material'
import FPL_PROJECT_IMG from '../assets/fpl_mld_img.svg'

import { openExternal } from '../utils/external'
import { BubbleGraph } from './BubbleGraph'
import { BubbleConfig } from '../types/bubble'
import { PROJECT_FPL_MLD } from '../constants/links'


export const ProjectsBubbleGraph: React.FC = () => {
  const bubbles: BubbleConfig[] = [
    {
      id: 'fpl',
      icon: <SvgIcon src={FPL_PROJECT_IMG} alt={'fpl_mld'}/>,
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
