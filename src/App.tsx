import React, { useState } from "react";
import "./App.css";
import { HomeBubbleGraph } from "./components/HomeBubbleGraph";
import { ExperienceView } from "./views/ExperienceView";
import { EducationView } from "./views/EducationView";
import { InterestsView } from "./views/InterestsView";
import { ProjectsView } from "./views/ProjectsView";
import { BackButton } from "./components/BackButton";

export type View =
  | "home"
  | "experience"
  | "education"
  | "interests"
  | "projects";

function App() {
  const [view, setView] = useState<View>("home");

  const goHome = () => setView("home");

  return (
    <div className="page">
      {view === "home" && (
        <HomeBubbleGraph onChangeView={setView} />
      )}

      {view !== "home" && (
        <div className="detail-layout">
          <BackButton onClick={goHome} />

          {view === "experience" && <ExperienceView />}
          {view === "education" && <EducationView />}
          {view === "interests" && <InterestsView />}
          {view === "projects" && <ProjectsView />}
        </div>
      )}
    </div>
  );
}

export default App;
