import React from "react";
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
      onClick: () =>
        openExternal("https://fpl.tomerchermesh.com"), // נחליט אח"כ על הדומיין
    },
    // בעתיד תוסיף כאן עוד בועות של פרויקטים
  ];

  return (
    <div className="detail-view">
      <h2 className="detail-title">Projects</h2>
      <BubbleGraph centerLabel="Projects" bubbles={bubbles} />
    </div>
  );
};
