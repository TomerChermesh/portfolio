import React, { useRef, useState, useCallback, RefObject } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import type { JobExperience, Role } from '../types/experience'

type props = {
    title: string
    cardsInfo: JobExperience[]
}

export const CardsSlider: React.FC<props> = ({title, cardsInfo}) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const scrollRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null)

    const handleScroll = useCallback((): void => {
        const c: HTMLDivElement | null = scrollRef.current
        if (!c) return

        const index: number = Math.round(c.scrollLeft / c.clientWidth)
        if (index !== activeIndex) setActiveIndex(index)
    }, [activeIndex])

    const scrollTo = useCallback((index: number): void => {
        const c: HTMLDivElement | null = scrollRef.current
        if (!c) return

        c.scrollTo({left: index * c.clientWidth, behavior: 'smooth'})
    }, [])

    return (
        <Box sx={{pt: 6}}>
            <Box
                ref={scrollRef}
                onScroll={handleScroll}
                sx={{
                    overflowX: 'auto',
                    pb: 2,
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {display: 'none'},
                }}
            >
                <Box sx={{display: 'flex', minWidth: '100%'}}>
                    {cardsInfo.map(company => (
                        <Box key={company.company}
                             sx={{flex: '0 0 100%', scrollSnapAlign: 'start', px: {xs: 2, sm: 1}}}>
                            <Card
                                sx={{
                                    bgcolor: '#020617',
                                    borderRadius: 3,
                                    border: '1px solid rgba(148,163,184,0.5)',
                                    boxShadow: '0 18px 50px rgba(15,23,42,0.9)',
                                    maxWidth: {xs: '100%', sm: '80%', md: '65%'},
                                    mx: 'auto'
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
                                    <Box className='dot red'/>
                                    <Box className='dot yellow'/>
                                    <Box className='dot green'/>
                                    <Typography sx={{ml: 1}}>~/tomerchermesh/{title}</Typography>
                                </Box>

                                <CardContent
                                    sx={{
                                        fontFamily:
                                            'SF Mono, ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                                        fontSize: 16,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            flexWrap: 'wrap',
                                            justifyContent: 'space-between'
                                    }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                                            {company.link ? (
                                                <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: '#e5e7eb',
                                                        mb: 0.5,
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 0.5,
                                                        textDecoration: 'none',
                                                        cursor: 'pointer',
                                                        '&:hover': {textDecoration: 'underline'}
                                                    }}
                                                    component='a'
                                                    href={company.link}
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    {company.company}
                                                    <Box component='span' sx={{fontSize: 12}}>↗</Box>
                                                </Typography>
                                            ) : (
                                                <Typography sx={{fontWeight: 600, color: '#e5e7eb', mb: 0.5}}>
                                                    {company.company}
                                                </Typography>
                                            )}
                                            {company.isCurrentJob && (
                                                <Box
                                                    sx={{
                                                        px: 1,
                                                        py: 0.2,
                                                        bgcolor: 'rgba(34,197,94,0.15)',
                                                        border: '1px solid rgba(34,197,94,0.4)',
                                                        color: '#4ade80',
                                                        fontSize: 10,
                                                        borderRadius: '6px',
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    Current
                                                </Box>
                                            )}
                                        </Box>

                                        {company.logo && (
                                            <Box
                                                component='a'
                                                href={company.link || undefined}
                                                target={company.link ? '_blank' : undefined}
                                                rel={company.link ? 'noopener noreferrer' : undefined}
                                                sx={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 2,
                                                    border: '1px solid rgba(148,163,184,0.5)',
                                                    width: 50,
                                                    height: 50,
                                                    overflow: 'hidden',
                                                    bgcolor: '#020617'
                                                }}
                                            >
                                                <Box
                                                    component='img'
                                                    src={new URL(
                                                        `../assets/images/${company.logo}`,
                                                        import.meta.url
                                                    ).href}
                                                    alt={`${company.company} logo`}
                                                    sx={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain',
                                                        transition: 'transform 0.2s ease',
                                                        '&:hover': { transform: 'scale(1.07)' }
                                                }}
                                                />
                                            </Box>
                                        )}
                                    </Box>

                                    <Typography sx={{ fontSize: 12, color: '#9ca3af', mb: company.intro ? 1 : 1.5 }}>
                                        {company.location}
                                    </Typography>

                                    {company.intro?.trim()?.length > 0 && (
                                        <Typography sx={{ fontSize: 12, color: '#cbd5f5', mb: 1.5 }}>
                                            {company.intro}
                                        </Typography>
                                    )}

                                    {company.roles.map((role: Role) => {
                                        const lines: string[] = role.description
                                            ? role.description
                                                .split('\n')
                                                .map((line: string) => line.trim())
                                                .filter((line: string): boolean => line.length > 0)
                                            : []
                                        return (
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1,
                                                flexWrap: 'wrap',
                                                mb: 1.5
                                            }}>
                                                <Typography
                                                    className='entry-title'
                                                    sx={{ color: '#e5e7eb', fontWeight: 600 }}
                                                >
                                                    {role.name}
                                                </Typography>

                                                <Typography sx={{ fontSize: 12, color: '#9ca3af' }}>
                                                    {role.years}
                                                </Typography>

                                                {lines.map((line: string, index: number) => (
                                                    <Typography
                                                        key={index}
                                                        className='entry-body'
                                                        sx={{ fontSize: 12, color: '#d1d5db', width: '100%' }}
                                                    >
                                                        {`• ${line.replace(/^-+\s*/, '')}`}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        )
                                    })}
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
                {cardsInfo.map((_: JobExperience, index: number) => (
                    <Box
                        key={index}
                        onClick={() => scrollTo(index)}
                        sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            bgcolor: index === activeIndex ? '#e5e7eb' : 'rgba(148,163,184,0.6)',
                            transform: index === activeIndex ? 'scale(1.3)' : 'scale(1)',
                        }}
                    />
                ))}
            </Box>
        </Box>
    )
}
