import React from "react";
import "./popup.css";
export const Popup = ({ text, closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
        <div className="popup-text-container">
            {text}
        </div>

            <button className="popup-button" onClick={closePopup}>Stäng</button>

     </div>
    </div>
  );
};