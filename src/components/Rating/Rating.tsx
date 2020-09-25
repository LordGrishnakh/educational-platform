import React, { useState } from "react";
import RatingStyles from "./Rating.module.css";
import { setRating } from "../../API/Authentication/Authentication";

const Rating: React.FC< {rating: number, idx: number} > = (props) => {
  const [rate, setRate] = useState<Number>(0);
  const [finalRate, setFinalRate] = useState<Number>(props.rating);

  return (
    <div className={RatingStyles.Rating}>
      <div onMouseEnter={() => setRate(1)}
           onMouseLeave={() => setRate(0)}
           onClick={() => {setFinalRate(1); setRating(localStorage.getItem("userId"), props.idx, 1)}}>
        <i className="fas fa-star" style={rate >= 1 || finalRate >= 1 ? {color: "orange"} : {color: "#ccc"}}></i>
      </div>
      <div onMouseEnter={() => setRate(2)}
           onMouseLeave={() => setRate(0)}
           onClick={() => {setFinalRate(2); setRating(localStorage.getItem("userId"), props.idx, 2)}}>
        <i className="fas fa-star" style={rate >= 2 || finalRate >= 2 ? {color: "orange"} : {color: "#ccc"}}></i>
      </div>
      <div onMouseEnter={() => setRate(3)}
           onMouseLeave={() => setRate(0)}
           onClick={() => {setFinalRate(3); setRating(localStorage.getItem("userId"), props.idx, 3)}}>
        <i className="fas fa-star" style={rate >= 3 || finalRate >= 3 ? {color: "orange"} : {color: "#ccc"}}></i>
      </div>
      <div onMouseEnter={() => setRate(4)}
           onMouseLeave={() => setRate(0)}
           onClick={() => {setFinalRate(4); setRating(localStorage.getItem("userId"), props.idx, 4)}}>
        <i className="fas fa-star" style={rate >= 4 || finalRate >= 4 ? {color: "orange"} : {color: "#ccc"}}></i>
      </div>
      <div onMouseEnter={() => setRate(5)}
           onMouseLeave={() => setRate(0)}
           onClick={() => {setFinalRate(5); setRating(localStorage.getItem("userId"), props.idx, 5)}}>
        <i className="fas fa-star" style={rate === 5 || finalRate === 5 ? {color: "orange"} : {color: "#ccc"}}></i>
      </div>
      {finalRate}
    </div>
  );
};

export default Rating;
