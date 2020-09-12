import React, { useState } from "react";
import ChooseCardStyling from "./ChooseCardStyling.module.css";
import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";

type CardProps = {
  title: string,
  click: () => void,
  route: string
}

const ChooseCard: React.FC<CardProps> = (props) => {
  const [progress, setProgress] = useState(1);

  return (
    <Link to={`courses/${props.route}`}>
      <div className={ChooseCardStyling.Container} onClick={props.click}>
        <div className={ChooseCardStyling.Card}>
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=180&q=80"
            alt="JavaScript The Programming Language"
          />
          <div className={ChooseCardStyling.PlayBTN}>
            <div className={ChooseCardStyling.Icon}>test</div>
          </div>
        </div>
        <div className={ChooseCardStyling.Content}>
          <h2 className={ChooseCardStyling.Title}>
            {props.title}
          </h2>
          <p className={ChooseCardStyling.Author}>John TheGreat Doe</p>
          <div className={ChooseCardStyling.ProgressBar}>
            <span style={{ width: progress + "%" }}></span>
            <div>{progress}%</div>
          </div>
          <Rating />
          <button
            onClick={() => {
              if (progress > 99) return;
              return setProgress((progress) => progress + 10);
            }}
          >
            MOCK PROGRESS
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ChooseCard;
