// src/components/BubbleGraph.tsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";

export type BubbleConfig = {
  id: string;
  label: string;
  subLabel?: string;
  onClick?: () => void;
};

type BubbleGraphProps = {
  centerLabel: string;
  bubbles: BubbleConfig[];
};

export const BubbleGraph: React.FC<BubbleGraphProps> = ({
  centerLabel,
  bubbles,
}) => {
  const radius = 38;

  return (
    <Box className="bubble-graph">
      <Box className="bubble bubble-center">
        <Typography variant="subtitle1" className="bubble-label">
          {centerLabel}
        </Typography>
      </Box>

      {bubbles.map((bubble, index) => {
        const angle = (2 * Math.PI * index) / bubbles.length;
        const left = 50 + radius * Math.cos(angle);
        const top = 50 + radius * Math.sin(angle);

        return (
          <Button
            key={bubble.id}
            className="bubble bubble-node"
            sx={{ left: `${left}%`, top: `${top}%` }}
            onClick={bubble.onClick}
          >
            <Typography className="bubble-label">
              {bubble.label}
            </Typography>
            {bubble.subLabel && (
              <Typography
                className="bubble-sublabel"
                sx={{ opacity: 0.8, fontSize: 11 }}
              >
                {bubble.subLabel}
              </Typography>
            )}
          </Button>
        );
      })}
    </Box>
  );
};
