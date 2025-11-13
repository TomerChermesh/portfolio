import React from "react";
import { Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolIcon from "@mui/icons-material/School";
import InterestsIcon from "@mui/icons-material/Interests";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

import { BubbleGraph } from "./BubbleGraph";
import {BubbleConfig, BubbleGraphProps} from "../types/bubble";
import {CV_FILE_PATH, GITHUB_PROFILE, LINKEDIN_PROFILE} from "../constants/links";
import {ICON_STYLE} from "../constants/style";


export const HomeBubbleGraph: React.FC<BubbleGraphProps> = ({ onChangeView }) => {
  const openExternal = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const downloadCv = () => {
    window.open(CV_FILE_PATH, "_blank");
  };

  const bubbles: BubbleConfig[] = [
    {
      id: "cv",
      label: "CV",
      icon: <DescriptionIcon sx={ICON_STYLE} />,
      onClick: downloadCv,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: <LinkedInIcon sx={ICON_STYLE} />,
      onClick: () =>
        openExternal(LINKEDIN_PROFILE)
    },
    {
      id: "github",
      label: "GitHub",
      icon: <GitHubIcon sx={ICON_STYLE} />,
      onClick: () => openExternal(GITHUB_PROFILE)
    },
    {
      id: "interests",
      label: "Interests",
      icon: <InterestsIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView("interests"),
    },
    {
      id: "experience",
      label: "Professional Experience",
      icon: <WorkOutlineIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView("experience"),
    },
    {
      id: "education",
      label: "Education",
      icon: <SchoolIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView("education"),
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderSpecialIcon sx={ICON_STYLE} />,
      onClick: () => onChangeView("projects"),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BubbleGraph bubbles={bubbles} />
    </Box>
  );
};
