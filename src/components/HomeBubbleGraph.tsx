import React from "react";
import { BubbleGraph, BubbleConfig } from "./BubbleGraph";
import type { View } from "../App";

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

  const bubbles: BubbleConfig[] = [
    {
      id: "cv",
      label: "CV",
      onClick: downloadCv,
    },
    {
      id: "projects",
      label: "Projects",
      onClick: () => onChangeView("projects"),
    },
    {
      id: "github",
      label: "GitHub",
      subLabel: "Profile",
      onClick: () =>
        openExternal("https://github.com/TomerChermesh"),
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      subLabel: "Profile",
      onClick: () =>
        openExternal("https://www.linkedin.com/in/tomerchermesh"),
    },
    {
      id: "experience",
      label: "Professional",
      subLabel: "Experience",
      onClick: () => onChangeView("experience"),
    },
    {
      id: "education",
      label: "Education",
      onClick: () => onChangeView("education"),
    },
    {
      id: "interests",
      label: "Interests",
      onClick: () => onChangeView("interests"),
    },
  ];

  return (
    <div className="home-layout">
      <BubbleGraph centerLabel="Tomer Chermesh" bubbles={bubbles} />
    </div>
  );
};
