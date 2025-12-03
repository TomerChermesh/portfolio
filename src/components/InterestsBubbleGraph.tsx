import React from 'react'
import { Box } from '@mui/material'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import SportsFootballIcon from '@mui/icons-material/SportsFootball'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import LocalAirportIcon from '@mui/icons-material/LocalAirport'
import Diversity1Icon from '@mui/icons-material/Diversity1'

import { BubbleGraph } from './BubbleGraph'
import { BubbleConfig } from '../types/bubble'
import { CENTER_ICON_STYLE, ICON_STYLE } from '../constants/style'
import InterestsIcon from '@mui/icons-material/Interests'


export const InterestsBubbleGraph: React.FC = () => {
  const bubbles: BubbleConfig[] = [
    {
      id: 'football',
      label: 'Football',
      icon: <SportsSoccerIcon sx={ICON_STYLE} />
    },
    {
      id: 'basketball',
      label: 'Basketball',
      icon: <SportsBasketballIcon sx={ICON_STYLE} />
    },
    {
      id: 'americanFootball',
      label: 'NFL',
      icon: <SportsFootballIcon sx={ICON_STYLE} />
    },
    {
      id: 'gaming',
      label: 'Gaming',
      icon: <SportsEsportsIcon sx={ICON_STYLE} />
    },
    {
      id: 'stockMarket',
      label: 'Stock Market',
      icon: <CandlestickChartIcon sx={ICON_STYLE} />
    },
    {
      id: 'beachNSea',
      label: 'Beach & Sea',
      icon: <BeachAccessIcon sx={ICON_STYLE} />
    },
    {
      id: 'travel',
      label: 'Traveling',
      icon: <LocalAirportIcon sx={ICON_STYLE} />
    },
    {
      id: 'familyNFriends',
      label: 'Family & Friends',
      icon: <Diversity1Icon sx={ICON_STYLE} />
    }
  ]

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <BubbleGraph bubbles={bubbles}  toChangeCenterIcon={false} initialCenterIcon={<InterestsIcon sx={CENTER_ICON_STYLE}/>}/>
    </Box>
  )
}
