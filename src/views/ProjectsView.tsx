// src/views/ProjectsView.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { BubbleGraph, BubbleConfig } from "../components/BubbleGraph";

export const ProjectsView: React.FC = () => {
  const openExternal = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const bubbles: BubbleConfig[] = [
    {
      id: "fpl",
      label: "FPL Mini-Leagues",
      subLabel: "Data",
      onClick: () => openExternal("https://fpl.tomerchermesh.com"),
    },
    // תוסיף כאן פרויקטים נוספים בעתיד
  ];

  return (
    <Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BubbleGraph centerLabel="Projects" bubbles={bubbles} />
      </Box>
    </Box>
  );
};
