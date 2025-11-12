import React from "react";
import { Box, ButtonBase, Typography, Avatar } from "@mui/material";
import {BubbleConfig} from "../types/bubble";



type BubbleGraphProps = {
  bubbles: BubbleConfig[];
};

export const BubbleGraph: React.FC<BubbleGraphProps> = ({ bubbles }) => {
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
          <Typography className="center-name">Tomer Chermesh</Typography>
        </Box>
      </Box>

      {bubbles.map((bubble, index) => {
        const angle = (2 * Math.PI * index) / bubbles.length - Math.PI / 2;
        const left = 50 + radius * Math.cos(angle);
        const top = 50 + radius * Math.sin(angle);

        return (
          <ButtonBase
            key={bubble.id}
            className="orbit-bubble"
            sx={{ left: `${left}%`, top: `${top}%` }}
            onClick={bubble.onClick}
          >
            <Box className="orbit-inner">
              <Box className="orbit-icon">{bubble.icon}</Box>
              <Typography className="orbit-label">{bubble.label}</Typography>
              {bubble.subLabel && (
                <Typography className="orbit-sublabel">
                  {bubble.subLabel}
                </Typography>
              )}
            </Box>
          </ButtonBase>
        );
      })}
    </Box>
  );
};
