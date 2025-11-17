import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

type Props = {
  onClick: () => void
}

export const BackButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        bgcolor: 'rgba(15,23,42,0.9)',
        borderRadius: 999,
        border: '1px solid rgba(148,163,184,0.6)',
        px: 1.5,
        py: 0.25,
      }}
      onClick={onClick}
    >
      <IconButton size='small' sx={{ color: '#e5e7eb', p: 0.25, mr: 0.25 }}>
        <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
      </IconButton>
      <Typography variant='caption' sx={{ cursor: 'pointer' }}>Back</Typography>
    </Box>
  )
}
