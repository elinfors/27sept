import React, { useState } from 'react';
import './App.css';
import { Popup } from "./popup"
import { useRef } from 'react'


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
  const scrollToBottom = () => window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'     
    })   

  

    const myRefBottom = useRef(null)


  return (
    <div className="App">
      <header className="App-header js-scroll scrolled">
        <div className='header-content'>
      <div className="header-small-title">
          Vi ska gifta oss!
          </div>
        <div className="header-title-ElinSimon">
          Elin & Simon
          </div>
          <div className="header-date-small">
          27 september 2025
          </div>
          <div className="header-button">
          <button className="OSA-button" onClick={scrollToBottom}>OSA</button>
          </div>
          </div>
      </header>
      <div className="Schedule-content js-scroll">
        <p className="Section-title">Content</p>
      </div>  
      <div className="Info-content-2 js-scroll">
        <p className="Section-title">Content</p>
      </div>
      <div className="Info-content js-scroll">
        <p className="Section-title">Content</p>
      </div>
      <div className='Form-content js-scroll'>
          <div className="form-description">
          <div className="Section-title">OSA</div>
          <div>OSA genom att fylla i formuläret, senast den 30e juni 2025.</div>
          <div>Vu uppskattar om ni vill OSA en gång per person så att vi kan hålla koll på matpreferenser och allergier, tack!</div>
         </div>
      <div className= "form-container" ref={myRefBottom}>
     
      {showPopup ? <Popup closePopup={() => setShowPopup(false)} /> : null}
  
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
            /*required
            onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i din mailadress')}
            onInput={(e) => e.target.setCustomValidity('')}*/
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
    </div>
  );
}
export default App;

