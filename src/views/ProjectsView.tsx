// src/views/ProjectsView.tsx
import React from "react";
import {Box, Typography} from "@mui/material";
import { BubbleGraph } from "../components/BubbleGraph";
import {BubbleConfig} from "../types/bubble";
import {PROJECT_FPL_MLD} from "../constants/links";
import FPL_PROJECT_IMG from 'assets/fpl_mld_img.png'


export const ProjectsView: React.FC = () => {
  const openExternal = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const bubbles: BubbleConfig[] = [
    {
      id: "fpl",
      icon: <img src={FPL_PROJECT_IMG} alt={'fpl_mld'}/>,
      label: "FPL Mini-Leagues Data",
      onClick: () => openExternal(PROJECT_FPL_MLD),
    },
  ];

  return (
    <Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Projects
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <BubbleGraph bubbles={bubbles} />
      </Box>
    </Box>
  );
};
