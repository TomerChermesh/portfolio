import { Box, Card, CardContent, Typography } from "@mui/material"
import { SkillCategory } from "../types/skill"

type SkillCardProps = SkillCategory & {
    onHover: (id: string) => void
    onLeave: () => void
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, logos, onHover, onLeave }) => {
    return (
        <Card
            sx={{
                bgcolor: '#020617',
                borderRadius: 3,
                border: '1px solid rgba(148,163,184,0.5)',
                boxShadow: '0 18px 50px rgba(15,23,42,0.9)',
                width: {xs: '100%', sm: 280},
                maxWidth: {xs: 280, sm: 'none'},
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardContent sx={{ p: {xs: 1, sm: 1.5}, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: {xs: 12, sm: 14}, color: '#9ca3af', mb: {xs: 0.75, sm: 1.5}, textAlign: 'center' }}>
                    {title}
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: {xs: 0.5, sm: 1},
                        justifyItems: 'center',
                        flex: 1,
                    }}
                >
                    {logos.map(logo => (
                        <Box
                            key={logo.id}
                            onMouseEnter={() => onHover(logo.id)}
                            onMouseLeave={onLeave}
                            sx={{
                                width: '100%',
                                aspectRatio: '1',
                                maxWidth: {xs: 50, sm: 70},
                                borderRadius: 2,
                                border: '1px solid rgba(148,163,184,0.35)',
                                bgcolor: 'rgba(15,23,42,0.55)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                transition: 'transform 0.15s ease',
                                '&:hover': { transform: 'scale(1.06)' },
                                '& img': {
                                    width: '70%',
                                    height: '70%',
                                    objectFit: 'contain',
                                },
                            }}
                            title={logo.label}
                        >
                            {typeof logo.icon === 'string' ? (
                                <img 
                                    src={logo.icon} 
                                    alt={logo.label || ''} 
                                />
                            ) : (
                                logo.icon
                            )}
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
}
