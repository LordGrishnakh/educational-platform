import React from "react";
import ChooseCardStyling from "./ChooseCardStyling.module.css";
import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";

type CardProps = {
  watchedLessons: number[];
  index: number;
  title: string;
  imgUrl: string;
  rating: number;
  click: () => void;
  route: string;
};

const ChooseCard: React.FC<CardProps> = (props) => {

  return (
    <div className={ChooseCardStyling.Container} onClick={props.click}>
      <Link to={`courses/${props.route}`}>
        <div className={ChooseCardStyling.Card}>
          <img src={props.imgUrl} alt="JavaScript The Programming Language" />
          <div className={ChooseCardStyling.PlayBTN}>
            <div className={ChooseCardStyling.Icon}>test</div>
          </div>
        </div>
      </Link>
      <div className={ChooseCardStyling.Content}>
        <h2 className={ChooseCardStyling.Title}>{props.title}</h2>
        <p className={ChooseCardStyling.Author}>John TheGreat Doe</p>
        <div className={ChooseCardStyling.ProgressBar}>
          <span style={{ width: (props.watchedLessons.length - 1) / 10 * 100 + "%" }}></span>
          <div>{(props.watchedLessons.filter((item, index) => props.watchedLessons.indexOf(item) === index).length - 1) / 10 * 100}%</div>
        </div>
        <Rating rating={props.rating} idx={props.index} />
      </div>
    </div>
  );
};

export default ChooseCard;
