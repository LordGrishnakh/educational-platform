import React, { useState, useContext, useEffect } from "react";
import ChooseCourseStyling from "./ChooseCoursePage.module.css";
import ChooseCard from "../ChooseCard/ChooseCard";

import { AuthContext } from "../../context/AuthContext";
import { fetchCourses } from "../../API/Authentication/Authentication";

interface Lecture {
  duration: number;
  id: string;
  title: string;
  done: boolean;
}
const ChooseCoursePage = () => {
  const context = useContext(AuthContext);
  const [courseTitles, setCourseTitles] = useState<string[]>([""]);

  useEffect(() => {
    fetchCourses(setCourseTitles);
  }, []);
  if (!courseTitles) {
    return (
      <div>
        <i className="fa fa-cog fa-spin fa-8x" />
      </div>
    );
  }

  return (
    <div className={ChooseCourseStyling.Container}>
      <div className={ChooseCourseStyling.Title}>
        <h1>My Courses</h1>
        <button onClick={() => console.log(courseTitles)}>show state</button>
        <button onClick={() => console.log(context.route)}>show route prop</button>
      </div>
      <div className={ChooseCourseStyling.Courses}>
        {courseTitles!.map((course) => (
          <ChooseCard key={course} title={course} route={course.split(" ").join("-")} click={()=>context.setRouteProp(course)} />
        ))}
      </div>
    </div>
  );
};

export default ChooseCoursePage;
