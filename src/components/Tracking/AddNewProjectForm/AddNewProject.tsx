import React, { useRef } from "react";
import { Project } from "../Tracking";
import Styles from "./AddNewProject.module.scss";

const AddNewProject: React.FC<{
  closeForm: (arg: boolean) => void;
  addProject: (project: Project) => void;
}> = (props) => {
  const projectTitleRef = useRef<HTMLInputElement>(null);
  const projectDescriptionRef = useRef<HTMLTextAreaElement>(null);

  const clearInputs = () => {
    projectTitleRef.current!.value = "";
    projectDescriptionRef.current!.value = "";
  };

  const addProjectHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.addProject({
      id: Math.random().toString(),
      title: projectTitleRef.current!.value,
      description: projectDescriptionRef.current!.value,
      active: true,
    });
    clearInputs();
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.Header}>ДОБАВИТЬ ПРОЕКТ</div>
      <form onSubmit={addProjectHandler}>
        <label>Наименование</label>
        <input minLength={3} required type="text" ref={projectTitleRef} />
        <label>Описание</label>
        <textarea minLength={3} required ref={projectDescriptionRef} />
        <button type="submit">Добавить</button>
        <button
          className={Styles.CloseBtn}
          onClick={() => props.closeForm(false)}
        >
          Закрыть форму
        </button>
      </form>
    </div>
  );
};

export default AddNewProject;
