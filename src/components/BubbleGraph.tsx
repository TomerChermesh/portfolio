import React, {useState} from 'react'
import { Box, ButtonBase, Typography, Avatar } from '@mui/material'
import { BubbleConfig, BubbleGraphProps } from '../types/bubble'
import { BUBBLE_RADIUS } from '../constants/bubbles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { CENTER_ICON_STYLE } from '../constants/style'


export const BubbleGraph: React.FC<BubbleGraphProps> = ({bubbles, toChangeCenterIcon, initialCenterIcon}) => {
    const [centerIcon, setCenterIcon] = useState<React.ReactNode | null>(initialCenterIcon ?? null)

    const handleBubbleClick = (bubble: BubbleConfig): void => {
        if (toChangeCenterIcon) setCenterIcon(bubble.icon)
        if (bubble.onClick) bubble.onClick()
    }

    return (
        <Box className='bubble-graph'>
            <Box className='center-wrapper'>
                <Box className='center-circle'>
                    <Box className='center-ring'>
                        <Avatar
                            sx={{
                                width: 120,
                                height: 120,
                                fontSize: 32,
                                bgcolor: 'rgba(15,23,42,0.95)',
                                color: '#e5e7eb',
                            }}
                        >
                            {centerIcon ?? (<AccountCircleIcon sx={CENTER_ICON_STYLE} />)}
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
                        <ButtonBase className='orbit-bubble' onClick={(): void => handleBubbleClick(bubble)} disableRipple>
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
