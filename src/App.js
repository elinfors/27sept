import React, { useState, useEffect } from 'react';
import './App.css';
import { Popup } from "./popup"


function App() {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pref, setPref] = useState("");
  const [showPopup, setShowPopup] = useState(false)


  const handleChangeName= (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePref = (e) => {
    setPref(e.target.value);
  };

  const handleSubmit = (e) => {
    const formEle = document.querySelector("form");
    console.log(e.target.value)
    e.preventDefault();
    setName("");
    setEmail("");
    setPref("");
    setShowPopup(true);
    const formData = new FormData(formEle)
    formEle.reset();
    fetch("https://script.google.com/macros/s/AKfycbx2lj-xS4Ksevj-ayBCAvg7PB7Gm0HvhuAoCOJ67-6CFvVJnOzVPU4KdYgKPsBA-r3G/exec",
      {
      method: "POST",
      body: formData
      }
    )
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="header-title-ElinSimon">
          ELIN & SIMON
          </div>
          <div className="header-date">
          27 09 25
          </div>
          <div className="header-date-small">
          27 September 2025
          </div>
          <div className="header-location">
          Södermalm
          </div>
      </header>
      <div className="Schedule-content js-scroll">
        <p className="Section-title">Content</p>
      </div>
      <div className="Info-content js-scroll">
        <p className="Section-title">Content</p>
      </div>
      <div className= "form-container js-scroll">
     
      {showPopup ? <Popup text="Tack för ditt svar! Glöm inte att OSA för alla i ditt sällskap :)" closePopup={() => setShowPopup(false)} /> : null}
    
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-input-section">
            <label>För- och efternamn</label>
            <input
            type="text"
            name="Name"
            onChange={handleChangeName}
            value={Name}
            placeholder="För- och efternamn"
            className="form-input"
            required
            onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i ditt namn')}
            onInput={(e) => e.target.setCustomValidity('')}
            />
        </div>
        <div className="form-input-section">
        <label>Mailadress</label>
            <input
            type="text"
            name="Email"
            onChange={handleChangeEmail}
            value={Email}
            placeholder="Mailadress"
            className="form-input"
            required
            onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i din mailadress')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </div>
        <div className="form-radio-section">
        <div className="form-radio-item">
            <input 
            type="radio" 
            name="OSA" 
            value="Jag kommer!"
            className="form-input-radio"
            required
            onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i om du kan komma')}
            onInput={(e) => e.target.setCustomValidity('')}/>
            <label>Jag kommer!</label>
        </div>
        <div className="form-radio-item">
            <input 
            type="radio" 
            name="OSA" 
            value="Jag kan tyvärr inte komma"
            className="form-input-radio"/>
             <label> Jag kan tyvärr inte komma</label>
          </div>
        </div>

      <div className="form-input-section">
            <label>Matpreferenser</label>
            <input
            type="text"
            name="Preferences"
            onChange={handleChangePref}
            value={Pref}
            placeholder="Matpreferenser"
            className="form-input"
          />
      </div>
    
      <button className="submit-button" type="submit">OSA</button>
  
    </form>

      </div>
    </div>
  );
}
export default App;

