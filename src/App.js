import React, { useState } from 'react';
import './App.css';
import { Popup } from "./popup"
import { useRef } from 'react'
import torn from './church_stroke.png'
import venue from './carls_red_new.png'
import cheers from './cheers11.png'
import water from './vattenkokare1.png'

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
          27 september 2025
          </div>
        <div className="header-title-ElinSimon">
          Elin & Simon
          </div>
          <div className="header-date-small">
          Vi ska gifta oss och hoppas att du vill fira det med oss!
          </div>
          {/*
          <div className="header-button">
          <button className="OSA-button" onClick={scrollToBottom}>OSA</button>
          </div>*/}
          </div>
      </header>
      <div className="Schedule-content js-scroll">
          <div className="Schedule-container">
           {/* <p className="Section-title">Högalids&shy;kyrkan</p>*/}
            <p className="Section-title">Högalidskyrkan</p>
            <p className="Section-second-title">14.30</p>
            <p className="Section-description-light"> Vigsel i Högalidskyrkan</p>
            <p className='Info-title'>HITTA DIT</p>
            <p className="Section-description-light-direction"> Högalids kyrkväg 7 <br></br> 117 30 Stockholm </p>
            <a className="Church-link" href="https://maps.app.goo.gl/hSVkbaTn2gJWiyge7" target="_blank">Öppna i Google Maps</a>
          </div>
          <div className="Schedule-image-container">
          <img className="Church-image" src={torn}></img>
          </div>
      </div>  
      <div className="Venue-content js-scroll">
          <div className="Venue-image-container">
            <img className="Church-image" src={venue}></img>
          </div>
          <div className="Venue-container">
            <p className="Section-title">Carlshälls Gård</p>
           {/*<p className="Section-second-title">16.30</p>*/}
            <p className="Section-description"> Gemensam promenad till Carlshälls Gård på Långholmen för mingel med efterföljande middag & fest fram till 02.00.</p>
             <p className='Info-title'>HITTA DIT</p>
             <p className="Section-description-direction"> Det tar ungefär 20-30 minuter att gå från kyrkan, men det går även bra att ta sig dit med bil vid behov, dock finns ett begränsat antal parkeringplatser. Hör av er i god tid innan om ni behöver kunna parkera så löser vi det!</p>
            <p className="Section-description-direction"> Karlshällsvägen 14 <br></br> 117 33 Stockholm </p>
            <a className="Venue-link" href="https://maps.app.goo.gl/k7GDNcBs8zuhkDyv7" target="_blank">Öppna i Google Maps</a>
          </div>
      </div>      
      <div className="Info-content js-scroll">
      <div className="Info-container">
        <p className="Section-title">Info</p>
        <p className='Info-title'>TAL</p>
           <p className="Section-description-info"> Om ni vill hålla tal så anmäler ni det till våra toastmasters Märta Wistrand & Herman Wistrand på: tal@elinsimon.se. Anmäl gärna tal så snart som möjligt, men senast den 1a september.</p>
        <p className='Info-title'>GÅVOR</p>    
            <p className="Section-description-info"> Er närvaro är den finaste gåvan vi kan få. Vill ni även ge oss en gåva så är det vi önskar oss mest utav allt ett bidrag till vår bröllopsresa (Swish till 076-867 98 75).</p>
        <p className='Info-title'>BARN</p>       
            <p className="Section-description-info"> Alla, barn som vuxna, är hjärtligt välkomna till vigseln. Efterföljande middag och fest är dock till för vuxna. Ammande barn och spädbarn är självklart välkomna.</p>
          <p className='Info-title'>KLÄDKOD</p>       
            <p className="Section-description-info"> Mörk kostym. Svart kostym och röd klänning ingår i klädkoden och går jättebra att ha! </p>
        </div>
        <div className="Info-image-container">
          <img className="Church-image" src={cheers}></img>
          </div>
      </div>
      <div className='Form-content js-scroll'>
          <div className="form-description">
          <div className="Section-title">OSA</div>
          <p className='Section-description'>OSA genom att fylla i formuläret, senast den <strong>1a augusti 2025</strong>.</p>
          <p className='Section-description'>Vi uppskattar om ni vill OSA en gång per person så att vi kan hålla koll på matpreferenser och allergier, tack!</p>
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
        <label for="email">Mailadress</label>
            <input
            type="email" 
            id="email" 
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
              value="Kommer"
              className="form-input-radio"
              required
              checked
             /* onInvalid={(e) => e.target.setCustomValidity('Vänligen fyll i om du kan komma')}
              onInput={(e) => e.target.setCustomValidity('')}*/
              />
              <label for="Kommer">Jag kommer!</label>
          </div>
          <div className="form-radio-item">
              <input 
              type="radio" 
              name="OSA" 
              required
              value="Kommer inte"
              className="form-input-radio"/>
              <label for="Kommer inte"> Jag kan tyvärr inte komma</label>
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
    
      <button className="OSA-button" type="submit">OSA</button>
  
    </form>

      </div>
     {/* <div className="Water-image-container">
            <img className="Water-image" src={water}></img>
          </div>*/}
      </div>

    </div>
  );
}
export default App;

