import React from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* TODO:
              1)LOGO
              2)SEARCH_BAR
              3)NAV -> COURSES + COMMUNITY(blog) + TRACKING(todo app)
              4)Profile -> Name + viewmore->PROFILE(crud profile - backend firebase) + LOGOUT
              4)m.b. Credits -> personal score
         */}
      </header>
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
}

export default App;
