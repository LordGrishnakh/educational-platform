import React from "react";
import Styles from "./ProjectManager.module.scss";
import { Project } from "../Tracking";

const ProjectManager: React.FC<{
  formOpened: boolean;
  openForm: (arg: boolean) => void;
  projects: Project[];
  switchProjectStatus: (projId: string, status: boolean) => void;
}> = (props) => {
  const dragStartHandler = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
    e.dataTransfer.effectAllowed = "move";
  };
  const dragEndHandler = (e: React.DragEvent) => {
    e.currentTarget.parentElement?.parentElement?.classList.remove("droppable");
  };
  const dragOverHandler = (e: React.DragEvent) => {
    if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
      e.preventDefault();
      if (e.currentTarget.className !== "droppabe") {
        e.currentTarget.classList.add("droppable");
      }
    }
  };
  const dragLeaveHandler = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("droppable");
  };
  const dropHandler = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("droppable");
    const prjId = e.dataTransfer!.getData("text/plain");
    console.log(e.currentTarget.classList[0].includes("Active"));
    props.switchProjectStatus(prjId, e.currentTarget.classList[0].includes("Active"));
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.Header}>ПРОЕКТЫ</div>
      <div className={Styles.Projects}>
        <div
          className={Styles.Active}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          onDrop={dropHandler}
        >
          <header>
            <h2>АКТИВНЫЕ ПРОЕКТЫ</h2>
          </header>
          <ul>
            {props.projects
              .filter((prj) => prj.active === true)
              .map((project) => (
                <li
                  id={project.id}
                  draggable
                  onDragStart={dragStartHandler}
                  onDragEnd={dragEndHandler}
                  className={Styles.Project}
                  key={Math.random().toString()}
                >
                  <h2>{project.title}</h2>
                  <h3>{project.description}</h3>
                </li>
              ))}
          </ul>
        </div>
        <div
          className={Styles.Finished}
          onDragOver={dragOverHandler}
          onDragLeave={dragLeaveHandler}
          onDrop={dropHandler}
        >
          <header>
            <h2>ЗАВЕРШЁННЫЕ ПРОЕКТЫ</h2>
          </header>
          <ul>
            {props.projects
              .filter((prj) => prj.active === false)
              .map((project) => (
                <li
                  id={project.id}
                  draggable
                  onDragStart={dragStartHandler}
                  onDragEnd={dragEndHandler}
                  className={Styles.Project}
                  key={Math.random().toString()}
                >
                  <h2>{project.title}</h2>
                  <h3>{project.description}</h3>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <button
        className={Styles.CloseBtn}
        disabled={props.formOpened}
        onClick={() => props.openForm(true)}
      >
        Добавить проект
      </button>
    </div>
  );
};

export default ProjectManager;
