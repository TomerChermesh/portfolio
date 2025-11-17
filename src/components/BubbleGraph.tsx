import React from 'react'
import { Box, ButtonBase, Typography, Avatar } from '@mui/material'
import {BubbleConfig, BubbleGraphProps} from '../types/bubble'
import { BUBBLE_RADIUS } from '../constants/bubbles'



export const BubbleGraph: React.FC<BubbleGraphProps> = ({bubbles}) => {
    return (
        <Box className='bubble-graph'>
            <Box className='center-wrapper'>
                <Box className='center-circle'>
                    <Box className='center-ring'>
                        <Avatar
                            sx={{
                                width: 96,
                                height: 96,
                                fontSize: 32,
                                bgcolor: 'rgba(15,23,42,0.95)',
                                color: '#e5e7eb',
                            }}
                        >
                            TC
                        </Avatar>
                    </Box>
                </Box>
            </Box>

            {bubbles.map((bubble: BubbleConfig, index: number) => {
                const angle: number = (2 * Math.PI * index) / bubbles.length - Math.PI / 2
                const left: number = 50 + BUBBLE_RADIUS * Math.cos(angle)
                const top: number = 50 + BUBBLE_RADIUS * Math.sin(angle)

                return (
                    <Box key={bubble.id} className='orbit-bubble-wrapper' style={{left: `${left}%`, top: `${top}%`}}>
                        <ButtonBase className='orbit-bubble' onClick={bubble.onClick} disableRipple>
                            <Box className='orbit-inner'>
                                <Box className='orbit-icon'>{bubble.icon}</Box>
                            </Box>
                        </ButtonBase>
                        <Typography className='orbit-label-hover'>{bubble.label}</Typography>
                    </Box>
                )
            })}
        </Box>
    )
}
