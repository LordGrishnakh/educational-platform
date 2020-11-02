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
  const [courseProgress, setCourseProgress] = useState<any>();

  useEffect(() => {
    const route = `users/${localStorage.getItem("userId")}`;
    fetchCourses(setCourseProgress, route);
  }, []);
  if (!courseProgress) {
    return (
      <div>
        <i className="fa fa-cog fa-spin fa-8x" />
      </div>
    );
  }

  return (
    <div className={ChooseCourseStyling.Container}>
      <div className={ChooseCourseStyling.Title}>
        <h1>Мои Курсы</h1>
      </div>
      <div className={ChooseCourseStyling.Courses}>
        {courseProgress!.map((course: { title: string, rating: number, watchedLessons: string[], imgUrl: string }, idx: number) => (
          <ChooseCard
            watchedLessons={course.watchedLessons}
            index={idx}
            rating={course.rating}
            key={course.title}
            title={course.title}
            imgUrl={course.imgUrl}
            route={course.title.split(" ").join("-")}
            click={() => context.setRouteProp(course.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ChooseCoursePage;
