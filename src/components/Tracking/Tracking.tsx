import React from "react";
import ProjectManager from "./ProjectManager/ProjectManager";

const Tracking: React.FC = () => {
  return (
    <>
      {/* Сначала только ProjectManager = компонент с Активными и Законченными проектами */}
      <ProjectManager />
      {/* ProjectManager будет содержать в себе CTA(call to action), который отрендерит на экране рядом AddNewProjectForm */}
      {/* Надо продумать, как он будет появляться, т.к. я хочу анимировать слайд в сторону, т.е. динамически рендерить в jsx не вариант */}
      
    </>
  )
};

export default Tracking;
