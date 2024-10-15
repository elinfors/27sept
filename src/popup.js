import React from "react";
import "./popup.css";
export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <h1>{text}</h1>
      <button className="popup-button" onClick={closePopup}>Stäng</button>
     </div>
    </div>
  );
};