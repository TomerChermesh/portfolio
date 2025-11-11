import React from "react";

export const EducationView: React.FC = () => {
  return (
    <div className="terminal-card">
      <header className="terminal-header">
        <div className="dot red" />
        <div className="dot yellow" />
        <div className="dot green" />
        <span className="path">tomer@web:~/education</span>
      </header>

      <main className="terminal-content">
        <p className="line">
          <span className="prompt">$</span> cat education.md
        </p>

        <div className="entry">
          <div className="entry-title">
            B.Sc. Computer Science · Some University
          </div>
          <div className="entry-meta">2016–2020</div>
          <div className="entry-body">
            כאן נכניס בהמשך את תיאור התואר / הקורסים הרלוונטיים.
          </div>
        </div>
      </main>
    </div>
  );
};
