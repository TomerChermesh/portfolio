import React from "react";

export const ExperienceView: React.FC = () => {
  return (
    <div className="terminal-card">
      <header className="terminal-header">
        <div className="dot red" />
        <div className="dot yellow" />
        <div className="dot green" />
        <span className="path">tomer@web:~/experience</span>
      </header>

      <main className="terminal-content">
        <p className="line">
          <span className="prompt">$</span> cat experience.md
        </p>

        {/* פה נכניס אחר כך את המשרות האמיתיות שלך */}
        <div className="entry">
          <div className="entry-title">Company One · Software Engineer</div>
          <div className="entry-meta">2022–Present · TLV</div>
          <div className="entry-body">
            Lorem ipsum dolor sit amet, זה טקסט זמני שנחליף אחר כך.
          </div>
        </div>

        <div className="entry">
          <div className="entry-title">Company Two · Backend Developer</div>
          <div className="entry-meta">2020–2022 · Remote</div>
          <div className="entry-body">
            עוד מקום עבודה – גם כאן נשים בהמשך מידע אמיתי.
          </div>
        </div>
      </main>
    </div>
  );
};
