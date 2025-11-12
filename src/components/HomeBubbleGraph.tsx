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
import type { View } from "../App";
import {BubbleConfig} from "../types/bubble";

type Props = {
  onChangeView: (view: View) => void;
};

export const HomeBubbleGraph: React.FC<Props> = ({ onChangeView }) => {
  const openExternal = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const downloadCv = () => {
    window.open("/TomerChermeshCV.pdf", "_blank");
  };

  const iconStyle = { fontSize: 26 };

  const bubbles: BubbleConfig[] = [
    {
      id: "experience",
      label: "Professional",
      subLabel: "Experience",
      icon: <WorkOutlineIcon sx={iconStyle} />,
      onClick: () => onChangeView("experience"),
    },
    {
      id: "education",
      label: "Education",
      icon: <SchoolIcon sx={iconStyle} />,
      onClick: () => onChangeView("education"),
    },
    {
      id: "interests",
      label: "Interests",
      icon: <InterestsIcon sx={iconStyle} />,
      onClick: () => onChangeView("interests"),
    },
    {
      id: "cv",
      label: "CV",
      icon: <DescriptionIcon sx={iconStyle} />,
      onClick: downloadCv,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      subLabel: "Profile",
      icon: <LinkedInIcon sx={iconStyle} />,
      onClick: () =>
        openExternal("https://www.linkedin.com/in/your-linkedin"), // לעדכן
    },
    {
      id: "github",
      label: "GitHub",
      subLabel: "Profile",
      icon: <GitHubIcon sx={iconStyle} />,
      onClick: () => openExternal("https://github.com/TomerChermesh"),
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderSpecialIcon sx={iconStyle} />,
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
