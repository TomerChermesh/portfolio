import React from "react";

export type BubbleConfig = {
  id: string;
  icon: React.ReactNode;
  label?: string;
  subLabel?: string;
  onClick?: () => void;
};