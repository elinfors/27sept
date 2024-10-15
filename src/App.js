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
    e.preventDefault();
    console.log("Submitted")
    setName("");
    setEmail("");
    setPref("");
    formEle.reset();
    setShowPopup(true);
    const formData = new FormData(formEle)
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
        <p id="Homepage_title">
          Elin & Simon
     </p>
     <p id="Homepage_title">
          27 09 25
     </p>
     <p>Södermalm 
     </p>
     <p>27 September 2025
     </p>

      </header>
      <div className="Content js-scroll">
        <p className="Section-title">Content</p>
      </div>
      <div className="Content js-scroll">
     
      {showPopup ? <Popup text="Tack för ditt svar! Glöm inte att OSA för alla i ditt sällskap :)" closePopup={() => setShowPopup(false)} /> : null}
    
      <form className="form" onSubmit={handleSubmit}>
        <p className="Form-title">För- och efternamn</p>
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
        <p className="Form-title">Mailadress</p>
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

      <label class="form-control">
       <input 
       type="radio" 
       name="OSA" 
       value="Jag kommer!"
       className="form-input-radio"
       required
      onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i om du kan komma')}
      onInput={(e) => e.target.setCustomValidity('')}/>
        Jag kommer!
      </label>
  
      <label class="form-control">
       <input 
       type="radio" 
       name="OSA" 
       value="Jag kan tyvärr inte komma"
       className="form-input-radio"/>
       Jag kan tyvärr inte komma
       </label>

        <p className="Form-title">Matpreferenser</p>
        <input
        type="text"
        name="Preferences"
        onChange={handleChangePref}
        value={Pref}
        placeholder="Matpreferenser"
        className="form-input"
      />
      <button type="submit">OSA</button>
    </form>

      </div>
    </div>
  );
}

export default App;

