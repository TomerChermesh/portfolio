import React from 'react'
import { Box } from '@mui/material'
import FPL_PROJECT_IMG from '../assets/images/fpl_mli_logo.svg'
import STADIUMAP_PROJECT_IMG from '../assets/images/stadiumap_logo.svg'
import TIC_TAC_TOE_LOGO from '../assets/images/tictactoe_logo.svg'
import CENTRIQ_LOGO from '../assets/images/centriq-logo.svg'

import { openExternal } from '../utils/external'
import { BubbleGraph } from './BubbleGraph'
import { BubbleConfig } from '../types/bubble'
import { PROJECT_CENTRIQ, PROJECT_FPL_MLI, PROJECT_STADIUMAP, PROJECT_TICTACTOE } from '../constants/links'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import { CENTER_ICON_STYLE } from '../constants/style'


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
      label: 'FPL Mini-Leagues Insights',
      onClick: () => openExternal(PROJECT_FPL_MLI)
    },
    {
      id: 'tictactoe',
      icon: (
        <Box
          component='img'
          src={TIC_TAC_TOE_LOGO}
          alt='TicTacToe Project'
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
      label: 'TicTacToe Project',
      onClick: () => openExternal(PROJECT_TICTACTOE)
    },
    {
      id: 'centriq',
      icon: (
        <Box
          component='img'
          src={CENTRIQ_LOGO}
          alt='Centriq Project'
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            transition: 'transform 0.2s ease-out',
            '&:hover': {
              transform: 'scale(1.15)',
            }
          }}
        />
      ),
      label: 'Centriq Project',
      onClick: () => openExternal(PROJECT_CENTRIQ)
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
      <BubbleGraph bubbles={bubbles} toChangeCenterIcon={false} initialCenterIcon={<FolderSpecialIcon sx={CENTER_ICON_STYLE}/>} />
    </Box>
  )
}
