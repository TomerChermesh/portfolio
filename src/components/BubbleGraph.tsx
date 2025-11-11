import React from "react";

export type BubbleConfig = {
  id: string;
  label: string;
  subLabel?: string;
  onClick?: () => void;
};

type BubbleGraphProps = {
  centerLabel: string;
  bubbles: BubbleConfig[];
};

export const BubbleGraph: React.FC<BubbleGraphProps> = ({
  centerLabel,
  bubbles,
}) => {
  const radius = 38; // באחוזים יחסית למיכל

  return (
    <div className="bubble-graph">
      <div className="bubble bubble-center">
        <span className="bubble-label">{centerLabel}</span>
      </div>

      {bubbles.map((bubble, index) => {
        const angle = (2 * Math.PI * index) / bubbles.length;
        const left = 50 + radius * Math.cos(angle);
        const top = 50 + radius * Math.sin(angle);

        return (
          <button
            key={bubble.id}
            className="bubble bubble-node"
            style={{ left: `${left}%`, top: `${top}%` }}
            onClick={bubble.onClick}
          >
            <span className="bubble-label">{bubble.label}</span>
            {bubble.subLabel && (
              <span className="bubble-sublabel">{bubble.subLabel}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};
