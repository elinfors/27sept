import React from "react";
import "./popup.css";
export const Popup = ({closePopup }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
        <div className="popup-text-container">
        <div> Tack för ditt svar! </div>
        <div>Glöm inte att OSA för alla i ditt sällskap.</div>
        </div>

            <button className="popup-button" onClick={closePopup}>Stäng</button>

     </div>
    </div>
  );
};