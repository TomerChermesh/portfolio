import React from "react";
import { BubbleGraph, BubbleConfig } from "../components/BubbleGraph";

export const InterestsView: React.FC = () => {
  // בינתיים מדגים כמה תחביבים לדוגמה
  const bubbles: BubbleConfig[] = [
    { id: "football", label: "Football" },
    { id: "data", label: "Data & Analytics" },
    { id: "games", label: "Board Games" },
    { id: "music", label: "Music" },
  ];

  return (
    <div className="detail-view">
      <h2 className="detail-title">Interests</h2>
      <BubbleGraph centerLabel="Tomer" bubbles={bubbles} />
    </div>
  );
};
