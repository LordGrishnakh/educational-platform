import React, { useState } from "react";
import AddNewProject from "./AddNewProjectForm/AddNewProject";
import ProjectManager from "./ProjectManager/ProjectManager";
import Styles from "./Tracking.module.scss";

export interface Project {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

const Tracking: React.FC = () => {
  const [formShown, setFormShown] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: Math.random().toString(),
      title: "test",
      description: "rogi",
      active: true,
    },
    {
      id: Math.random().toString(),
      title: "test2",
      description: "rogi2",
      active: true,
    },
    {
      id: Math.random().toString(),
      title: "test3",
      description: "rogi3",
      active: true,
    },
  ]);

  const addProject = (project: Project) => {
    setProjects((prevState) => [...prevState, project]);
  };

  const switchProjectStatus = (projectId: string, status: boolean) => {
    const foundProject = projects.find((project) => project.id === projectId);
    if (foundProject) {
      foundProject.active = status;
      setProjects((prevState) => [...prevState]);
    }
  };

  return (
    <div className={Styles.Container}>
      {/* Сначала только ProjectManager = компонент с Активными и Законченными проектами */}
      {formShown && (
        <AddNewProject addProject={addProject} closeForm={setFormShown} />
      )}
      <ProjectManager
        switchProjectStatus={switchProjectStatus}
        projects={projects}
        formOpened={formShown}
        openForm={setFormShown}
      />
      {/* ProjectManager будет содержать в себе CTA(call to action), который отрендерит на экране рядом AddNewProjectForm */}
      {/* Надо продумать, как он будет появляться, т.к. я хочу анимировать слайд в сторону, т.е. динамически рендерить в jsx не вариант */}
      {/* Попробовать -> изначально оба компонента находятся в одной точке, но форма имеет opacity: 0 */}
    </div>
  );
};

export default Tracking;
