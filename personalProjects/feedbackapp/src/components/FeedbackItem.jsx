import { FaTimes, FaEdit } from "react-icons/fa";
import React, { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContect from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContect);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes style={{ color: "#F05454" }} />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit style={{ color: "#F05454" }} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
