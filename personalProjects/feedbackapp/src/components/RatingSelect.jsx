import React, { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {[...Array(10)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <li key={index}>
            <input
              type="radio"
              id={`num${givenRating}`}
              name="rating"
              value={givenRating}
              onChange={handleChange}
              checked={selected === givenRating}
            />
            <label htmlFor={`num${givenRating}`}>{givenRating}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingSelect;
