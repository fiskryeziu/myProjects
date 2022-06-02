import React, { useContext } from "react";
import FeedbackContect from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContect);
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4> Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;
