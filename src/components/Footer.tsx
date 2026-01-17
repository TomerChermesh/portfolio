import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{ py: 2, textAlign: 'center', mt: 'auto' }}
    >
      <Typography variant='body2'>
          <b>© 2026 by Tomer Chermesh</b> // last updated: January 2026
      </Typography>
    </Box>
  )
}

export default Footer
