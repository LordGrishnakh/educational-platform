import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { fetchCourse } from "../../API/Authentication/Authentication";

import "./CoursePage.css";

interface Lecture {
  duration: number;
  id: number;
  title: string;
}

const CoursePage: React.FC = () => {
  // const [fetchedData, setFetchedData] = useState<Lecture[]>()

  // let fetchedData = {
  //   lecture_1: {
  //     duration: 2841,
  //     id: 1,
  //     title: "some title of lecture 1",
  //   },
  //   lecture_2: {
  //     duration: 4865,
  //     id: 2,
  //     title: "second lecture title",
  //   },
  //   lecture_3: {
  //     duration: 2290,
  //     id: 3,
  //     title: "title of third lecture",
  //   },
  //   lecture_4: {
  //     duration: 2564,
  //     id: 4,
  //     title: "lorem ipsum title four",
  //   },
  //   lecture_5: {
  //     duration: 3209,
  //     id: 5,
  //     title: "Mauris fringilla, velit eget scelerisque venenatis, tellus",
  //   },
  //   lecture_6: {
  //     duration: 1978,
  //     id: 6,
  //     title: "Vivamus at dapibus lacus, sit amet sagittis",
  //   },
  //   lecture_7: {
  //     duration: 2844,
  //     id: 7,
  //     title: "Morbi non neque lacus. Suspendisse viverra malesuada",
  //   },
  //   lecture_8: {
  //     duration: 3261,
  //     id: 8,
  //     title: "Integer non volutpat nisi. Phasellus non commodo",
  //   },
  //   lecture_9: {
  //     duration: 3450,
  //     id: 9,
  //     title: "Quisque pharetra auctor magna non maximus. Quisque",
  //   },
  //   lecture_10: {
  //     duration: 3856,
  //     id: 10,
  //     title: "Vestibulum ut consectetur nibh. Quisque justo turpis",
  //   },
  // };
  const context = useContext(AuthContext);
  const [selectedLecture, setSelectedLecture] = useState<Lecture>(
    context.lectures[0]
  );
  const convertSecsToMins = (duration: number) => {
    return Math.floor(duration / 60);
  }

  useEffect(() => {
    context.startLoading();
    fetchCourse(context.finishLoading, context.setCourseLectures);
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
              context.lectures.map((lecture) => (
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
                    {lecture.id}
                  </div>
                  <p className="lecture-title">{shorten(lecture.title)}</p>
                </div>
              ))}
          </div>
          <div className="course-container">
            <div className="lecture-info">
              <h1 className="lecture-header">{selectedLecture.title}</h1>
              <div className="lecture-duration">Lesson length <span className="duration">{convertSecsToMins(selectedLecture.duration)} min</span> </div>
              <div className="lecture-credits">Earn <b>10</b> credits for finishing this lesson</div>
              <div className="lecture-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, incidunt nesciunt molestiae odio architecto ad dolor dolorum vero, pariatur ipsa ex similique minima! Hic recusandae ratione quos possimus nemo cum!</div>
              <button onClick={()=>console.log("success")}>Mark as done</button>
            </div>
            <div className="video-player"></div>
          </div>
        </React.Fragment>
      ) : (
        <div>
          <i className="fa fa-cog fa-spin fa-8x" />
        </div>
      )}

      {/* 
        CURRENT_LECTURE_CARD
          TODO:
            1)INFOCARD -> COURSE TITLE + LENGTH(min) + CREDIT_AMOUTN + DESCRIPTION + COMPLETE_BUTTON 
            2)VIDEOPLAYER -> VIDEO_PLAYER + THUMBNAIL + CONTROL_PANEL
      */}
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
