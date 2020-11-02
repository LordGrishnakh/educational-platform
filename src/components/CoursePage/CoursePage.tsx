import React, { useContext, useEffect, useState } from "react";
//@ts-ignore
import ReactPlayer from "react-player/youtube";
import { AuthContext } from "../../context/AuthContext";
import { fetchCourse, makeProgress } from "../../API/Authentication/Authentication";

import "./CoursePage.css";

interface Lecture {
  duration: number;
  id: string;
  title: string;
}

const CoursePage: React.FC = () => {
  const context = useContext(AuthContext);
  const [selectedLecture, setSelectedLecture] = useState<Lecture>(context.lectures[0]);
  const [, setInitiallyDoneLections] = useState<string[]>([])
  const convertSecsToMins = (duration: number) => {
    return Math.floor(duration / 60);
  };

  useEffect(() => {
    context.startLoading();
    fetchCourse(context.finishLoading, context.setCourseLectures, setSelectedLecture, setInitiallyDoneLections, localStorage.getItem("route"), localStorage.getItem("userId"));
  }, []);
  const shorten = (title: string) => {
    return title.slice(0, 20) + "...";
  };

  return (
    <div>
      {!context.loading ? (
        <React.Fragment>
          <div className="progress-bar">
            {context.lectures &&
              context.lectures.sort((a, b) => +a.id.split("-")[1] - +b.id.split("-")[1]).map((lecture) => (
                <div
                  className="lecture"
                  key={lecture.id}
                  onClick={() => setSelectedLecture(lecture)}
                >
                  <div
                    className="lecture-number"
                    style={
                      selectedLecture.id === lecture.id
                        ? { backgroundColor: "#f0733a" }
                        : { color: "black" }
                    }
                  >
                    {/* Если doneLections содержит id лекции - то покрасить в зелёный */}
                    {context.doneLections.includes(lecture.id) ? (
                      <i
                        style={{ color: "green" }}
                        className="fas fa-check"
                      ></i>
                    ) : (
                      lecture.id.split("-")[1]
                    )}
                  </div>
                  <p className="lecture-title">{shorten(lecture.title)}</p>
                </div>
              ))}
          </div>
          <div className="course-container">
            <div className="lecture-info">
              <h1 className="lecture-header">{selectedLecture.title}</h1>
              <div className="lecture-duration">
                Длина лекции{" "}
                <span className="duration">
                  {convertSecsToMins(selectedLecture.duration)} min
                </span>{" "}
              </div>
              <div className="lecture-credits">
                Получите <b>10</b> единиц валюты за прохождение этой лекции
              </div>
              <div className="lecture-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
                incidunt nesciunt molestiae odio architecto ad dolor dolorum
                vero, pariatur ipsa ex similique minima! Hic recusandae ratione
                quos possimus nemo cum!
              </div>
              <button
                onClick={() => {
                  context.increaseCredits(10);
                  context.setDoneLectionsArray(selectedLecture.id);
                  makeProgress(localStorage.getItem("userId"), localStorage.getItem("route"), JSON.parse(localStorage.getItem("doneLections")!))
                }}
                disabled={context.doneLections.includes(selectedLecture.id)}
              >
                { context.doneLections.includes(selectedLecture.id) ? "Лекция пройдена" : "Отметить как выполенено" }
              </button>
            </div>
            <div className="video-player">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div>
          <i className="fa fa-cog fa-spin fa-8x" />
        </div>
      )}
      {/* 
        COMMENT_SECTION
          TODO:
            1)USER_CARD -> ICON + NAME + ${number}LIKES + POSTED {number}DAYS_AGO + REPLY_BUTTON
            2)ADD_NEW_COMMENT -> TEXTAREA + ADD_A_COMMENT_BUTTON
      */}
    </div>
  );
};

export default CoursePage;
