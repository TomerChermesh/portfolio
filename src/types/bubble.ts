import React from "react";
import type {View} from "../App";

export type BubbleConfig = {
  id: string;
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
};

export type BubbleGraphProps = {
  bubbles: BubbleConfig[]
}

export type HomeBubbleGraphProps = {
  onChangeView: (view: View) => void
}