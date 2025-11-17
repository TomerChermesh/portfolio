import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import type { JobExperience, Role } from '../types/experience'
import { loadProfessionalExperience } from '../utils/experience'

const experiences: JobExperience[] = loadProfessionalExperience()

export const ExperienceView: React.FC = () => {
  return (
    <Box sx={{ pt: 6 }}>
      <Card
        sx={{
          bgcolor: '#020617',
          borderRadius: 3,
          border: '1px solid rgba(148,163,184,0.5)',
          boxShadow: '0 18px 50px rgba(15,23,42,0.9)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 1.5,
            py: 1,
            borderBottom: '1px solid rgba(30,64,175,0.5)',
            fontSize: 12,
            color: '#9ca3af',
            bgcolor: '#020617',
          }}
        >
          <Box className='dot red' />
          <Box className='dot yellow' />
          <Box className='dot green' />
          <Typography sx={{ ml: 1 }}>tomerchermesh/professionalExperience</Typography>
        </Box>

        <CardContent
          sx={{
            fontFamily: 'SF Mono, ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontSize: 13,
          }}
        >
          {experiences.map(company => (
            <Box key={company.company} sx={{ mb: 3 }}>
              <Typography sx={{ fontWeight: 600, color: '#e5e7eb', mb: 0.5 }}>{company.company}</Typography>

              <Typography sx={{ fontSize: 12, color: '#9ca3af', mb: company.intro ? 1 : 1.5 }}>
                {company.location}
                {company.isCurrentJob ? ' · Current' : ''}
              </Typography>

              {company.intro && company.intro.trim().length > 0 && (
                <Typography sx={{ fontSize: 12, color: '#cbd5f5', mb: 1.5 }}>{company.intro}</Typography>
              )}

              {company.roles.map((role: Role) => {
                const lines = role.description
                  ? role.description
                      .split('\n')
                      .map(line => line.trim())
                      .filter(line => line.length > 0)
                  : []

                return (
                  <Box
                    key={`${company.company}-${role.name}-${role.years}`}
                    className='entry'
                    sx={{ mb: 1.8 }}
                  >
                    <Typography className='entry-title' sx={{ color: '#e5e7eb' }}>{role.name}</Typography>

                    <Typography className='entry-meta' sx={{ fontSize: 12, color: '#9ca3af', mb: 0.5 }}>
                      {role.years} · {company.location}
                    </Typography>

                    {lines.map((line, index) => (
                      <Typography key={index} className='entry-body' sx={{ fontSize: 12, color: '#d1d5db' }}>
                        {line.replace(/^-+\s*/, '')}
                      </Typography>
                    ))}
                  </Box>
                )
              })}
            </Box>
          ))}

          {experiences.length === 0 && (
            <Typography sx={{ fontSize: 12, color: '#9ca3af' }}>No professional experience data found.</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}
