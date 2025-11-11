import React from "react";

type Props = {
  onClick: () => void;
};

export const BackButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="back-button" onClick={onClick}>
      &lt; Back
    </button>
  );
};
