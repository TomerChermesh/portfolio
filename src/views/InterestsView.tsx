// src/views/InterestsView.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { BubbleGraph, BubbleConfig } from "../components/BubbleGraph";

export const InterestsView: React.FC = () => {
  const bubbles: BubbleConfig[] = [
    { id: "football", label: "Football" },
    { id: "data", label: "Data & Analytics" },
    { id: "games", label: "Board Games" },
    { id: "music", label: "Music" },
  ];

  return (
    <Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Interests
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BubbleGraph centerLabel="Tomer" bubbles={bubbles} />
      </Box>
    </Box>
  );
};
