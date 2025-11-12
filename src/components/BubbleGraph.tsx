import React from "react";
import {Box, ButtonBase, Typography, Avatar} from "@mui/material";
import {BubbleConfig} from "../types/bubble";

type BubbleGraphProps = {
    bubbles: BubbleConfig[];
};

export const BubbleGraph: React.FC<BubbleGraphProps> = ({bubbles}) => {
    const radius = 46;

    return (
        <Box className="bubble-graph">
            <Box className="center-wrapper">
                <Box className="center-circle">
                    <Box className="center-ring">
                        <Avatar
                            sx={{
                                width: 96,
                                height: 96,
                                fontSize: 32,
                                bgcolor: "rgba(15,23,42,0.95)",
                                color: "#e5e7eb",
                            }}
                        >
                            TC
                        </Avatar>
                    </Box>
                </Box>
            </Box>

            {bubbles.map((bubble, index) => {
                const angle = (2 * Math.PI * index) / bubbles.length - Math.PI / 2;
                const left = 50 + radius * Math.cos(angle);
                const top = 50 + radius * Math.sin(angle);

                return (
                    <Box key={bubble.id} className='orbit-bubble-wrapper' style={{left: `${left}%`, top: `${top}%`}}>
                        <ButtonBase className='orbit-bubble' onClick={bubble.onClick} disableRipple>
                            <Box className='orbit-inner'>
                                <Box className='orbit-icon'>{bubble.icon}</Box>
                            </Box>
                        </ButtonBase>

                        <Typography className='orbit-label-hover'>
                            {bubble.label}
                            {bubble.subLabel && <Typography component='span'
                                                            className='orbit-sublabel-hover'> · {bubble.subLabel}</Typography>}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};
