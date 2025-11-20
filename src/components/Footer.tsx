import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, py: 2, textAlign: 'center' }}
    >
      <Typography variant='body2'>
          <b>© 2025 by Tomer Chermesh</b> // last updated: November 2025
      </Typography>
    </Box>
  )
}

export default Footer
