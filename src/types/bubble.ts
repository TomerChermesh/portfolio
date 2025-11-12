export type BubbleConfig = {
  id: string;
  icon: string;
  label?: string;
  subLabel?: string;
  onClick?: () => void;
};