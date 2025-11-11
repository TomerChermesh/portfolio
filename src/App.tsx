import React from 'react'

export default function App() {
  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
          <span className="path">tomer@web:~</span>
        </header>

        <main className="content">
          <p className="line">
            <span className="prompt">$</span> whoami
          </p>
          <p className="line primary">Tomer Chermesh · Software engineer</p>

          <p className="line">
            <span className="prompt">$</span> projects
          </p>
          <ul className="links">
            <li>
              <a href="https://cv.your-domain.com" target="_blank" rel="noreferrer">
                <span className="tag">cv</span>
                <span className="label">My resume</span>
              </a>
            </li>
            <li>
              <a href="https://fpl.your-domain.com" target="_blank" rel="noreferrer">
                <span className="tag">fpl</span>
                <span className="label">FPL Mini League Data</span>
              </a>
            </li>
          </ul>

          <p className="line">
            <span className="prompt">$</span> contact
          </p>
          <ul className="links small">
            <li>
              <a href="mailto:you@your-domain.com">
                <span className="tag">mail</span>
                <span className="label">you@your-domain.com</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/YourGitHubUser" target="_blank" rel="noreferrer">
                <span className="tag">github</span>
                <span className="label">@YourGitHubUser</span>
              </a>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
}
