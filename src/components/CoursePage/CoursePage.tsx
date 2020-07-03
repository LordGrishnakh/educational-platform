import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { fetchCourse } from "../../API/Authentication/Authentication";

import "./CoursePage.css";

interface Lecture {
  duration: number,
  id: number,
  title: string
}

const CoursePage: React.FC = () => {
  const fetchedData = {
    lecture_1: {
      duration: 2841,
      id: 1,
      title: "some title of lecture 1",
    },
    lecture_2: {
      duration: 4865,
      id: 2,
      title: "second lecture title",
    },
    lecture_3: {
      duration: 2290,
      id: 3,
      title: "title of third lecture",
    },
    lecture_4: {
      duration: 2564,
      id: 4,
      title: "lorem ipsum title four",
    },
    lecture_5: {
      duration: 3209,
      id: 5,
      title: "Mauris fringilla, velit eget scelerisque venenatis, tellus",
    },
    lecture_6: {
      duration: 1978,
      id: 6,
      title: "Vivamus at dapibus lacus, sit amet sagittis",
    },
    lecture_7: {
      duration: 2844,
      id: 7,
      title: "Morbi non neque lacus. Suspendisse viverra malesuada",
    },
    lecture_8: {
      duration: 3261,
      id: 8,
      title: "Integer non volutpat nisi. Phasellus non commodo",
    },
    lecture_9: {
      duration: 3450,
      id: 9,
      title: "Quisque pharetra auctor magna non maximus. Quisque",
    },
    lecture_10: {
      duration: 3856,
      id: 10,
      title: "Vestibulum ut consectetur nibh. Quisque justo turpis",
    },
  };
  const [selectedLecture, setSelectedLecture] = useState<Lecture>(fetchedData.lecture_1)
  const context = useContext(AuthContext);

  // useEffect(() => {
  //   fetchCourse();
  // }, [])
  const shorten = (title: string) => {
    return title.slice(0, 20) + "..."
  }

  return (
    <div>
      <div className="progress-bar">
        {fetchedData && Object.values(fetchedData).map((lecture) => (
          <div className="lecture" key={lecture.id} onClick={()=>setSelectedLecture(lecture)}>
            <div className="lecture-number" style={selectedLecture.id === lecture.id ? { backgroundColor: "#f0733a" } : { color: "black" }}>{lecture.id}</div>
            <p className="lecture-title">{shorten(lecture.title)}</p>
          </div>
        ))}
      </div>
      <button onClick={() => console.log(Object.values(fetchedData))}>
        FETCH COURSE
      </button>
      COURSES_PAGE - {context.authenticated.toString()}
      <div>title {selectedLecture.title}</div>
      <div>id {selectedLecture.id}</div>
      <div>duration {selectedLecture.duration}</div>
      {/* TODO:
              1)LOGO
              2)SEARCH_BAR
              3)NAV -> COURSES + COMMUNITY(blog) + TRACKING(todo app)
              4)Profile -> Name + viewmore->PROFILE(crud profile - backend firebase) + LOGOUT
              4)m.b. Credits -> personal score
         */}
      {/* PROGRESS_BAR 
          TODO: 
            1)From backend download info about course -> array of lectures - map into component that renders circle + lectureName - in circle write number of a lecture or a complete sign
            2)
      */}
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
